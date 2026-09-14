---
name: kundenwebsite
description: Baut aus einem kurzen Brief eine komplette, deployfertige Kundenwebsite - Design passend zur Branche, echte deutsche Inhalte, Impressum und Datenschutzerklärung immer inklusive. Nutzen, wenn eine neue Website für einen Kunden erstellt werden soll (z. B. "/kundenwebsite Coiffeur Meier, Zürich, elegant" oder "Bau eine Website für ein Café in Winterthur").
---

# Kundenwebsite bauen

Erstellt ein vollständiges, lokal lauffähiges Website-Projekt für einen Kunden von
NoDelay Webdesign (Nic Delley). Ziel: Am Ende muss Nic nur noch Kleinigkeiten anpassen —
Design, Inhalte und alle rechtlichen Seiten sind fertig.

## Grundregeln

- **Sprache: Deutsch (Schweiz).** Niemals „ß" — immer „ss" (Strasse, grösste, schliessen).
  Preise in CHF mit Hochkomma-Tausendertrennung: `CHF 1'500`.
- **Design muss branchenspezifisch sein.** Nicht die NoDelay-Farben recyceln. Die
  Palette und Schriftpaarung kommt aus `references/design-system.md`.
- **Rechtliches ist nie optional.** Impressum und Datenschutzerklärung werden immer
  mitgeneriert (`references/rechtliches.md`). Kein Projekt gilt als fertig ohne sie.
- **Keine erfundenen Fakten.** Adresse, Telefonnummer, UID, Öffnungszeiten, Preise und
  echte Kundenstimmen niemals erfinden. Was nicht im Brief steht, wird als sichtbarer
  Platzhalter markiert (siehe „Platzhalter" unten).

## Ablauf

### 1. Brief auswerten

Aus der Eingabe herauslesen: **Firmenname**, **Branche**, **Ort**, gewünschte **Optik**,
**Paket** (Landingpage / Website / Shop) und alle genannten Fakten (E-Mail, Telefon,
Adresse, Öffnungszeiten, Leistungen, Preise).

Fehlt der Firmenname oder die Branche, einmal kurz nachfragen. Alles andere **nicht**
erfragen — dafür gibt es Platzhalter. Nic soll den Befehl in einem Satz absetzen können.

### 2. Projekt anlegen

Slug aus dem Firmennamen bilden (klein, Bindestriche, ohne Umlaute: „Zopf & Co" →
`zopf-und-co`). Dann die Vorlage kopieren:

```bash
mkdir -p kunden
cp -r nodelay-webdesign kunden/<slug>
cd kunden/<slug>
rm -rf node_modules dist .git
```

`kunden/` ist in `.gitignore` — Kundenprojekte gehören später in ihr **eigenes**
GitHub-Repo, nicht in dieses Vorlagen-Repo.

In `package.json` den `name` auf den Slug setzen.

### 3. Design setzen

Passende Branchen-Richtung aus `references/design-system.md` wählen und in
`src/index.css` die Farb-Tokens und in `index.html` die Google-Fonts-Links ersetzen.
Auch `--f-head` / `--f-body` anpassen.

Wünscht der Kunde explizit andere Farben (z. B. „warmes Braun"), gehen seine Wünsche
vor — dann die Branchen-Palette in diese Richtung verschieben, statt sie zu ignorieren.

Das Logo in `src/components/Logo.jsx` durch eine schlichte Wortmarke ersetzen
(Firmenname in der Display-Schrift, optional ein einfaches geometrisches Zeichen).
Niemals das NoDelay-Chevron-Logo beim Kunden stehen lassen.

### 4. Inhalte schreiben

`src/lib/data.js` ist die einzige Inhaltsquelle. Alles ersetzen: `SERVICES`, `PLANS`,
`PORTFOLIO`, `CONTACT`, `NAV_LINKS`.

Branchengerechte Abschnitte und Textbausteine stehen in `references/inhalte.md`.
Texte müssen konkret und verkaufsstark sein — keine Platzhalterfloskeln wie „Lorem
ipsum" oder „Hier steht Ihr Text".

Abschnitte, die für die Branche keinen Sinn ergeben, ersatzlos entfernen (ein Coiffeur
braucht keine Preistabelle mit drei Paketen, sondern eine Preisliste; ein Café braucht
keine Referenzprojekte, sondern Öffnungszeiten und Anfahrt).

Den 3D-Würfel und das Three.js-Partikelfeld nur behalten, wenn es zur Branche passt
(Tech, Agentur, Fitness) — bei Café, Praxis oder Coiffeur ersatzlos entfernen
(`src/hooks/`, `CubeSection.jsx`, `useHeroScene` aus `Hero.jsx`) und stattdessen ein
ruhiges Bild- oder Farbflächen-Hero verwenden. Dann auch `three` aus `package.json`
entfernen.

### 5. Rechtliches einbauen

Nach `references/rechtliches.md` vorgehen: `public/impressum.html` und
`public/datenschutz.html` mit den Kundendaten füllen, Footer-Links und den
Datenschutz-Hinweis unter den Formularen prüfen.

Das Kontaktformular auf die **E-Mail des Kunden** umstellen (in `CONTACT.email`) —
niemals Nics private Adresse in einem Kundenprojekt stehen lassen.

### 6. Platzhalter

Alles, was der Brief nicht hergibt, wird sichtbar markiert — nicht erfunden:

```
[[ Adresse des Kunden einsetzen ]]
[[ Öffnungszeiten bestätigen ]]
```

Diese Marker sind absichtlich hässlich, damit sie niemandem entgehen. Am Ende alle
auflisten (siehe Schritt 8).

Damit sie auch auf der Seite selbst auffallen, eine kleine Komponente
`src/components/Text.jsx` anlegen, die `[[ ... ]]` gelb hinterlegt rendert, und alle
Datenfelder damit ausgeben:

```jsx
export default function Text({ children }) {
  const teile = String(children ?? "").split(/(\[\[.*?\]\])/g);
  return <>{teile.map((t, i) => t.startsWith("[[")
    ? <span className="ph" key={i}>{t.replace(/^\[\[\s*|\s*\]\]$/g, "")}</span>
    : t)}</>;
}
```

Dazu in `src/index.css`:

```css
.ph { background:#FFF3D6; color:#7A5A12; border-bottom:1.5px dashed #D9A441; padding:0 4px; }
```

### 7. Prüfen

```bash
npm install
npm run build
```

Danach den Dev- oder Preview-Server starten und mit Playwright je einen Screenshot in
Desktop- (1440px) und Handybreite (390px) machen und **anschauen**. Geprüft wird:

- Lädt die Seite ohne Konsolenfehler?
- Stimmen Schriften und Farben (keine NoDelay-Reste)?
- Bricht auf 390px nichts um oder scrollt seitwärts?
- Sind Impressum und Datenschutz verlinkt und erreichbar?

Fehler beheben und erst dann abschliessen.

### 8. Abschlussbericht

Kurz und konkret ausgeben:

1. Wo das Projekt liegt (`kunden/<slug>`)
2. Welche Design-Richtung gewählt wurde (Palette + Schriften, in einem Satz)
3. **Liste aller `[[ ... ]]`-Platzhalter**, die Nic noch füllen muss
4. Die nächsten Schritte: `npm run dev` zum Ansehen, danach eigenes GitHub-Repo
   anlegen und mit Netlify verbinden (Build `npm run build`, Publish `dist`)

## Checkliste vor „fertig"

- [ ] Kein „ß" im gesamten Projekt
- [ ] Keine NoDelay-Farben, -Schriften, -Logo oder -Kontaktdaten mehr enthalten
- [ ] `src/lib/data.js` komplett auf den Kunden umgeschrieben
- [ ] `public/impressum.html` und `public/datenschutz.html` gefüllt und verlinkt
- [ ] Formular zeigt auf die E-Mail des Kunden
- [ ] `npm run build` läuft fehlerfrei durch
- [ ] Screenshots auf Desktop und Handy angeschaut, keine Fehler
- [ ] Alle offenen Platzhalter im Bericht aufgelistet
