# Rechtliche Seiten — immer mitliefern

Jede Kundenseite bekommt **Impressum** und **Datenschutzerklärung**. Kein Projekt gilt
als fertig, solange eine der beiden fehlt oder noch NoDelay-Daten enthält.

Die Vorlage liegt in `nodelay-webdesign/public/` und wird beim Kopieren automatisch
mitgenommen — sie muss danach vollständig auf den Kunden umgeschrieben werden.

> Diese Anleitung deckt die Standardfälle ab und ersetzt keine Rechtsberatung. Bei
> Onlineshops, Gesundheitsdaten oder internationalem Publikum im Abschlussbericht
> darauf hinweisen, dass eine Fachperson draufschauen sollte.

## Was ersetzt werden muss

In `public/impressum.html` und `public/datenschutz.html`:

| Stelle | Ersetzen durch |
|---|---|
| NoDelay Webdesign / Nic Delley | Firma und Inhaber des Kunden |
| Im Obstgarten 13, 8044 Gockhausen | Adresse des Kunden |
| nic.delley@icloud.com | E-Mail des Kunden |
| 077 506 91 12 | Telefon des Kunden |
| „Nicht im Handelsregister eingetragen" | Tatsächlicher Status des Kunden |
| Seitentitel `— NoDelay Webdesign` | `— <Firma des Kunden>` |

Ausserdem `public/legal.css` an die Farben des Projekts anpassen (die Tokens oben in
der Datei), damit die Rechtsseiten wie der Rest der Website aussehen.

## Impressum — Pflichtangaben (Art. 3 UWG)

- Firmenname und Rechtsform
- Vollständige Postadresse (ein Postfach allein genügt nicht)
- E-Mail-Adresse
- Bei Eintrag im Handelsregister: UID-Nummer `CHE-xxx.xxx.xxx`

Ist der Handelsregister-Status unbekannt, Platzhalter setzen:

```
[[ Handelsregister: UID-Nummer einsetzen, oder Zeile durch
   "Nicht im Handelsregister eingetragen" ersetzen ]]
```

Bei reglementierten Berufen (Arzt, Anwalt, Treuhand, Immobilien) zusätzlich Berufstitel,
Verleihungsland und zuständige Aufsichtsbehörde — als Platzhalter markieren und Nic im
Abschlussbericht darauf hinweisen.

## Datenschutzerklärung — was drinstehen muss

1. **Verantwortlicher** — Firma, Adresse, Kontakt des Kunden
2. **Welche Daten** — Server-Logs beim Besuch, Formularfelder bei Anfragen
3. **Wozu** — Beantwortung der Anfrage, Terminvereinbarung
4. **An wen weitergegeben** — jeder tatsächlich eingesetzte Dienst, namentlich:
   - Hosting (Netlify, USA)
   - Formulare (Netlify Forms oder formsubmit.co)
   - Kartendienst, falls eingebunden (Google Maps lädt Daten in die USA)
   - Buchungstool, falls eingebunden (Calendly, Fresha, Treatwell …)
   - Schriften: sind sie über Google Fonts eingebunden, wird beim Laden die
     IP-Adresse an Google übertragen — entweder erwähnen oder die Schriften lokal
     einbinden
5. **Wie lange** gespeichert wird
6. **Rechte** — Auskunft, Berichtigung, Löschung, mit Kontaktweg
7. **Datensicherheit** — HTTPS
8. **Cookies** — nur nennen, was tatsächlich gesetzt wird
9. **Stand** — Datum

**Kernregel:** Die Erklärung beschreibt, was die Seite *tatsächlich* tut. Wird ein
Dienst entfernt, muss der Absatz raus; kommt einer dazu, muss er rein. Keine
Textbausteine über Dienste stehen lassen, die gar nicht eingebunden sind.

## Tracking

Wird Google Analytics oder ein vergleichbares Werkzeug eingebaut:

- In der Datenschutzerklärung namentlich nennen, mit Zweck und Datenübermittlung
- Hinweis auf die Datenschutzerklärung des Anbieters
- Einen Cookie-Hinweis ergänzen, sobald nicht-notwendige Cookies gesetzt werden

Wird **kein** Tracking eingebaut (Standardfall), bleibt der Abschnitt draussen und
der Cookie-Absatz sagt schlicht, dass keine Analyse-Cookies gesetzt werden.

## Zusätzlich bei Onlineshops

Nur beim Shop-Paket relevant, dann aber zwingend:

- **AGB** mit Vertragsschluss, Zahlungsarten, Lieferfristen, Gewährleistung
- **Preise inklusive MWST**, Versandkosten separat ausgewiesen
- **Rückgabe/Umtausch** — in der Schweiz gibt es kein generelles gesetzliches
  Widerrufsrecht im Onlinehandel; was gilt, muss der Shop selbst festlegen und
  klar kommunizieren
- Im Abschlussbericht ausdrücklich empfehlen, die AGB rechtlich prüfen zu lassen

## Einbindung prüfen

- Footer verlinkt auf `/impressum.html` und `/datenschutz.html`
- Unter jedem Formular steht der Hinweis mit Link auf die Datenschutzerklärung
- Beide Seiten sind im Build (`dist/`) vorhanden und im Browser erreichbar
- Der Zurück-Link oben auf beiden Seiten führt auf die Startseite
