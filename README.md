<div align="center">

# Phil's PF2e AI Translator

![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green)
![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen)
![Foundry v14 Compatible](https://img.shields.io/badge/Foundry-v14-brightgreen)
![System](https://img.shields.io/badge/System-PF2e-blue)
![License](https://img.shields.io/badge/License-GPLv3-blue)
[![Version](https://img.shields.io/badge/version-v2.0.0-blue)](https://github.com/PhilsModules/phils-pf2e-ai-translator/releases)
[![Patreon](https://img.shields.io/badge/SUPPORT-Patreon-ff424d?logo=patreon)](https://www.patreon.com/PhilsModules)

<br>

**Der smarte Übersetzungs-Helfer für Foundry VTT – keine API-Kosten, volle Kontrolle.**
<br>
*The smart translation helper for Foundry VTT – no API costs, full control.*

📖 **[Hier geht es zur ausführlichen Anleitung](anleitung.md)**.
<br>

<a href="#-deutsche-anleitung"><img src="https://img.shields.io/badge/%20-Deutsche_Anleitung-black?style=for-the-badge&logo=germany&logoColor=red" alt="Deutsche Anleitung"></a> <a href="#-english-instructions"><img src="https://img.shields.io/badge/%20-English_Instructions-black?style=for-the-badge&logo=united-kingdom&logoColor=white" alt="English Instructions"></a>
</div>

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

**Übersetze deine Foundry VTT Journale kostenlos mit KI im neuen 1-Fenster Translation Studio.**

Phil's Pf2e Ai Translator verbindet deine Foundry VTT Welt mit der Power moderner KI. Das Besondere: **Du brauchst keine teuren API-Keys!** Das Modul arbeitet als intelligenter "Prompt-Engineer" für die kostenlosen Web-Versionen von Gemini, ChatGPT & Co.

> 🧙‍♂️ **Deep Dive:** Willst du wissen, wie der "Grammatik-Schutzschild" und die "KI-Geiselnahme" genau funktionieren? Lies das [Grimoire der Faulheit (funktion.md)](funktion.md).
>
> 🧐 **Für das gehobene Auditorium:** Bevorzugst du eine eloquente Ausdrucksweise? [Exegese der Systemarchitektur](funktionen.md).

## 🚀 Neue Features (v2.0.0)

* 🎨 **1-Fenster Translation Studio:** Das gesamte Modul läuft in einem zentralen, übersichtlichen Fenster mit visueller Schrittleiste (*1. Setup & Seiten ➔ 2. Prompt & KI ➔ 3. Einfügen ➔ 4. Vorschau & Prüfung*).
* 🧹 **Einmaliges Einfügen (Single-Paste):** KI-Antwort nur 1x einfügen. Übersetzung und Glossar werden in einem Schritt automatisch verarbeitet und von Formatierungsfehlern bereinigt.
* 👁️ **Visual Diff & Satzgegenüberstellung:** Zeigt bei Begriffskonflikten den **vollständigen originalen Ausgangssatz** direkt über dem KI-Vorschlag mit farblicher Hervorhebung an.
* 🎭 **High-Fantasy Pen-&-Paper Prosa:** Die Prompts leiten die KI zu flüssigem, atmosphärischem Pathfinder 2e Deutsch an ("einen Lebensweg beschreiten" statt "ihr begreift euch auf", "Lehrmeister Ot" statt "Lehrer Ot").
* 🏷️ **GM-Hinweis für Original-Namen:** Nennt englische Originalnamen bei Eigennamen (NPCs, Orte, Gegenstände) beim ersten Vorkommen in Klammern (z. B. `Lehrmeister Ot (Teacher Ot)`).
* 🛠️ **Automatische Fehler-Reparatur:** Korrektur von fehlerhaften KI-IDs und Verweisen vor dem Speichern.
* 💾 **Safety First:** Erstellt automatisch ein **Backup** (Kopie) deines Journals, bevor Änderungen angewendet werden.

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
   Klicke oben in der Kopfzeile des Journal-Tabs auf den rötlichen Button **`PF2e Übersetzer`** (mit dem Sprach-Icon).

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

**Automated Translation of Foundry VTT Journals with AI**

This module helps you to translate **large adventure modules** or long texts in Foundry VTT quickly and consistently. It is optimized for **PF2e** but works system-independently.

## 🚀 Key Features

* **No API Costs:** Works with the free web versions of Gemini, ChatGPT, & Co.
* **Batch Translation:** Translate multiple pages at once.
* **Glossary Support:** Automatically generates a glossary of names and terms to ensure consistent translation across pages.
* **Smart Paste:** Automatically finds and extracts the JSON code block from the AI response.
* **Official Translation Integration:** Checks the installed German Pathfinder 2e system module for existing translations to ensure consistency with official terms.
* **Safety First:** Automatically creates a **Backup** (Copy) of your Journal before applying changes.

## 📖 How to Use

### Workflow A: Translation (Green Check ✅)
1.  **Select Pages**: Choose the pages you want to translate.
2.  **Generate Prompt**: Click **"Copy Prompt"**.
3.  **AI Processing**: Paste into ChatGPT/Claude -> Copy Response (JSON).
4.  **Update**: Paste into Foundry -> **"Update Journal"**.
5.  **Loop**: The module automatically checks for remaining pages. If found, it opens the next window **pre-selected** for translation.

### Workflow B: Grammar Check (Blue Spell Check 🧙‍♂️)
1.  **Select Pages**: Choose pages (even if already translated) to check grammar.
2.  **Generate Prompt**: Click **"Grammar Check"**.
3.  **AI Processing**: Paste into ChatGPT/Claude -> Copy Response (JSON).
4.  **Update**: Paste into Foundry -> **"Update Journal"**.
5.  **Conflict Resolution**: If the AI tries to change protected terms, a warning dialog appears. You decide: Keep Original or Accept Change?


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








