# 📖 Anleitung: Phil's PF2e AI Translator (v3.0.0)

Willkommen beim ultimativen Übersetzungs-Tool für Foundry VTT (Pathfinder 2e). Dieses Modul hilft dir, Journale, ganze Ordner und Kompendium-Packs schnell, atmosphärisch und konsistent mithilfe kostenloser KI (Gemini, ChatGPT, Claude etc.) zu übersetzen.

## 1. Erste Schritte

1. **Installation**: Stelle sicher, dass das Modul in Foundry aktiviert ist (sowie das empfohlene `lang-de-pf2e`-Paket für offizielle deutsche Pathfinder-Begriffe).
2. **Einstellungen**:
    * Navigiere zu `Einstellungen` > `Modul-Einstellungen` > `Phil's PF2e AI Translator`.
    * **KI-Anbieter**: Wähle deinen bevorzugten KI-Anbieter (z. B. Google Gemini, ChatGPT, Claude).
    * **Batch-Größe**: Standard ist 10 Seiten/Einträge pro Durchgang.
    * **Max. KI-Batch-Kapazität**: Standard ist 16.000 Zeichen (optimal abgestimmt, um Abbrüche bei der KI zu verhindern).

## 2. Das Translation Studio (Schritt-für-Schritt)

Das Modul führt dich in einem eleganten 4-Schritte-Studio durch den gesamten Übersetzungsprozess.

### Schritt 1: Setup & Auswahl
1. Klicke im Foundry-Reiter **Journalnotizen** oder **Kompendien** oben auf den Button **`PF2e Übersetzer`** (oder nutze den Rechtsklick auf jeden Ordner / jedes Journal).
2. Ziehe ein Journal, einen ganzen Ordner oder ein Kompendium per Drag & Drop in das Fenster (oder wähle ein Kompendium aus dem Dropdown-Menü).
3. Wähle deinen Modus:
   - **Übersetzen:** Übersetzt englische Texte ins deutsche Pathfinder 2e High-Fantasy-Deutsch.
   - **Lektorat / Grammatik:** Prüft deutsche Texte auf Stil, Rechtschreibung und Regelkonsistenz.
   - **Neues Glossar generieren:** Extrahiert wichtige Eigennamen und Begriffe aus Texten.
4. Markiere die gewünschten Seiten oder nutze die praktischen Schnellfilter (*"Nur nicht übersetzt"*, *"Nächster Batch"*, *"Alle/Keine"*).
5. **Live-Kapazitätsbalken:** Der farbige Balken zeigt dir in Echtzeit an, wie viele Zeichen ausgewählt sind und ob die Texte in einen oder mehrere Teil-Batches aufgeteilt werden.
6. Klicke unten auf **"Prompt erstellen"**.

### Schritt 2: Prompt kopieren & KI öffnen
1. Klicke auf **"Kopieren & KI öffnen"**.
2. Der speziell formatierte Prompt wird automatisch in deine Zwischenablage kopiert und dein KI-Anbieter öffnet sich in einem neuen Browser-Tab.
3. Klicke bei der KI in das Eingabefeld, drücke `STRG + V` und sende die Nachricht ab.
4. Kopiere die gesamte Antwort der KI.

### Schritt 3: Einfügen & Analysieren
1. Kehre zu Foundry VTT zurück. Das Studio wartet bereits im Schritt 3 **Antwort**.
2. Füge die gesamte KI-Antwort per `STRG + V` in das Textfeld ein.
3. Klicke auf **"Antwort analysieren"**. Das Modul verarbeitet Übersetzung, Verlinkungen und Glossar-Vorschläge automatisch in einem Schritt.

### Schritt 4: Vorschau & Speichern
1. Das Modul prüft alle Verlinkungen (`@UUID`, `@Check`, `@Damage`) auf Unversehrtheit und zeigt dir eine transparente Vorschau aller übersetzten Seiten.
2. **Glossar-Vorschläge:** Neu erkannte Eigennamen und Begriffe werden direkt angezeigt und können per Häkchen automatisch in die 12 Kategorieseiten deines **AI Glossars** übernommen werden.
3. Klicke auf **"Änderungen anwenden & Speichern"** (oder *"Teil anwenden & Weiter mit nächstem Teil"* bei mehrteiligen Batches). Dein Dokument wird sofort aktualisiert und im Translation Memory gesichert!

## 3. Die Werkzeuge in der Kopfleiste

* ⚡ **Smart-Sync:** Gleicht nach einem offiziellen System- oder Abenteuer-Update deine Welt mit dem Translation Memory ab und stellt unveränderte deutsche Übersetzungen mit einem Klick kostenlos wieder her.
* 💾 **Backup & Import:** Exportiert dein gesamtes Übersetzungswissen als `.json`-Datei oder liest frühere Backups ein.
* 🔍 **Suche & Volltext-Scanner:** Durchsucht deine Journale nach Begriffen, findet vergessene englische Textreste und ermöglicht weltweites Ersetzen.
* 📚 **Glossar:** Öffnet dein In-World-Journal *AI Glossar* direkt in Foundry.
* 📊 **Statistik:** Zeigt dir genau an, wie viele Wörter du bereits übersetzt hast und wie viele Stunden Arbeit dir das Modul erspart hat.
*   **Original**: Zeigt den Begriff, wie er im Glossar steht (z.B. "Langschwert").
*   **Neu (KI)**: Zeigt, was die KI daraus machen wollte (z.B. "Langes Schwert"). Beachte das es manchmal schwer sein kann vorher von nachher zu      unterscheiden. 
*   **Entscheidung**:
    *   🔘 **Wiederherstellen**: Der Begriff aus dem Glossar wird erzwungen. (Sicherste Option).
    *   🔘 **Neu behalten**: Du erlaubst der KI, den Begriff in diesem speziellen Fall zu ändern (z.B. bei Grammatik-Anpassungen).
*   **"Alle neuen übernehmen"**: Akzeptiert alle Änderungen der KI mit einem Klick.

---

## 4. Features & Funktionen

### 📚 KI-Glossar (Für konsistente Begriffe)
Damit die KI weiß, dass "Mage Hand" nicht "Magierhand", sondern "Magische Hand" heißt, nutzt das Modul ein Glossar.
* **Funktionsweise**: Das Modul sucht nach einem Journal namens **"AI Glossary"** (oder "AI Glossar"). Existiert es, wird der Inhalt automatisch jeder Anfrage beigefügt.
* **Erstellung**: Nimm ein Journal mit vielen Namen/Orten, setze den Haken bei "Nur Glossar (Namen) generieren" und lass die KI eine Liste für dich erstellen.

### 📝 Grammatik-Check
* Wähle im Menü `Grammatik-Check` statt `Übersetzung`.
* Die KI prüft den Text auf Fehler und Logik (z. B. korrigiert sie "Schattenwandeln Zwilling" zu "Schattenzwilling").
* *Sicherheit:* Begriffe aus dem Glossar werden dabei geschützt, damit die KI sie nicht "verschlimmbessert".

### 🔄 Auto-Batch (Workflow-Automatisierung)
Das Modul denkt mit!
*   **Automatische Weiterschaltung**: Nachdem du einen Batch (Standard: 10 Seiten, einstellbar in den Settings) bearbeitet hast, öffnet sich automatisch das nächste Fenster.
*   **Intelligente Auswahl**:
    *   Im **Übersetzungs-Modus**: Wählt die nächsten 10 *unübersetzten* Seiten.
    *   Im **Grammatik-Modus**: Wählt die nächsten 10 Seiten, die noch *nicht geprüft* wurden.

### ✅ Status-Symbole
In der Seitenliste siehst du den Status jeder Seite:
*   ✅ **Grüner Haken**: Diese Seite wurde bereits **übersetzt**.
*   **Blaues "AB" mit Haken**: Diese Seite wurde bereits **grammatikalisch geprüft**.

---

## 5. Fehlerbehebung (Troubleshooting)

### Die KI "halluziniert" (Häufigster Fehler)
Die KI kann manchmal den Kontext verlieren oder Unsinn schreiben. Das lässt sich technisch nie zu 100 % verhindern.
* **Lösung**: Wenn die KI offensichtlich Fehler macht ("spinnt"), versuche nicht, sie im selben Chat zu korrigieren. Das verschwendet meist nur deine Tokens (Nutzungslimit).
* **Besser**: Starte einen **neuen Chat** und füge den Prompt erneut ein.

### Fehler: "Incomplete AI Response"
Die KI hat mitten im Satz aufgehört, weil die maximale Antwortlänge erreicht wurde.
* **Lösung A**: Schreibe der KI "Weiter" oder "Continue". Kopiere danach **beide** Teile der Antwort zusammen in das Tool.
* **Lösung B**: Wähle beim nächsten Mal weniger Seiten aus ("Batch Size" in den Einstellungen reduzieren).

### Fehler: "JSON invalid"
Die KI hat keinen gültigen Programm-Code geliefert oder Text außerhalb der Code-Blöcke geschrieben.
* **Lösung**: Überprüfe die Antwort. Versuche, nur den Teil zwischen ` ```json ` und ` ``` ` manuell zu kopieren und einzufügen. Hilft das nicht -> Neuer Chat.

### Fehler: "ID Verification Failed"
Die KI hat halluziniert und versucht, die internen IDs der Journal-Seiten zu ändern oder zu löschen. Das Modul blockiert dies zum Schutz deiner Daten.
* **Lösung**: Versuche es erneut ("Regenerate" bei der KI). Wenn das Problem bestehen bleibt, wähle weniger Seiten aus oder starte einen neuen Chat.

### Fehler: "Glossary JSON in Translation" / "Invalid Glossary JSON"
Du hast versehentlich den falschen Modus benutzt oder das falsche JSON eingefügt.
* **Lösung**:
    * Wenn du **"Nur Glossar generieren"** wolltest -> Stelle sicher, dass du das Glossar-JSON kopiert hast.
    * Wenn du **übersetzen** wolltest -> Stelle sicher, dass du NICHT das Glossar-JSON kopiert hast (manchmal gibt die KI beides aus).


---

## 6. Profi-Tipps
* **Custom Instructions**: Du kannst im Übersetzungs-Fenster eigene Anweisungen geben (z. B. "Nutze das informelle 'Du' statt 'Sie'" oder "Schreibe im Piraten-Slang").
* **Konflikt-Lösung**: Wenn die KI einen Begriff anders übersetzt, als er im Glossar steht, fragt dich das Modul, ob du den alten Begriff behalten oder den neuen übernehmen möchtest.