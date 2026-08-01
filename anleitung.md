# 📖 Anleitung: Phils PF2e AI Translator (v2.0.0)

Willkommen beim ultimativen Übersetzungs-Tool für Foundry VTT (Pathfinder 2e). Dieses Modul hilft dir, Journal-Einträge schnell, atmosphärisch und konsistent mithilfe kostenloser KI (Gemini, ChatGPT, Claude etc.) zu übersetzen.

## 1. Erste Schritte

1. **Installation**: Stelle sicher, dass das Modul in Foundry aktiviert ist.
2. **Einstellungen**:
    * Navigiere zu `Einstellungen` > `Modul-Einstellungen` > `Phils PF2e AI Translator`.
    * **AI Provider**: Wähle deinen bevorzugten KI-Anbieter (z. B. Google Gemini).
    * **Game System**: Wähle "Pathfinder 2e" (wichtig für den Regel-Kontext).
    * **Max Prompt-Länge**: Standard ist 100.000 Zeichen.

## 2. Das Translation Studio (Schritt-für-Schritt)

Das Modul führt dich in einem eleganten 4-Schritte-Studio durch den gesamten Übersetzungsprozess.

### Schritt 1: Setup & Seitenauswahl
1. Klicke im Foundry-Reiter **Journalnotizen** oben auf den rötlichen Button **`PF2e Übersetzer`**.
2. Ziehe ein Journal per Drag & Drop in das Fenster (oder wähle ein geöffnetes Journal aus).
3. Wähle deinen Modus:
   - **Übersetzung:** Übersetzt englische Texte ins deutsche Pathfinder 2e High-Fantasy-Deutsch.
   - **Grammatik-Check:** Prüft deutsche Texte auf Stil, Rechtschreibung und Logik.
   - **Nur Glossar:** Erstellt ein Wörterbuch für wichtige Begriffe.
4. Markiere die Seiten, die du übersetzen möchtest.
5. Klicke unten auf **"Weiter zu Prompt & KI"**.

### Schritt 2: Prompt & KI öffnen
1. Klicke auf **"Prompt kopieren & KI öffnen"**.
2. Der speziell formatierte Prompt wird automatisch in deine Zwischenablage kopiert und dein KI-Anbieter öffnet sich in einem neuen Browser-Tab.
3. Klicke bei der KI in das Eingabefeld, drücke `STRG + V` und sende die Nachricht ab.
4. Kopiere die gesamte Antwort der KI.

### Schritt 3: Einfügen & Analysieren
1. Kehre zu Foundry VTT zurück. Das Studio wartet bereits im Schritt 3 **Einfügen**.
2. Füge die gesamte KI-Antwort per `STRG + V` in das Textfeld ein.
3. Klicke auf **"Analysieren & Prüfen"**. Das Modul verarbeitet Übersetzung und Glossar automatisch in einem Schritt.

### Schritt 4: Vorschau & Journal aktualisieren
1. Das Modul zeigt dir eine transparente Vorschau aller Änderungen.
2. Falls die KI geschützte Begriffe aus deinem Glossar ändern wollte, siehst du den **vollständigen originalen Ausganssatz** direkt über dem KI-Satz mit farblicher Hervorhebung.
3. Stelle geschützte Begriffe nach Wunsch per Mausklick wieder her.
4. Klicke auf **"Journal aktualisieren & Übernehmen"**. Dein Journal wird sofort gespeichert!

---

---

## 3. Die Fenster im Detail

### 📋 Das Resultat-Fenster ("Result")
Hier landest du immer, nachdem du die Antwort der KI kopiert hast.
*   **Eingabefeld**: Hier fügst du die Antwort (STRG+V) ein.
*   **Button "Journal aktualisieren"**: Wendet die Änderungen an.
*   **Button "Überspringen"**: Falls die KI Unsinn geredet hat und du diese Seite auslassen willst.

### 📚 Das Glossar-Fenster ("Update Glossary")
Dieses Fenster erscheint automatisch, wenn die KI neue Begriffe gefunden hat, die noch nicht in deinem Glossar stehen.
*   **Liste**: Zeigt dir die neuen Begriffe (z.B. `Fireball = Feuerball`).
*   **"Zum Glossar hinzufügen"**: Speichert die Begriffe dauerhaft. Ab jetzt weiß die KI bei *jeder* zukünftigen Übersetzung, wie diese Begriffe heißen.

### ⚖️ Das Konflikt-Fenster ("Glossar Konflikte")
*Erscheint vor allem beim Grammatik-Check.*
Dieses Fenster ist deine Sicherheits-Zentrale. Es geht auf, wenn die KI versucht, einen Begriff zu ändern, der eigentlich durch dein Glossar geschützt ist.
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