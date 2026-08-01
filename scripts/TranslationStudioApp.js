import { loc, resolvePrompt, getCleanData, MODULE_ID, injectOfficialTranslations, injectGlossaryMarkers, applyResolvedUpdate, smartParseAiResponse, buildPreApplyDiff, addToGlossary } from './TranslationLogic.js';

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

const THEMES = {
    gemini: { url: "https://gemini.google.com/app" },
    chatgpt: { url: "https://chatgpt.com/" },
    claude: { url: "https://claude.ai/new" },
    copilot: { url: "https://copilot.microsoft.com/" },
    perplexity: { url: "https://www.perplexity.ai/" }
};

export class TranslationStudioApp extends HandlebarsApplicationMixin(ApplicationV2) {
    static DEFAULT_OPTIONS = {
        id: "translation-studio",
        tag: "form",
        window: {
            title: "AI Translation Studio",
            icon: "fas fa-language",
            resizable: true,
            contentClasses: ["translation-studio-window", "standard-form"]
        },
        position: {
            width: 660,
            height: 720
        },
        form: {
            handler: TranslationStudioApp.myFormHandler,
            closeOnSubmit: false
        },
        actions: {
            toggleSelect: TranslationStudioApp.onToggleSelect,
            selectNext: TranslationStudioApp.onSelectNext,
            generatePrompt: TranslationStudioApp.onGeneratePrompt,
            backToStep1: TranslationStudioApp.onBackToStep1,
            copyPromptAndOpenAi: TranslationStudioApp.onCopyPromptAndOpenAi,
            goToStep3: TranslationStudioApp.onGoToStep3,
            backToStep2: TranslationStudioApp.onBackToStep2,
            analyzePaste: TranslationStudioApp.onAnalyzePaste,
            backToStep3: TranslationStudioApp.onBackToStep3,
            applyFinalUpdate: TranslationStudioApp.onApplyFinalUpdate
        }
    };

    static PARTS = {
        form: {
            template: "modules/phils-pf2e-ai-translator/templates/translation-studio.hbs"
        }
    };

    constructor(options = {}) {
        super(options);
        this.document = options.document || null;
        this.step = 1;
        this.mode = options.mode || 'translate';
        this.selectedPageIds = [];
        this.customInstruct = "";
        this.generatedPrompt = "";
        this.pastedText = "";
        this.parseError = null;
        this.previewData = null;
        this.parseResult = null;
    }

    async _prepareContext(_options) {
        const doc = this.document;
        const hasDoc = !!doc;
        let docName = hasDoc ? doc.name : "";

        let pages = [];
        if (hasDoc && doc.pages) {
            const batchSize = game.settings.get(MODULE_ID, 'batchSize') || 10;
            const pageList = Array.from(doc.pages);
            let selectedCount = 0;

            pages = pageList.map(p => {
                const isProcessed = p.getFlag(MODULE_ID, 'aiProcessed');
                const isGrammarChecked = p.getFlag(MODULE_ID, 'aiGrammarChecked');
                const isCompleted = (this.mode === 'grammar') ? isGrammarChecked : isProcessed;

                let isChecked = false;
                if (!isCompleted && selectedCount < batchSize) {
                    isChecked = true;
                    selectedCount++;
                }

                return {
                    id: p.id,
                    name: p.name,
                    checked: isChecked,
                    isProcessed,
                    isGrammarChecked
                };
            });
        }

        return {
            step: this.step,
            mode: this.mode,
            hasDoc,
            docName,
            pages,
            customInstruct: this.customInstruct,
            generatedPrompt: this.generatedPrompt,
            pastedText: this.pastedText,
            parseError: this.parseError,
            previewData: this.previewData
        };
    }

    _onRender(context, options) {
        super._onRender(context, options);
        const html = this.element;

        // Mode Radio change listener
        html.querySelectorAll('input[name="mode"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.mode = e.target.value;
                this.render();
            });
        });

        // Dropzone binding for Step 1
        const dropZone = html.querySelector('#ts-dropzone');
        if (dropZone) {
            dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.background = "rgba(79, 172, 254, 0.2)"; });
            dropZone.addEventListener('dragleave', e => { e.preventDefault(); dropZone.style.background = "rgba(0,0,0,0.2)"; });
            dropZone.addEventListener('drop', async e => {
                e.preventDefault();
                dropZone.style.background = "";
                const data = JSON.parse(e.dataTransfer.getData('text/plain'));

                let doc = null;
                const JournalEntry = globalThis.JournalEntry;
                const JournalEntryPage = globalThis.JournalEntryPage;

                if (data.type === "JournalEntry") {
                    doc = await JournalEntry.fromDropData(data);
                } else if (data.type === "JournalEntryPage") {
                    const page = await JournalEntryPage.fromDropData(data);
                    if (page) doc = page.parent;
                }

                if (doc) {
                    if (!doc.isOwner) {
                        ui.notifications.warn(loc('WarnNoPermission') || "Sie benötigen Besitzer-Rechte für dieses Journal.");
                        return;
                    }
                    this.document = doc;
                    this.render();
                }
            });
        }
    }

    // --- Action Handlers ---

    static onToggleSelect(event, target) {
        const checkboxes = Array.from(this.element.querySelectorAll('.ts-page-checkbox'));
        const allChecked = checkboxes.every(c => c.checked);
        checkboxes.forEach(c => c.checked = !allChecked);
    }

    static onSelectNext(event, target) {
        const batchSize = game.settings.get(MODULE_ID, 'batchSize') || 10;
        const checkboxes = Array.from(this.element.querySelectorAll('.ts-page-checkbox'));
        let lastCheckedIndex = -1;

        checkboxes.forEach((el, index) => {
            if (el.checked) lastCheckedIndex = index;
        });

        checkboxes.forEach(c => c.checked = false);
        const start = lastCheckedIndex + 1;
        let count = 0;

        if (start < checkboxes.length) {
            for (let i = start; i < checkboxes.length; i++) {
                if (count < batchSize) { checkboxes[i].checked = true; count++; }
            }
        } else {
            for (let i = 0; i < checkboxes.length; i++) {
                if (count < batchSize) { checkboxes[i].checked = true; count++; }
            }
        }
    }

    static async onGeneratePrompt(event, target) {
        if (!this.document) return;

        // Collect selected pages
        const selectedIds = [];
        this.element.querySelectorAll('.ts-page-checkbox:checked').forEach(c => selectedIds.push(c.value));
        this.selectedPageIds = selectedIds;

        const customInstructEl = this.element.querySelector('#ts-custom-instruct');
        if (customInstructEl) this.customInstruct = customInstructEl.value;

        const systemName = game.settings.get(MODULE_ID, 'gameSystem') || "Pathfinder 2e";
        let docData = getCleanData(this.document, true, selectedIds);

        const glossaryExists = game.journal.some(j => j.name === "AI Glossary" || j.name === "AI Glossar");

        let systemPromptKey = "TranslateWithGlossary";
        if (this.mode === 'grammar') {
            systemPromptKey = "GrammarCheck";
        } else if (this.mode === 'glossary') {
            systemPromptKey = "GlossaryGen";
        } else if (this.mode === 'translate') {
            systemPromptKey = glossaryExists ? "TranslateWithGlossary" : "TranslateAndCreateGlossary";
        }

        if (this.mode === 'grammar') {
            const { processedData } = await injectGlossaryMarkers(docData);
            docData = processedData;
        } else if (this.mode === 'translate') {
            const { docData: officialData } = await injectOfficialTranslations(docData);
            docData = officialData;
        }

        const docJsonStr = JSON.stringify(docData, null, 2);

        let promptText = resolvePrompt(systemPromptKey, {
            systemName,
            jsonString: docJsonStr,
            userPrompt: this.customInstruct ? this.customInstruct : "(keine)"
        });

        if (!promptText) {
            promptText = `System: ${systemName}\nMode: ${this.mode}\nJSON:\n${docJsonStr}`;
        }

        this.generatedPrompt = promptText;

        this.step = 2;
        this.render();
    }

    static onBackToStep1(event, target) {
        this.step = 1;
        this.render();
    }

    static async onCopyPromptAndOpenAi(event, target) {
        if (!this.generatedPrompt) return;

        await navigator.clipboard.writeText(this.generatedPrompt);
        ui.notifications.info("Prompt in die Zwischenablage kopiert!");

        const providerKey = game.settings.get(MODULE_ID, 'aiProvider') || 'gemini';
        const url = THEMES[providerKey]?.url || THEMES.gemini.url;
        window.open(url, '_blank');

        this.step = 3;
        this.render();
    }

    static onGoToStep3(event, target) {
        this.step = 3;
        this.render();
    }

    static onBackToStep2(event, target) {
        this.step = 2;
        this.render();
    }

    static async onAnalyzePaste(event, target) {
        const textarea = this.element.querySelector('#ts-paste-textarea');
        if (textarea) this.pastedText = textarea.value;

        if (!this.pastedText || !this.pastedText.trim()) {
            this.parseError = "Bitte füge die Antwort der KI ein.";
            this.render();
            return;
        }

        const parseResult = smartParseAiResponse(this.pastedText);

        if (parseResult.error) {
            this.parseError = parseResult.error;
            this.render();
            return;
        }

        this.parseError = null;
        this.parseResult = parseResult;
        this.previewData = await buildPreApplyDiff(this.document, parseResult, this.mode, this.selectedPageIds);

        this.step = 4;
        this.render();
    }

    static onBackToStep3(event, target) {
        this.step = 3;
        this.render();
    }

    static async onApplyFinalUpdate(event, target) {
        if (!this.previewData) return;

        const resolutions = {};
        if (this.previewData.hasConflicts && this.previewData.conflicts) {
            this.previewData.conflicts.forEach(c => {
                const checkedRadio = this.element.querySelector(`input[name="conflict_${c.id}"]:checked`);
                if (checkedRadio && checkedRadio.value === 'keep') {
                    resolutions[c.id] = 'keep';
                } else {
                    resolutions[c.id] = c.originalTerm;
                }
            });
        }

        // Apply translation update if present
        if (this.previewData.translationJson) {
            const updateRes = await applyResolvedUpdate(this.document, this.previewData.translationJson, resolutions, this.mode, this.selectedPageIds);
            if (typeof updateRes === 'string') {
                ui.notifications.error(updateRes);
                return;
            }
        }

        // Apply glossary journal creation if needed
        if (this.previewData.glossaryJournalJson) {
            const existingGlossary = game.journal.find(j => j.name === "AI Glossary" || j.name === "AI Glossar");
            if (!existingGlossary) {
                await JournalEntry.create(this.previewData.glossaryJournalJson);
                ui.notifications.info(loc('InfoGlossaryCreated') || "Neues Journal 'AI Glossary' erfolgreich erstellt!");
            }
        }

        // Apply new glossary terms if present
        if (this.previewData.newGlossaryItems && this.previewData.newGlossaryItems.length > 0) {
            await addToGlossary(this.previewData.newGlossaryItems);
        }

        ui.notifications.success(`Journal "${this.document.name}" erfolgreich aktualisiert!`);

        // Reset studio for next batch
        this.step = 1;
        this.pastedText = "";
        this.generatedPrompt = "";
        this.previewData = null;
        this.render();
    }

    static async myFormHandler(event, form, formData) { }
}
