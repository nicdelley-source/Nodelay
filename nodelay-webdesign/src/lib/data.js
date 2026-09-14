export const NAV_LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#preise", label: "Preise" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export const SERVICES = [
  {
    icon: "🎨",
    title: "Landingpages",
    body: "Hochkonvertiert und perfekt für Google Ads oder Social Media.",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    body: "Vollständige Online-Shops mit Zahlungsabwicklung und Versand-Integration.",
  },
  {
    icon: "📅",
    title: "Terminbuchung",
    body: "Für Friseur, Arzt, Coach — automatische Terminverwaltung direkt auf deiner Website.",
  },
];

// Shared between the pricing section and the project-request modal, so the
// three numbers only ever live in one place.
export const PLANS = [
  {
    id: "landingpage",
    tag: "Einstieg",
    name: "Landingpage",
    price: "CHF 700",
    suffix: "+MWST",
    modalDesc: "Hochkonvertierte Single-Page für Kampagnen und Ads",
    icon: "🎨",
    features: ["Einzelnes Projekt", "Modernes Design", "Mobile-optimiert", "Google Analytics"],
  },
  {
    id: "website",
    tag: "Beliebt",
    name: "Website",
    price: "CHF 1'500",
    suffix: "+MWST",
    modalDesc: "Komplette Website mit mehreren Unterseiten",
    icon: "🌐",
    featured: true,
    features: ["Komplette Website", "Bis 6 Unterseiten", "Kontaktformular", "SEO-optimiert"],
  },
  {
    id: "shop",
    tag: "Premium",
    name: "Online-Shop",
    price: "CHF 4'000",
    suffix: "+MWST",
    modalDesc: "Kompletter Shop mit Zahlungen und Versand",
    icon: "🛒",
    features: ["Kompletter Shop", "Zahlungsabwicklung", "Produktverwaltung", "Versandintegration"],
  },
];

export const PORTFOLIO = [
  {
    id: "jnside",
    title: "Jnside Zürich",
    desc: "One-Page-Website für Friseursalon am Neumühlequai",
    tags: ["One-Pager", "Live"],
    href: "https://jnside-zuerich.netlify.app/",
  },
  {
    id: "cafe",
    title: "Café Websites",
    desc: "Template-Lösung für Schweizer Cafés — schnell und günstig",
    tags: ["Template"],
    icon: "☕",
  },
];

export const CUBE_FACES = [
  { icon: "💰", label: "Preise", sub: "Klicken →", colorStart: "#1F9E75", colorEnd: "#0B4536", target: "preise" },
  { icon: "✉️", label: "Kontakt", sub: "Klicken →", colorStart: "#00D9FF", colorEnd: "#0B4536", target: "kontakt" },
  { icon: "🎨", label: "Leistungen", sub: "Klicken →", colorStart: "#D946EF", colorEnd: "#0B4536", target: "leistungen" },
  { icon: "🖼️", label: "Referenzen", sub: "Klicken →", colorStart: "#FF8C00", colorEnd: "#0B4536", target: "referenzen" },
  { isLogo: true, colorStart: "#5FF0C0", colorEnd: "#0B4536", target: "kontakt" },
  { icon: "🚀", label: "Starten", sub: "Klicken →", colorStart: "#06B6D4", colorEnd: "#0B4536", target: "kontakt" },
];

export const CONTACT = {
  email: "nic.delley@icloud.com",
  phone: "077 506 91 12",
  phoneHref: "+41775069112",
  instagram: "@nodelay.webdesign",
  instagramHref: "https://instagram.com/nodelay.webdesign",
};

export const INDUSTRIES = [
  { value: "", label: "— Wähle deine Branche —" },
  { value: "gastronomie", label: "☕ Gastronomie" },
  { value: "beauty", label: "💅 Beauty & Wellness" },
  { value: "handwerk", label: "🔧 Handwerk" },
  { value: "einzelhandel", label: "🛍️ Einzelhandel" },
  { value: "dienstleistung", label: "💼 Dienstleistung" },
  { value: "bildung", label: "📚 Bildung" },
  { value: "andere", label: "📌 Andere" },
];

export const TIMELINES = [
  { value: "", label: "— Wann brauchst du es? —" },
  { value: "sofort", label: "⚡ So bald wie möglich" },
  { value: "1monat", label: "📅 Innerhalb 1 Monat" },
  { value: "2monate", label: "📅 Innerhalb 2 Monate" },
  { value: "flexibel", label: "🔄 Flexibel" },
];
