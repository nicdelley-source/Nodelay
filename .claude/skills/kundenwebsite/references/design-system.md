# Design-Richtungen nach Branche

Jede Richtung ist eine vollständige Palette plus Schriftpaarung. Nicht mischen — eine
Richtung wählen und konsequent durchziehen. Wünscht der Kunde eine bestimmte Farbe,
die Richtung dorthin verschieben (Akzent ersetzen, Neutrale leicht anpassen), statt
beliebig zu kombinieren.

Alle Schriften sind auf Google Fonts verfügbar. Immer eine echte Fallback-Kette setzen,
z. B. `'Fraunces', Georgia, serif`.

---

## 1 · Gastronomie — Café, Restaurant, Bäckerei, Take-away

**Stimmung:** warm, handgemacht, appetitlich. Grosse Bilder, kurze Texte.

```css
--bg:        #FBF7F0;   /* warmes Papier */
--surface:   #FFFFFF;
--ink:       #2B2119;   /* dunkles Röstbraun */
--ink-soft:  #6F6154;
--accent:    #B5491F;   /* gebranntes Orange */
--dark:      #241710;   /* Footer, Hero-Grund */
--line:      rgba(43, 33, 25, 0.12);
```

**Schriften:** Display `Fraunces` (600) · Text `Karla` (400/500)

**Layout:** Hero mit grossflächigem Foto und wenig Text darüber. Öffnungszeiten weit
oben, nicht im Footer vergraben. Speise-/Getränkekarte als eigener Abschnitt mit
Preisen. Karte/Anfahrt am Schluss.

---

## 2 · Beauty — Coiffeur, Kosmetik, Nagelstudio, Spa

**Stimmung:** ruhig, hochwertig, viel Weissraum. Weniger ist mehr.

```css
--bg:        #F7F5F3;
--surface:   #FFFFFF;
--ink:       #1C1A19;
--ink-soft:  #6B6663;
--accent:    #A98C6B;   /* warmes Messing */
--dark:      #141211;
--line:      rgba(28, 26, 25, 0.10);
```

**Schriften:** Display `Cormorant Garamond` (500/600, gross und luftig gesetzt) ·
Text `Jost` (400)

**Layout:** Sehr grosszügige Abstände, grosse ruhige Bilder, dünne Trennlinien statt
Karten mit Schatten. Terminbuchung als klarer, wiederkehrender Aufruf. Preisliste als
schlichte Zeilen mit Punktführung, nicht als Preiskarten.

---

## 3 · Handwerk — Bau, Maler, Sanitär, Elektro, Schreiner

**Stimmung:** solide, zupackend, vertrauenswürdig. Kräftige Flächen, klare Kanten.

```css
--bg:        #F4F5F6;
--surface:   #FFFFFF;
--ink:       #1A2024;
--ink-soft:  #5B666D;
--accent:    #E4610F;   /* Signalorange */
--dark:      #16202A;   /* Stahlblau */
--line:      rgba(26, 32, 36, 0.14);
```

**Schriften:** Display `Archivo` (700) · Text `IBM Plex Sans` (400/500)

**Layout:** Telefonnummer permanent sichtbar (Kopfzeile), am Handy als Anruf-Button.
Referenzprojekte als Bildraster mit kurzer Beschreibung. Leistungen als klare Liste,
kein verspielter Schmuck. Notfall-/24h-Hinweis, falls zutreffend.

---

## 4 · Gesundheit — Arztpraxis, Physio, Zahnarzt, Therapie

**Stimmung:** ruhig, sauber, vertrauensbildend. Nichts Lautes.

```css
--bg:        #F6F9F9;
--surface:   #FFFFFF;
--ink:       #16292E;
--ink-soft:  #5A7178;
--accent:    #2E8C8C;   /* ruhiges Petrol */
--dark:      #123038;
--line:      rgba(22, 41, 46, 0.11);
```

**Schriften:** Display `Outfit` (600) · Text `Source Sans 3` (400)

**Layout:** Sprechzeiten und Notfallnummer ganz oben. Team-Abschnitt mit Foto und
Qualifikation schafft Vertrauen. Anfahrt inkl. ÖV und Parkplätzen. Ruhige Flächen,
keine Animationen ausser sanftem Einblenden.

---

## 5 · Fitness — Studio, Personal Training, Kampfsport, Yoga

**Stimmung:** energisch, kontrastreich. Dunkles Design mit einem lauten Akzent.

```css
--bg:        #0E0F12;   /* dunkel als Grundton */
--surface:   #16181D;
--ink:       #F2F4F7;
--ink-soft:  #9AA3AE;
--accent:    #C6F24E;   /* Limette */
--dark:      #0A0B0D;
--line:      rgba(242, 244, 247, 0.12);
```

**Schriften:** Display `Bebas Neue` (sehr gross gesetzt) · Text `Barlow` (400/500)

**Layout:** Riesige Typografie im Hero, Kursplan als Tabelle, Probetraining als
durchgehender Aufruf. Bewegung ist hier erlaubt (Bild-Hover, sanfter Parallax).
Achtung: Kontrast prüfen — Limette auf Dunkel ja, Limette auf Weiss nie.

---

## 6 · Handel — Boutique, Concept Store, Laden mit Onlineverkauf

**Stimmung:** redaktionell, produktorientiert, klar.

```css
--bg:        #FFFFFF;
--surface:   #FAFAF8;
--ink:       #171717;
--ink-soft:  #6A6A68;
--accent:    #1F4BD8;   /* klares Blau */
--dark:      #111111;
--line:      rgba(23, 23, 23, 0.12);
```

**Schriften:** Display `Instrument Serif` (400, gross) · Text `Work Sans` (400/500)

**Layout:** Produktraster mit grossen Bildern und sichtbaren Preisen. Wenig Chrom,
das Produkt trägt die Seite. Versand- und Rückgabebedingungen leicht auffindbar
(rechtlich relevant, siehe `rechtliches.md`).

---

## 7 · Dienstleistung — Beratung, Treuhand, Anwalt, Immobilien, Versicherung

**Stimmung:** seriös, kompetent, zurückhaltend.

```css
--bg:        #FAF9F7;
--surface:   #FFFFFF;
--ink:       #1B2430;
--ink-soft:  #5F6B78;
--accent:    #1B4D8F;   /* Marineblau */
--dark:      #101A26;
--line:      rgba(27, 36, 48, 0.12);
```

**Schriften:** Display `Spectral` (600) · Text `Public Sans` (400/500)

**Layout:** Leistungen als klar gegliederte Liste, Qualifikationen und Mitgliedschaften
sichtbar. Kontaktaufnahme niederschwellig (Rückruf, Ersttermin). Keine Spielereien.

---

## Wenn keine Richtung passt

Eigene Palette bauen, aber nach denselben Regeln:

- **Sechs Werte genügen:** Hintergrund, Fläche, Text, Text-gedämpft, Akzent, Dunkelton.
- **Der Akzent wird sparsam eingesetzt** — Knöpfe, Links, ein Detail. Nicht flächig.
- **Neutrale leicht in Richtung des Akzents kippen** (ein Grau mit minimalem Farbstich
  wirkt gewählt, reines #808080 wirkt vergessen).
- **Kontrast prüfen:** Fliesstext gegen Hintergrund mindestens 4.5:1.
- **Zwei Schriften reichen:** eine mit Charakter für Überschriften, eine ruhige für
  Fliesstext. Nicht zwei Grotesken mischen, die sich ähneln.

## Was immer gilt

- Fliesstext um die 65 Zeichen pro Zeile.
- Ab 390px Breite muss alles lesbar sein, ohne seitwärts zu scrollen.
- Überschriften `text-wrap: balance`.
- Fokus-Zustände für Tastaturbedienung sichtbar lassen.
- `prefers-reduced-motion` respektieren, wenn Animationen eingebaut werden.
