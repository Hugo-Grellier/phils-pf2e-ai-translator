<div align="center">

# Phil's PF2e AI Translator

![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green)
![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen)
![Foundry v14 Compatible](https://img.shields.io/badge/Foundry-v14-brightgreen)
![System](https://img.shields.io/badge/System-PF2e-blue)
![License](https://img.shields.io/badge/License-GPLv3-blue)
[![Version](https://img.shields.io/badge/version-v3.1.3-blue)](https://github.com/PhilsModules/phils-pf2e-ai-translator/releases)
[![Patreon](https://img.shields.io/badge/SUPPORT-Patreon-ff424d?logo=patreon)](https://www.patreon.com/PhilsModules)

<br>

**Der smarte Übersetzungs-Helfer für Foundry VTT – keine API-Kosten, volle Kontrolle.**
<br>
*The smart translation helper for Foundry VTT – no API costs, full control.*

📖 **[Hier geht es zur ausführlichen Anleitung](anleitung.md)**.
<br>

<a href="#-deutsche-anleitung"><img src="https://img.shields.io/badge/%20-Deutsche_Anleitung-black?style=for-the-badge&logo=germany&logoColor=red" alt="Deutsche Anleitung"></a> <a href="#-english-instructions"><img src="https://img.shields.io/badge/%20-English_Instructions-black?style=for-the-badge&logo=united-kingdom&logoColor=white" alt="English Instructions"></a>
</div>

<br>

> [!NOTE]
> **A Quick Note / Hinweis in eigener Sache**
>
> 🇬🇧 **Hi everyone!**  
> A quick note before you start: I create these modules completely in my free time and offer them to the community for free. Since neither my partner nor I are professional graphic designers, translators, or full-time developers, maintaining these projects takes a huge amount of effort. To make these modules possible in this form, I use assistance from artificial intelligence, especially for translations and visual elements. Hiring professional designers or translators is simply something I cannot afford out of pocket.
> 
> Because of Foundry VTT's guidelines regarding artificial intelligence, several of my modules (such as *Phil's Day and Night Cycle*, *Phil's Console Doctor*, *Phil's PF2e RealDark*, and *Phil's Universal Translator*) have been removed from the official Foundry package listing. Even if a module is no longer listed there—or if others are removed in the future—do not worry: **the projects will continue!** You can always find all my modules, updates, releases, and manifest URLs directly here on [GitHub](https://github.com/PhilsModules) (see the [full module overview below](#-more-modules-by-phil--meine-weiteren-module)).
> 
> Thank you so much for your understanding and support!
> 
> ---
> 
> 🇩🇪 **Hallo zusammen!**  
> Ein kleiner Hinweis in eigener Sache, bevor ihr startet: Ich erstelle diese Module komplett in meiner Freizeit und stelle sie der Community kostenlos zur Verfügung. Da weder meine Lebensgefährtin noch ich Grafikdesigner, gelernte Übersetzer oder hauptberufliche Entwickler sind, ist die Pflege extrem aufwendig. Um die Module in dieser Form überhaupt anbieten zu können, nutze ich Unterstützung durch künstliche Intelligenz, zum Beispiel für Übersetzungen und grafische Elemente. Professionelle Designer oder Übersetzer kann ich mir privat schlicht nicht leisten.
> 
> Aufgrund der Richtlinien von Foundry VTT rund um künstliche Intelligenz wurden bereits mehrere meiner Module (wie z. B. *Phil's Day and Night Cycle*, *Phil's Console Doctor*, *Phil's PF2e RealDark* und *Phil's Universal Translator*) aus dem offiziellen Foundry-Verzeichnis entfernt. Auch wenn ein Modul dort nicht mehr gelistet ist – oder künftig noch weitere gelöscht werden sollten – müsst ihr euch keine Sorgen machen: **Das Projekt stirbt nicht!** Ihr findet alle meine Module, Updates, neue Versionen und Manifest-Links weiterhin direkt hier auf [GitHub](https://github.com/PhilsModules) (siehe die [komplette Modul-Übersicht weiter unten](#-more-modules-by-phil--meine-weiteren-module)).
> 
> Vielen Dank für euer Verständnis und eure Unterstützung!


> [!CAUTION]
> ### ⚖️ Private Use Only / Nur für den privaten Gebrauch
> **English:** Translations of copyrighted works (e.g. Pathfinder adventures) created with this module may **only be used for private purposes**. Publication, distribution, or commercial use (sale) is prohibited.
>
> **Deutsch:** Die mit diesem Modul erstellten Übersetzungen urheberrechtlich geschützter Werke dürfen **nur für den privaten Gebrauch** verwendet werden. Eine Veröffentlichung, Verbreitung oder kommerzielle Nutzung (Verkauf) ist nicht gestattet.

> [!TIP]
> ### ✅ Official Approval / Offizielle Freigabe
> **English:** The concept and workflow of this module have been **vetted and approved by Jan Wagner (Primetide), Head of Digital at Ulisses Spiele**.
> It has been confirmed that this technical approach (mapping existing glossary terms for private use) complies with community guidelines and respects the intellectual property of **Ulisses Spiele** and **Paizo**.
>
> **Deutsch:** Das Konzept und der Workflow dieses Moduls wurden von **Jan Wagner (Primetide), Head of Digital bei Ulisses Spiele**, geprüft und freigegeben.
> Es wurde bestätigt, dass dieser technische Ansatz (Mapping bestehender Glossar-Begriffe für den privaten Gebrauch) den Community-Richtlinien entspricht und das geistige Eigentum von **Ulisses Spiele** und **Paizo** respektiert.

<div align="center">
<br>
<img src="https://github.com/PhilsModules/phils-pf2e-ai-translator/blob/main/cover.png" alt="Pf2e translator Preview" width="800">

</div>
<br>

# <img src="https://flagcdn.com/48x36/de.png" width="28" height="21" alt="DE"> Deutsche Anleitung

**Übersetze deine Pathfinder 2e Abenteuer, Journale, Ordner und Kompendien kostenlos mit KI im neuen Next-Gen Studio.**

Phil's PF2e AI Translator verbindet deine Foundry VTT Welt mit der Power moderner KI. Das Besondere: **Du brauchst keine teuren API-Keys!** Das Modul arbeitet als intelligenter "Prompt-Engineer" für die kostenlosen Web-Versionen von Gemini, ChatGPT & Co.

> 🧙‍♂️ **Deep Dive:** Willst du wissen, wie der "Grammatik-Schutzschild" und die "KI-Geiselnahme" genau funktionieren? Lies das [Grimoire der Faulheit (funktion.md)](funktion.md).
>
> 🧐 **Für das gehobene Auditorium:** Bevorzugst du eine eloquente Ausdrucksweise? [Exegese der Systemarchitektur](funktionen.md).

## 🚀 Highlights (v3.1.0)

* 🛡️ **Automatischer Mojibake- & Umlaute-Schutz:** Erkennt Zeichenkodierungsfehler (`Ã¤`, `Ã¶`, `Ã¼`, `â€”` etc.) in der KI-Antwort und repariert sie automatisch zu echten deutschen Umlauten (`ä`, `ö`, `ü`, `ß`).
* 🔄 **Verlässliche Original-Backups:** Stellt sicher, dass bei mehrteiligen Übersetzungen Backups immer den reinen englischen Originalstand behalten und jederzeit 100% verlässlich wiederhergestellt werden können.
* 📁 **Universelles Drag & Drop:** Übersetze einzelne Journale, komplette Journal-Ordner (rekursiv), Gegenstände oder ganze **Kompendium-Packs**.
* 📖 **Offizielle Pathfinder-2e-Integration:** Gleicht Texte vorab mit über 15.000 offiziellen deutschen Begriffen aus dem `lang-de-pf2e`-Paket ab.
* ⚡ **Smart-Sync nach System-Updates:** Stellt nach offiziellen Abenteuer- oder System-Updates alle deutschen Texte mit 1 Klick kostenlos wieder her.
* 📚 **12-Kategorien Glossar:** Das Journal *AI Glossar* verwaltet neue Begriffe übersichtlich in 12 Themenkategorien (Orte, Götter, Monster, Zauber etc.).
* 🛡️ **PF2e LinkProtection:** Schützt Würfelwürfe, Rettungswürfe (`@Check`), Schaden (`@Damage`) und Verlinkungen vor Beschädigung.
* 🔍 **Journal-Suche & Schnellkorrektur:** Durchsucht alle Journale nach englischen Textresten oder Begriffen mit 1-Klick-Ersetzung.
* 📊 **Live-Kapazitätsanzeige:** Zeigt Zeichenmenge und Batches in Echtzeit an und teilt riesige Texte automatisch auf.

## 📦 Installation

1.  Öffne Foundry VTT.
2.  Gehe zum Reiter **Add-on Modules**.
3.  Klicke auf **Install Module**.
4.  Füge die folgende **Manifest URL** unten ein:
    ```text
    https://github.com/PhilsModules/phils-pf2e-ai-translator/releases/latest/download/module.json
    ```
5.  Klicke auf **Install**.

## 📖 Schritt-für-Schritt Anleitung

1. **Reiter "Journalnotizen" in Foundry öffnen:**
   Klicke in der rechten Seitenleiste von Foundry VTT auf das Buch-Symbol (**Journalnotizen**).

2. **Übersetzer starten:**
   Klicke oben in der Kopfzeile des Journal-Tabs auf den Button **`PF2e Übersetzer`** (mit dem Schild-Icon).

3. **Journal auswählen & Modus festlegen (Schritt 1 im Studio):**
   - Ziehe das gewünschte Journal per Drag & Drop direkt in das Fenster (oder wähle ein geöffnetes Journal aus).
   - Wähle deinen Arbeitsmodus: **Übersetzung**, **Grammatik-Check** oder **Nur Glossar**.
   - Wähle die Seiten aus, die übersetzt werden sollen.

4. **Prompt kopieren & KI öffnen (Schritt 2 im Studio):**
   - Klicke auf **"Weiter zu Prompt & KI"**.
   - Klicke auf **"Prompt kopieren & KI öffnen"**. Der Prompt landet automatisch in deiner Zwischenablage und dein gewählter KI-Anbieter (z. B. Gemini oder ChatGPT) öffnet sich in einem neuen Tab.

5. **KI füttern & Antwort kopieren:**
   - Füge den Prompt mit `STRG + V` bei der KI ein und sende die Anfrage ab.
   - Kopiere die gesamte generierte Antwort der KI.

6. **Antwort einfügen & analysieren (Schritt 3 im Studio):**
   - Kehre zu Foundry VTT zurück (das Studio wartet bereits im Schritt 3).
   - Füge die KI-Antwort per `STRG + V` in das Textfeld ein und klicke auf **"Analysieren & Prüfen"**.

7. **Vorschau prüfen & Journal aktualisieren (Schritt 4 im Studio):**
   - Prüfe die Satzgegenüberstellung und eventuelle Begriffskonflikte in der Vorschau. Bei Begriffskonflikten wird dir der originale Quellsatz direkt über dem KI-Satz angezeigt.
   - Klicke auf **"Journal aktualisieren & Übernehmen"**. Dein Journal wird sofort in Foundry aktualisiert!


# <img src="https://flagcdn.com/48x36/gb.png" width="28" height="21" alt="EN"> English Instructions

**Automated Translation of Pathfinder 2e Journals, Folders & Compendiums with AI**

Phil's PF2e AI Translator helps you translate **large adventure modules, entire compendium packs, item folders, and journals** in Foundry VTT quickly, consistently, and without API costs.

## 🚀 Key Features (v3.1.0)

* **Automatic Mojibake & Encoding Repair:** Automatically detects and heals character corruptions (e.g. `Ã¤` → `ä`, `â€”` → `—`) upon pasting AI responses.
* **True Original Backups:** Guaranteed clean English original backups and 1-click restore from snapshot flags for multi-batch processes.
* **Universal Drag & Drop:** Translate Journals, entire recursive Folders, Items, and complete **Compendium Packs**.
* **Official PF2e Nomenclature:** Automatically checks against 15,000+ official German rules terms from `lang-de-pf2e`.
* **Smart-Sync after Updates:** Re-applies all German translations after system or adventure updates in 1 click for free.
* **12-Category Glossary:** Auto-sorts new terms into a structured 12-page in-world journal (*AI Glossar*).
* **PF2e LinkProtection:** Ensures `@Check[...]`, `@Damage[...]`, `@Template[...]`, and inline rolls are never broken.
* **Journal Search & Fulltext Scanner:** Global search & replace across all world journals with residue detection.
* **Live Capacity Meter:** Real-time character counter that splits massive adventure chapters into manageable batches.
* **Safety & Restores:** Automatic backups and 1-click restore to English originals.

## 📖 How to Use

1. **Open Studio:** Click the **`PF2e Übersetzer`** button in the Journal Directory or right-click any Folder / Compendium / Journal.
2. **Select Content (Step 1):** Drag a Journal, Folder, or Compendium into the window. Select your mode (Translation, Grammar/Review, Glossary).
3. **Generate & Copy Prompt (Step 2):** Click **"Copy Prompt & Open AI"**. The prompt is in your clipboard and your chosen AI provider opens in a new tab.
4. **Paste & Analyze (Step 3):** Paste the AI's response in Step 3 and click **"Analyze Response"**.
5. **Preview & Apply (Step 4):** Review links and newly suggested glossary terms. Click **"Apply Final Update"**!


# ⚖️ Credits & Licenses

## Special Thanks
Ein riesiges Dankeschön und viele Grüße an **Primetide** und **Abaddon3851** für die Prüfung und Freigabe des Moduls!

## Pathfinder German Translation Data
Portions of this module utilize data from the [Pathfinder German Translation module](https://github.com/Foundry-VTT-PF2-German/lang-de-pf2e) by Marco Seither. Licensed under the MIT License.

> **MIT License**
>
> **Copyright (c) 2023 Marco Seither**
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Module License
**Phil's PF2e AI Translator** is licensed under the [GPL-3.0 License](LICENSE).


---

## 🐛 Bekannte ~~Bugs~~ Features


> ### 💾 Info: Da das Modul vor jeder Änderung ein Backup erstellt, kann es bei mehrstufigen Prozessen zu mehreren Backups kommen.
> * **Beispiel:** Du übersetzt *"Chapter 1"*.
>     1. Das Modul erstellt `Chapter 1 (Backup)`.
>     2. Das Journal wird übersetzt und automatisch in `Kapitel 1` umbenannt.
>     3. Wenn du nun weiter übersetzt oder den **Grammatik-Check** auf `Kapitel 1` ausführst, erstellt das Modul zur Sicherheit ein neues Backup: `Kapitel 1 (Backup)`.
> * Du hast dann also den ursprünglichen englischen Stand UND den unkorrigierten deutschen Stand als Sicherung.

Da dieses Modul als "Mittelsmann" zwischen Foundry und einer externen KI (wie ChatGPT oder Gemini) fungiert, liegen die meisten "Fehler" oft an der Laune der KI. Hier sind die Klassiker:

* **Die gesprächige KI (Broken JSON):**
    * *Das Problem:* Manchmal ignoriert die KI die Anweisung "nur JSON antworten" und schreibt davor: *"Hier ist deine Übersetzung..."* oder beendet den Code-Block nicht korrekt.
    * *Der Fix:* Das Modul nutzt **Smart Paste**, um das zu filtern. Wenn es trotzdem rot aufleuchtet: Lösche den Einleitungssatz manuell aus dem Textfeld, bevor du auf "Aktualisieren" klickst.

* **Das Token-Limit (Text bricht ab):**
    * *Das Problem:* Wenn du versuchst, 50 Journal-Seiten auf einmal in die kostenlose Version von ChatGPT zu werfen, wird die Antwort mitten im Satz abbrechen.
    * *Der Fix:* Nutze die Batch-Funktion klug. Übersetze große Abenteuer kapitelweise (z.B. 5-10 Seiten pro Rutsch).

* **HTML-Salat:**
    * *Das Problem:* Bei sehr komplex verschachtelten Tabellen vergisst die KI manchmal ein schließendes `</div>` oder `</td>`. Das kann das Layout in Foundry zerschießen.
    * *Der Fix:* Wenn eine Seite komisch aussieht, öffne den HTML-Editor in Foundry und schau, ob am Ende ein Tag fehlt.

---

### 🇬🇧 Known Issues


> ### 💾 Info: Since the module creates a backup before every operation, multi-step processes can result in multiple backups.
> * **Example:** You translate *"Chapter 1"*.
>     1. The module creates `Chapter 1 (Backup)`.
>     2. The journal is translated and renamed to `Kapitel 1`.
>     3. If you run the **Grammar Check** on `Kapitel 1`, the module creates a new safety backup: `Kapitel 1 (Backup)`.
> * You will end up with both the original English state AND the raw German translation state as backups.

Since this module acts as a "middleman" between Foundry and an external AI, most "bugs" are actually AI quirks.

* **Chatty AI (Broken JSON):** Sometimes the AI ignores the "JSON only" rule and adds conversational filler. **Smart Paste** usually fixes this, but you might occasionally need to manually delete the "Here is your translation" text.
* **Token Limits:** The free versions of ChatGPT/Claude have output limits. If you try to translate a massive journal at once, the text will cut off. **Solution:** Translate in smaller batches.
* **HTML Errors:** Rarely, the AI might forget to close an HTML tag (like a `</div>`), causing visual glitches.



---

## 🧩 More Modules by Phil / Meine weiteren Module

🇬🇧 **Discover all of my Foundry VTT modules!**  
Because of Foundry VTT's policies regarding AI assistance (which I use for translations and visual elements as a solo hobby developer), several of my modules have been removed from the official Foundry package directory. Below you can see which modules are still available directly on [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) and which ones are hosted exclusively on [GitHub](https://github.com/PhilsModules/). **All modules remain actively maintained** and can always be installed in Foundry VTT using their **Manifest URL**!

🇩🇪 **Entdecke alle meine Foundry VTT Module!**  
Aufgrund der Richtlinien von Foundry VTT zum Einsatz von künstlicher Intelligenz (die ich als Solo-Hobbyentwickler für Übersetzungen und Grafiken nutze) wurden einige meiner Module aus dem offiziellen Foundry-Verzeichnis entfernt. In der Tabelle siehst du auf einen Blick, welche Module noch direkt über [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) gelistet sind und welche exklusiv über [GitHub](https://github.com/PhilsModules/) bezogen werden können. **Alle Module werden aktiv weiterentwickelt** und lassen sich jederzeit über ihre **Manifest-URL** in Foundry VTT installieren!

| Module / Modul | Foundry VTT Listing | Description (🇬🇧 EN / 🇩🇪 DE) | Links |
| :--- | :---: | :--- | :---: |
| **[Phil's Day and Night Cycle](https://github.com/PhilsModules/phils-day-night-cycle)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 Immersive clock widget with Solar Arc, full calendar system, and a living weather engine featuring 360° wind physics, volumetric clouds, and 4,800+ narrative weather reports.<br>🇩🇪 Immersives Uhr-Widget mit Sonnenlauf, vollwertigem Kalendersystem und lebendiger Wetter-Engine mit 360°-Windphysik, volumetrischer Wolkendecke und über 4.800 Wetterberichten. | [GitHub](https://github.com/PhilsModules/phils-day-night-cycle) · [Manifest](https://github.com/PhilsModules/phils-day-night-cycle/releases/latest/download/module.json) |
| **[Phil's Console Doctor & Task Manager](https://github.com/PhilsModules/phils-console-doctor)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 Windows 11-style Task Manager & diagnostics suite for Foundry VTT with real-time CPU/GPU load breakdown, conflict detective, A/B culprit finder, and AI error analysis.<br>🇩🇪 Diagnose-Suite im Windows-11-Task-Manager-Stil mit Live-CPU/GPU-Auslastung, Konflikt-Detektiv, automatischem A/B-Problemlöser und KI-Fehleranalyse. | [GitHub](https://github.com/PhilsModules/phils-console-doctor) · [Manifest](https://github.com/PhilsModules/phils-console-doctor/releases/latest/download/module.json) |
| **[Phil's PF2e RealDark](https://github.com/PhilsModules/phils-pf2e-realdark)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 A true, customizable dark mode for Pathfinder 2e with 30+ handcrafted theme presets, live preview wizard, and high-contrast readability.<br>🇩🇪 Ein echter, anpassbarer Dark Mode für Pathfinder 2e mit über 30 kuratierten Presets, Live-Vorschau-Assistent und erstklassiger Lesbarkeit. | [GitHub](https://github.com/PhilsModules/phils-pf2e-realdark) · [Manifest](https://github.com/PhilsModules/phils-pf2e-realdark/releases/latest/download/module.json) |
| **[Phil's Universal Translator](https://github.com/PhilsModules/phils-universal-translator)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 System-agnostic local translation assistant for personal game prep with zero API costs, direct local LLM (Ollama) integration, LinkProtection, and 12-category lore glossary.<br>🇩🇪 Systemunabhängiger Übersetzungs-Assistent für die private Spielvorbereitung ohne API-Kosten, mit lokaler Ollama-Anbindung, LinkProtection und 12-Kategorien-Glossar. | [GitHub](https://github.com/PhilsModules/phils-universal-translator) · [Manifest](https://github.com/PhilsModules/phils-universal-translator/releases/latest/download/module.json) |
| **[Phil's UI Tweaks](https://github.com/PhilsModules/phils-foundry-ui-tweaks)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Customize, reorder, hide, and group Scene Controls (left toolbar) and Sidebar Tabs (right toolbar) into custom pop-out folders with a sleek Modern Dark UI.<br>🇩🇪 Passe die linke Werkzeugleiste und rechte Seitenleiste frei an – umsortieren, ausblenden und Tabs in eigenen Ausklapp-Ordnern im Modern Dark UI Design gruppieren. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-foundry-ui-tweaks) · [Manifest](https://github.com/PhilsModules/phils-foundry-ui-tweaks/releases/latest/download/module.json) |
| **[Phil's Quest Tracker](https://github.com/PhilsModules/phils-quest-tracker)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Immersive Quest Log in a Modern Dark UI featuring collaborative party quests, job boards, drag & drop rewards, and automatic calendar synchronization.<br>🇩🇪 Immersives Quest-Log im Modern Dark UI mit kollaborativen Gruppenquests, Auftragsbrett, Drag-&-Drop-Belohnungen und automatischer Kalender-Synchronisation. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-quest-tracker) · [Manifest](https://github.com/PhilsModules/phils-quest-tracker/releases/latest/download/module.json) |
| **[Phil's PF2e AI Translator](https://github.com/PhilsModules/phils-pf2e-ai-translator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Next-Gen AI translation studio for Pathfinder 2e with `lang-de-pf2e` compendium integration (15,000+ official terms), LinkProtection, Smart-Sync, and zero API costs.<br>🇩🇪 KI-Übersetzungs-Studio für Pathfinder 2e mit `lang-de-pf2e`-Integration (über 15.000 offizielle Begriffe), LinkProtection, Smart-Sync und null API-Kosten. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-pf2e-ai-translator) · [Manifest](https://github.com/PhilsModules/phils-pf2e-ai-translator/releases/latest/download/module.json) |
| **[Phil's PF2e Action Colours](https://github.com/PhilsModules/phils-pf2e-action-colours)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Visualizes the Pathfinder 2e 3-Action (and 4-Action Quickened) economy on the drag ruler with dynamic condition/feat detection, smart routing, and 3 colorblind modes.<br>🇩🇪 Visualisiert die Pathfinder 2e 3-Aktionen-Ökonomie (inkl. 4. Aktion bei Hast) direkt beim Token-Ziehen – mit Zustandserkennung, Smart Routing und 3 Farbenblind-Modi. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-pf2e-action-colours) · [Manifest](https://github.com/PhilsModules/phils-pf2e-action-colours/releases/latest/download/module.json) |
| **[Phil's Random Names](https://github.com/PhilsModules/phils-random-names)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Deluxe generator suite with 5.3M+ NPC name combinations, tavern menus, treasure pouches, custom merchant shops, and 23,000+ entries with drag & drop item creation.<br>🇩🇪 Deluxe-Generator mit über 5,3 Mio. NSC-Namen, Tavernen-Menüs, Schatzbeuteln, eigenen Händler-Auslagen und über 23.000 Einträgen inkl. Drag-&-Drop-Item-Erstellung. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-random-names) · [Manifest](https://github.com/PhilsModules/phils-random-names/releases/latest/download/module.json) |
| **[Phil's AI Assistant](https://github.com/PhilsModules/phils-ai-assistant)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Connect your Foundry VTT world to Gemini, ChatGPT, Claude, Copilot, Perplexity, or local Ollama with zero API costs to write lore, edit items, and generate image prompts.<br>🇩🇪 Verbinde deine Foundry-Welt ohne API-Kosten mit Gemini, ChatGPT, Claude, Copilot, Perplexity oder lokal mit Ollama für Lore-Texte, Item-Anpassungen und Bild-Prompts. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-ai-assistant) · [Manifest](https://github.com/PhilsModules/phils-ai-assistant/releases/latest/download/module.json) |
| **[Phil's Token Studio](https://github.com/PhilsModules/phils-token-studio)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 High-performance in-game visual token editor with layer management, smart masking, 3D pop-out effects, and Foundry Dynamic Token Ring integration.<br>🇩🇪 Leistungsstarker visueller Token-Editor direkt in Foundry VTT mit Ebenensystem, intelligenter Maskierung, 3D-Pop-out-Effekten und Dynamic-Token-Ring-Unterstützung. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-token-studio) · [Manifest](https://github.com/PhilsModules/phils-token-studio/releases/latest/download/module.json) |
| **[Phil's Journal Translator](https://github.com/PhilsModules/phils-journal-translator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 System-agnostic AI translation assistant for Foundry VTT journals using free web AI services (Gemini, ChatGPT, Claude, etc.) with automatic backups.<br>🇩🇪 Systemunabhängiger KI-Übersetzungs-Assistent für Foundry VTT Journale über kostenlose Web-KIs (Gemini, ChatGPT, Claude etc.) mit automatischen Backups. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-journal-translator) · [Manifest](https://github.com/PhilsModules/phils-journal-translator/releases/latest/download/module.json) |
| **[Phil's Random Quests](https://github.com/PhilsModules/phils-random-quests)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Instant adventure and quest idea generator for Pathfinder 2e and D&D 5e when your party goes off the rails.<br>🇩🇪 Schneller Generator für spontane Abenteuer- und Quest-Ideen in Pathfinder 2e und D&D 5e am Spieltisch. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-random-quests) · [Manifest](https://github.com/PhilsModules/phils-random-quests/releases/latest/download/module.json) |
| **[Phil's Art Replacer](https://github.com/PhilsModules/phils-art-replacer)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Scans your entire world and installed modules to automatically find and replace missing actor and token artwork with side-by-side comparison.<br>🇩🇪 Durchsucht deine gesamte Welt und installierte Module, um fehlende Bilder für Akteure und Tokens automatisch mit Vorher-Nachher-Vergleich zu ersetzen. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-art-replacer) · [Manifest](https://github.com/PhilsModules/phils-art-replacer/releases/latest/download/module.json) |
| **[Phil's Map Migrator](https://github.com/PhilsModules/phils-map-migrator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Professional scene migration tool with 1–5 point mathematical calibration, geometry failsafe, and automatic scaling for walls, lights, tokens, and pins.<br>🇩🇪 Profi-Werkzeug für präzise Szenen-Migration mit 1–5-Punkte-Kalibrierung, Geometrie-Wächter und automatischer Skalierung für Wände, Lichter, Tokens und Pins. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-map-migrator) · [Manifest](https://github.com/PhilsModules/phils-map-migrator/releases/latest/download/module.json) |

<br>

<div align="center">
    <h2>❤️ Support the Development</h2>
    <p>If you enjoy this module and want to support open-source development for Foundry VTT, check out my Patreon!</p>
    <p>Gefällt dir das Modul? Unterstütze die Weiterentwicklung auf Patreon!</p>
    <a href="https://www.patreon.com/PhilsModules">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron" width="200" />
    </a>
    <br><br>
    <p><i>Made with ❤️ for the Foundry VTT Community</i></p>
</div>








