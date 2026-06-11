/* ===================== DATA ===================== */
const CASES = [
  {
    slug: "medfleet", title: "MedFleet", url: "github.io/medfleet-dashboard",
    live: "https://leumasdam.github.io/medfleet-dashboard/",
    appUrl: "https://leumasdam.github.io/medfleet-dashboard/",
    cover: "assets/medfleet/cover.png",
    images: [
      "assets/medfleet/devices.png", "assets/medfleet/detail.png",
      "assets/medfleet/alerts.png", "assets/medfleet/maintenance.png",
      "assets/medfleet/reports.png", "assets/medfleet/cover.png",
    ],
    accent: "#E0F7F4", shot: "a", type: "browser",
    desc: "Dashboard na monitorovanie zobrazovacích zariadení (CT, MRI, RTG, ultrazvuk) v sieti nemocníc — stav fleetu, vyťaženie, alerty a plánovanie servisov. Dizajn systém inšpirovaný Siemens Healthineers: petrolejová, čistá, medical-grade.",
    obdobie: "2026", rola: "UI / UX dizajn · frontend",
    tags: ["UI/UX", "dashboard", "healthcare", "design system", "React"],
    features: [
      "Prehľad — KPI fleetu, vyťaženie, vyšetrenia podľa modality, aktívne alerty",
      "Zariadenia — vyhľadávanie, filtre, triedenie + detail s históriou a servisom",
      "Alerty — kvitovanie mení KPI aj odznaky naprieč celou aplikáciou",
      "Údržba — 14-dňová os, plánovanie servisu cez formulár, posun stavov",
      "Reporty — obdobia, uptime podľa zariadenia, vyšetrenia podľa pracoviska",
      "Globálny výber pracoviska filtruje dáta na všetkých stránkach",
    ],
    tech: ["React 19", "TypeScript", "Vite", "Zustand", "React Router", "Tailwind v4", "Recharts"],
    design: {
      philosophy: "Medical-grade pokoj — petrolejová drží smer, oranžová znamená „pozri sa sem“.",
      palette: [
        { hex: "#009999", name: "petrol" }, { hex: "#0F3A3F", name: "ink" },
        { hex: "#EC6602", name: "alert orange" }, { hex: "#F3F7F7", name: "canvas" },
        { hex: "#0E8A66", name: "success" }, { hex: "#C93C34", name: "danger" },
      ],
      fonts: ["Hanken Grotesk — celá appka", "Tabulárne číslice v KPI a tabuľkách"],
      note: "Tmavý petrolejový sidebar, biele karty s mäkkými tieňmi, zaoblené tvary, oranžová len pre stavy vyžadujúce pozornosť.",
    },
    zadanie: "Prevádzkový tím nemocničnej siete potrebuje na jednom mieste vidieť stav drahej zobrazovacej techniky: čo beží, čo je vyťažené, čo hlási chybu a kedy má servis. Portfóliová ukážka inšpirovaná kategóriou fleet-management nástrojov v zdravotníctve.",
    riesenie: "Sedem prepojených obrazoviek so zdieľaným stavom — akcia na jednom mieste (kvitovanie alertu, dokončenie servisu) sa okamžite prejaví v KPI, odznakoch a grafoch všade inde. Vizuál stojí na vlastnom dizajn systéme inšpirovanom Siemens Healthineers: petrolejová paleta, Hanken Grotesk, tmavý sidebar a disciplinovaná oranžová len pre alerty.",
    vysledok: "Plne interaktívne demo na ukážkových dátach. Vzniklo ako podpora prihlášky na pozíciu UI dizajnéra v healthcare segmente.",
    metrics: [
      { v: "7", l: "obrazoviek aplikácie" },
      { v: "5", l: "modalít vo fleete (CT–mamograf)" },
      { v: "Live", l: "interaktívne demo" },
    ],
  },
  {
    slug: "bratislava-3d", title: "Bratislava 3D — Atlas kvality života", url: "github.io/bratislava-3d",
    live: "https://leumasdam.github.io/bratislava-3d/",
    appUrl: "https://leumasdam.github.io/bratislava-3d/",
    cover: "assets/bratislava/cover.png", dark: true,
    accent: "#101218", shot: "b", type: "browser",
    desc: "Interaktívna 3D analýza „15-minútového mesta“ z otvorených dát: koľko zo 7 denných potrieb (škola, lekár, obchod, park…) máš pešo do 15 minút. Hexagónová mriežka nad celým mestom + 3D detail 10-tisíc budov v jadre.",
    obdobie: "2026", rola: "Dátová vizualizácia · analýza · realizácia",
    tags: ["dátová vizualizácia", "GIS", "OSM", "3D", "urbanizmus"],
    features: [
      "Hexagónová mriežka dostupnosti nad obytným územím — klik kdekoľvek = živý výpočet",
      "Index kvality miesta — 6 urbanistických rozmerov s posuvníkmi váh, prepočet naživo",
      "Plánovacie pieskovisko — postav školu či zastávku a uvidíš dopad na obyvateľov",
      "Porovnanie 5 stredoeurópskych miest (Viedeň, Praha, Budapešť, BA, Brno)",
      "AI asistent „Spýtaj sa mesta“ — otázka v slovenčine → odpoveď + zvýraznenie mapy",
      "Živá vrstva kvality ovzdušia z verejných PM2,5 senzorov",
    ],
    tech: ["MapLibre GL JS", "OpenStreetMap / Overpass", "Python", "WorldPop", "GTFS", "Claude API", "GitHub Actions"],
    design: {
      philosophy: "Dáta majú tvrdiť niečo overiteľné — nie len pekne vyzerať.",
      palette: [
        { hex: "#37e0b0", name: "accent" }, { hex: "#1a1a2e", name: "ink" },
        { hex: "#f4f3f6", name: "paper" }, { hex: "#6c5ce7", name: "indigo" },
      ],
      fonts: ["Systémový grotesk — UI", "Tabulárne číslice v paneloch"],
      note: "Colorblind-safe farebná škála (magma/viridis), declutter podľa zoomu, ploché hexy s okrajmi pre čitateľnosť.",
    },
    zadanie: "Pekný 3D model mesta nestačí — chýbala mu téza. Tak sa projekt posunul na nástroj: je Bratislava 15-minútové mesto? Kde sa žije dobre a kde si bez auta nevybavíš ani základné veci?",
    riesenie: "Z otvorených dát (OSM, WorldPop populácia, GTFS spoje MHD) vznikla celomestská analýza dostupnosti, kompozitný index kvality miesta a plánovací režim, ktorý vie navrhnúť najlepšie miesto pre novú škôlku či zastávku. Všetko beží v prehliadači, bez API kľúčov.",
    vysledok: "Jadro mesta JE 15-minútové, ale celomestsky má všetkých 7 potrieb pešo len 58 % obytných oblastí a 24 % je autozávislých. V benchmarku 5 miest je BA štvrtá. Nasadené na GitHub Pages s týždenným auto-refreshom dát.",
    metrics: [
      { v: "58 %", l: "obytných oblastí má 6+ zo 7 potrieb" },
      { v: "10 046", l: "budov v 3D detaile" },
      { v: "5", l: "miest v benchmarku" },
    ],
  },
  {
    slug: "konfigurator", title: "Konfigurátor obrúčok", url: "goldstein.sk/konfigurator",
    live: "https://goldstein.sk/konfigurator",
    appUrl: "https://goldstein.sk/konfigurator",
    cover: "assets/konfigurator/cover.png",
    accent: "#D8F2E9", shot: "c", type: "browser",
    desc: "Vlastný 3D konfigurátor svadobných obrúčok pre goldstein.sk — kov, profil, povrch, kamene aj gravír v reálnom čase, s otáčateľným 3D náhľadom a živou orientačnou cenou. Postavené namiesto kupovaného SaaS riešenia.",
    obdobie: "2026", rola: "UX · UI · 3D realizácia",
    tags: ["3D", "konfigurátor", "three.js", "e-commerce", "UX"],
    features: [
      "Real-time 3D náhľad (three.js) — otáčanie myšou, kovy s reálnymi odleskami",
      "12 kovov, 6 profilov, 7 povrchov, vzory, inlay (karbón, drevo, keramika)",
      "Kamene s reálnym lomom svetla — 9 brúsov, 12 farieb, 10 typov osadenia",
      "Pár jeho & jej — dve obrúčky v jednej konfigurácii",
      "Šesťkrokový sprievodca: Kov → Tvar → Povrch → Kamene → Detaily → Zhrnutie",
      "Živá orientačná cena + nezáväzný dopyt (uloženie do DB, e-mail predajni)",
    ],
    tech: ["Next.js 15", "three.js / R3F", "TypeScript", "Supabase", "Resend"],
    design: {
      philosophy: "Šperk si chceš obzrieť — náhľad je hviezda, UI sa drží vzadu.",
      palette: [
        { hex: "#D8F2E9", name: "accent" }, { hex: "#fff9f5", name: "surface" },
        { hex: "#111420", name: "ink" }, { hex: "#c79a5b", name: "gold" },
      ],
      fonts: ["Cormorant Garamond — nadpisy", "Plus Jakarta Sans — UI"],
      note: "Dizajn nadväzuje na editoriálny jazyk goldstein.sk; 3D scéna so štúdiovým HDRI osvetlením.",
    },
    zadanie: "Konkurencia používa kúpený SaaS konfigurátor s neprehľadným UX a mesačnými poplatkami. Goldstein chcel vlastný — prehľadnejší, vizuálne vo svojom jazyku a bez závislosti na treťom dodávateľovi.",
    riesenie: "Parametrická 3D geometria obrúčky generovaná priamo z konfigurácie (profil, drážky, fazety, kamene) namiesto statických fotiek — milióny kombinácií bez jediného fotenia. Architektúra pripravená aj na reálne 3D modely z dielne (GLB).",
    vysledok: "Nasadené na goldstein.sk/konfigurator aj vo svadobnej sekcii. Dopyty padajú do databázy a predajni chodí e-mail. Cenové sadzby za gram sú zatiaľ orientačné — finálne dopĺňa zlatník.",
    metrics: [
      { v: "milióny", l: "možných kombinácií" },
      { v: "12", l: "kovov vrátane platiny a paládia" },
      { v: "3D", l: "real-time náhľad, žiadne fotky" },
    ],
  },
  {
    slug: "dami", title: "Dami SEO dashboard", url: "github.io/dami-seo",
    live: "https://leumasdam.github.io/dami-seo/dashboard.html",
    appUrl: "https://leumasdam.github.io/dami-seo/dashboard.html",
    cover: "assets/dami/cover.png",
    accent: "#F5EFE0", shot: "d", type: "browser",
    desc: "Automatizovaný týždenný SEO dashboard pre e-shop s pracovnými odevmi — Search Console, GA4 a PageSpeed dáta sa každý pondelok samé stiahnu, vyhodnotia a publikujú. Nula ručnej práce, prevádzka prakticky zadarmo.",
    obdobie: "2026", rola: "Návrh · dátová pipeline · UI",
    tags: ["SEO", "dashboard", "automatizácia", "Python", "dáta"],
    features: [
      "Quick wins — kľúčové slová na pozíciách 4–15, kde sa dá rýchlo vyrásť",
      "CTR optimalizácia — stránky v top 3, ktoré klikajú pod benchmark",
      "Falling pages — stránky s poklesom klikov týždeň/týždňu",
      "Rising queries — nové dopyty, na ktoré sa oplatí napísať obsah",
      "Core Web Vitals + site audit na jednom mieste",
      "Beží samo: GitHub Actions cron každý pondelok ráno",
    ],
    tech: ["Python", "Search Console API", "GA4 API", "PageSpeed Insights", "GitHub Actions", "GitHub Pages"],
    zadanie: "Malý e-shop nemá rozpočet na SEO agentúru ani drahé nástroje — ale potrebuje vedieť, čo na webe zlepšiť a či to funguje. Reporty sa ručne robiť nebudú, musia vznikať samé.",
    riesenie: "Python pipeline stiahne dáta z Google API, rule-based analýza ich roztriedi do 7 akčných modulov (nie tabuľka čísel, ale „toto sprav“) a výsledný HTML dashboard sa automaticky publikuje. Celé to beží na free tieri GitHubu.",
    vysledok: "Hotová kostra s dashboardom beží na mock dátach kalibrovaných pre SK workwear segment — po pridaní klientových prístupov (service account) sa prepne na ostré dáta bez zmeny kódu.",
    metrics: [
      { v: "7", l: "akčných modulov analýzy" },
      { v: "1×", l: "týždenne, plne automaticky" },
      { v: "~0 €", l: "mesačná prevádzka" },
    ],
  },
  {
    slug: "goldstein-eshop", title: "Goldstein E-shop", url: "goldstein.sk",
    live: "https://goldstein.sk", accent: "#feece4",
    gshero: true,
    cover: "assets/goldstein/screens/homepage.jpg",
    images: [
      "assets/goldstein/hero-dark.jpg", "assets/goldstein/GS-1003-1.jpg",
      "assets/goldstein/GS-1002-1.jpg", "assets/goldstein/craft-bench.jpg",
      "assets/goldstein/store-front.jpg", "assets/goldstein/aupark.jpg",
    ],
    desc: "Editoriálny e-shop pre rodinné klenotníctvo Goldstein (Piešťany, od 1998). Navrhol som vizuálny jazyk „quiet editorial craft“ a postavil ho ako rýchly Next.js web.",
    obdobie: "2024 – 2026", rola: "Branding · webdizajn · realizácia",
    tags: ["branding", "UI/UX", "e-commerce", "Next.js", "SEO"],
    features: [
      "Editoriálna homepage s video hero",
      "Produktové stránky (PDP) + wishlist",
      "Blog s markdown článkami a SEO pipeline",
      "Kategórie, predajne, svadobná sekcia",
      "Goldstein Club — vernostný program",
      "Stripe checkout",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind v4", "Supabase", "Stripe", "Framer Motion", "Vercel"],
    design: {
      philosophy: "„Quiet editorial craft“ — luxus komunikuje tichom, nie krikom.",
      palette: [
        { hex: "#feece4", name: "bg" }, { hex: "#fff9f5", name: "surface" },
        { hex: "#111420", name: "ink" }, { hex: "#c79a5b", name: "gold" },
        { hex: "#4a7c59", name: "success" }, { hex: "#9b3a3a", name: "error" },
      ],
      fonts: ["Cormorant Garamond — nadpisy", "Plus Jakarta Sans — UI"],
      note: "Ostré 0px rohy, teplé krémové pozadie, pomalé scroll animácie (0.9 s).",
    },
    zadanie: "Klenotníctvo s 28-ročnou tradíciou potrebovalo online prítomnosť, ktorá nepôsobí ako lacný katalóg, ale ako módny magazín — a zároveň reálne predáva.",
    riesenie: "Vizuálny systém postavený na serifovom Cormorant Garamond, teplom krémovom pozadí a ostrých hranách. Web beží na Next.js 15 so Supabase a Stripe, s vlastnou SEO content pipeline pre blog.",
    vysledok: "Funkčný nasadený e-shop s editoriálnym vzhľadom, blogom a vernostným programom. Ďalšia fáza: pokračujúci redizajn a content SEO.",
    metrics: [
      { v: "1998", l: "tradícia značky" },
      { v: "3", l: "kamenné predajne" },
      { v: "Next.js 15", l: "+ Supabase + Stripe" },
    ],
  },
  {
    slug: "goldstein-inventory", title: "Goldstein Inventory", url: "goldstein-inventory.vercel.app",
    live: "https://goldstein-inventory.vercel.app", accent: "#0d0f17", dark: true, mock: "dash",
    desc: "Centrálny systém produktov a skladu pre 3 predajne Goldstein — zdroj pravdy o šperkoch, zásobách a fotkách. Admin dashboard s AI importom a exportmi do e-shopu/POS.",
    obdobie: "2025 – 2026", rola: "Produktový návrh · UI · realizácia",
    tags: ["dashboard", "UI/UX", "Supabase", "AI import", "integrácie"],
    features: [
      "Produktové CRUD — SKU, rýdzosť, kameň, ceny, DPH",
      "Sklady + presuny medzi predajňami",
      "Tlač etikiet s čiarovým kódom (Code 39)",
      "Export: WooCommerce / Shopify / Adamsoft CSV",
      "AI import z PDF/fotiek/CSV cez Claude (vision)",
      "4 POS/eKasa integračné režimy (adaptéry)",
      "Role + audit log (admin / manažér / personál)",
      "Ochrana proti dvojitému predaju (DB trigger)",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind v4", "Supabase", "Claude API", "Vercel"],
    design: {
      philosophy: "Tmavý operačný mód, data-first — emerald = živé dáta.",
      palette: [
        { hex: "#0d0f17", name: "page" }, { hex: "#161922", name: "panel" },
        { hex: "#0b0d14", name: "sidebar" }, { hex: "#34d6a3", name: "emerald" },
        { hex: "#d4b878", name: "gold" }, { hex: "#262b39", name: "border" },
      ],
      fonts: ["Space Grotesk — celý dashboard, tabular-nums"],
      note: "Hustý layout, maximum informácií na obrazovke, farebné kódy stavov (Skladom/Rezervované/Predané).",
    },
    zadanie: "Tri predajne, žiadny spoločný zdroj pravdy o tom, čo je kde na sklade. Bežné POS/eKasa systémy nevedeli pripraviť dáta a fotky pre e-shop.",
    riesenie: "Samostatný admin systém nad Supabase, ktorý sa neviaže na konkrétny POS — komunikuje cez adaptérovú vrstvu (4 režimy). Pridáva AI import dokumentov a tlač etikiet. (Manuály: docs/INTEGRATION_MODES.md, docs/DESIGN-MANUAL.md.)",
    vysledok: "Nasadené MVP (foundation) na Verceli — produkty, sklady, exporty, AI import a role fungujú. Zámerne nerieši účtovníctvo/eKasa, tie ostávajú externé.",
    metrics: [
      { v: "3", l: "predajne v jednom systéme" },
      { v: "4", l: "POS/eKasa režimy (adaptéry)" },
      { v: "AI", l: "import z PDF/fotiek cez Claude" },
    ],
  },
  {
    slug: "citylife", title: "CityLife", url: "github.io/citylife-app",
    href: "citylife.html",
    live: "https://leumasdam.github.io/citylife-app/", accent: "#0b1020", dark: true,
    clsplash: true,
    cover: "assets/citylife/app-gallery.jpg",
    appUrl: "https://leumasdam.github.io/citylife-app/",
    caseImage: "assets/citylife/uxcase.jpg",
    hasBoard: true,
    boardDir: "assets/citylife/screens",
    hideGallery: true,
    desc: "Koncept mobilnej appky, ktorá mení mestské plagáty na vstupnú bránu k udalostiam — naskenuješ plagát a podujatie sa otvorí. UX research + kompletný UI dizajn 30 obrazoviek + živý prototyp.",
    obdobie: "2025 – 2026", rola: "UX research · UI dizajn · prototyp",
    tags: ["UX research", "UI dizajn", "mobile app", "React", "prototyp"],
    features: [
      "30 navrhnutých obrazoviek — onboarding → scan → lístok",
      "QR / scan flow: plagát na ulici odomkne podujatie",
      "Living feed — čo sa deje dnes, pri tebe",
      "Light &amp; dark téma",
      "Interaktívny „Try it live“ prototyp",
      "Vlastný poster systém + brand identita",
    ],
    tech: ["React", "Vite", "Framer Motion", "GitHub Pages"],
    design: {
      philosophy: "„The city, scannable“ — z plagátu k akcii za 3 ťuknutia.",
      palette: [
        { hex: "#0b1020", name: "ink" }, { hex: "#1f4dff", name: "blue" },
        { hex: "#e8ff3a", name: "acid" }, { hex: "#f4f3ee", name: "paper" },
      ],
      fonts: ["Cormorant Garamond — display", "Inter — UI"],
      note: "Bold, plagátmi hnaný vizuál, QR ako nosný prvok, vysoký kontrast.",
    },
    zadanie: "Ľudia objavia podujatie najradšej cez plagát na ulici — ale informácia tam končí. Ako premostiť fyzický plagát a digitálnu akciu (otvoriť, uložiť, kúpiť lístok) bez trenia?",
    riesenie: "Mobilná appka, kde je plagát vstupným bodom: naskenuješ ho a podujatie sa otvorí — čas, miesto, cena, lineup, lístok. Navrhol som 30 obrazoviek a postavil interaktívny React prototyp.",
    vysledok: "Funkčný prototyp nasadený na GitHub Pages — interaktívny, s light/dark témou. Celý UX proces (personas, insighty, riešenie) je v case štúdii nižšie.",
    metrics: [
      { v: "30", l: "navrhnutých obrazoviek" },
      { v: "React", l: "+ Framer Motion" },
      { v: "Live", l: "interaktívny prototyp" },
    ],
  },
  {
    slug: "empiria", title: "express.EMPIRIA Parťák", url: "Mobilná appka · koncept",
    href: "empiria.html", live: "https://leumasdam.github.io/empiria-app/",
    accent: "#192B37", dark: true,
    esplash: true,
    desc: "Koncept appky pre montérov aj kúpeľne pod značkou express.EMPIRIA — skenuj diel, živý sklad, zákazky. Dve appky, jeden flywheel.",
    obdobie: "2026", rola: "UX · UI · prototyp",
    tags: ["ux/ui", "mobile app", "prototyp"],
  },
];
const VIEW_INDEX = { home: 0, portfolio: 1, kontakt: 2, case: 3 };

/* ===================== HELPERS ===================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const GLOBE = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.25" stroke="currentColor" stroke-width="1.5"/><path d="M1.75 10h16.5M10 1.75c2.5 2.4 2.5 13.85 0 16.5M10 1.75c-2.5 2.4-2.5 13.85 0 16.5" stroke="currentColor" stroke-width="1.5"/></svg>';
const ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const PRODUCTS = [
  { sku: "GS-1024", mat: "Au 585 / briliant", st: "ok",   lbl: "Skladom" },
  { sku: "GS-1031", mat: "Au 750 / smaragd",  st: "res",  lbl: "Rezerv." },
  { sku: "GS-1009", mat: "Ag 925",            st: "sold", lbl: "Predané" },
  { sku: "GS-1042", mat: "Au 585 / zafír",    st: "ok",   lbl: "Skladom" },
  { sku: "GS-1017", mat: "Platina / briliant", st: "ok",  lbl: "Skladom" },
];

function dashMock(big) {
  const rows = PRODUCTS.map((p) => `
    <div class="md__row">
      <span class="md__sku">${p.sku}</span>
      <span class="md__mat">${p.mat}</span>
      <span class="md__chip ${p.st}">${p.lbl}</span>
    </div>`).join("");
  return `<div class="mock-dash${big ? " mock-dash--lg" : ""}">
    <div class="md__side">
      <span class="md__logo">G</span>
      <i class="on"></i><i></i><i></i><i></i><i></i>
    </div>
    <div class="md__main">
      <div class="md__top">
        <span class="md__title">Produkty &amp; sklad</span>
        <span class="md__search"></span>
      </div>
      <div class="md__stats">
        <div class="md__stat"><b>1 248</b><span>produktov</span></div>
        <div class="md__stat"><b style="color:#34d6a3">962</b><span>skladom</span></div>
        <div class="md__stat"><b style="color:#d4b878">3</b><span>predajne</span></div>
      </div>
      <div class="md__table">
        <div class="md__head"><span>SKU</span><span>Materiál</span><span>Stav</span></div>
        ${rows}
      </div>
    </div>
  </div>`;
}

function cardVisual(c) {
  // express.EMPIRIA — živý splash (Bistro zoom-reveal ako v prototype)
  if (c.esplash)
    return `<div class="esplash-wrap"><div class="esplash">
      <svg class="dash" viewBox="0 0 200 420" preserveAspectRatio="none" aria-hidden="true"><path d="M-10,150 C30,128 64,196 102,224 C142,252 172,210 212,182"/></svg>
      <img class="lg" src="assets/empiria/logo-stacked.png" alt="express.EMPIRIA">
      <img class="ms" src="assets/empiria/mascot.png" alt="">
      <span class="bar"><i></i></span>
      <img class="home" src="assets/empiria/screens/home.png" alt="" loading="lazy">
      <span class="flash"></span>
    </div></div>`;
  // CityLife — 1:1 port splash screenu z citylife-app (deň→noc cyklus, lampa, loading);
  // animácie sa spúšťajú na hover karty (animation-play-state v CSS)
  if (c.clsplash)
    return `<div class="csplash-wrap"><div class="clsplash" role="img" aria-label="CityLife — splash screen">
      <span class="cl-night anim"></span>
      <svg class="cl-lamp" viewBox="0 0 390 844" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="clGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffe6a6" stop-opacity=".95"/>
            <stop offset="32%" stop-color="#ffc257" stop-opacity=".5"/>
            <stop offset="100%" stop-color="#ffc257" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="clCone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffd98a" stop-opacity=".55"/>
            <stop offset="100%" stop-color="#ffd98a" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <ellipse class="anim lampbit" cx="250" cy="208" rx="250" ry="250" fill="url(#clGlow)"/>
        <polygon class="anim lampbit lampcone" points="241,206 261,206 360,640 150,640" fill="url(#clCone)"/>
        <g stroke="#0a1340" stroke-width="7" fill="none" stroke-linecap="round">
          <line x1="302" y1="844" x2="302" y2="248"/>
          <path d="M302 248 Q302 198 256 196"/>
        </g>
        <rect x="288" y="826" width="28" height="18" rx="2" fill="#0a1340"/>
        <path d="M243 195 L269 195 L264 221 L248 221 Z" fill="#0a1340"/>
        <path class="anim lampbit" d="M247 199 L265 199 L261 218 L251 218 Z" fill="#ffe6a6"/>
      </svg>
      <span class="cl-ring anim"></span>
      <div class="cl-center">
        <img class="cl-logo anim" src="assets/citylife/brand-logo-white.png" alt="">
        <span class="cl-tag">the city, scannable</span>
      </div>
      <div class="cl-loading">
        <span class="cl-bar"><i class="anim"></i></span>
        <span class="cl-cap">LOADING TONIGHT…</span>
      </div>
      <span class="cl-notch"></span>
      <span class="cl-home"></span>
    </div></div>`;
  // Goldstein — laptop mockup; na hover priletí mandala z pravého okraja KARTY s jemným spinom
  if (c.gshero)
    return `<div class="shot shot--browser shot--img gshot2">
      <img src="assets/goldstein/mockup.jpg" alt="goldstein.sk na notebooku" loading="lazy">
    </div>
    <img class="g-mandala2" src="assets/goldstein/mandala.svg" alt="" aria-hidden="true">`;
  if (c.video)
    return `<div class="shot shot--browser shot--img"><span class="shot__bar"><i></i><i></i><i></i></span><video src="${c.video}" autoplay muted loop playsinline poster="${c.cardCover || c.cover || ""}"></video></div>`;
  const cov = c.cardCover || c.cover;
  if (cov)
    return `<div class="shot shot--browser shot--img"><span class="shot__bar"><i></i><i></i><i></i></span><img src="${cov}" alt="${c.title}" loading="lazy"></div>`;
  if (c.mock === "dash") return dashMock(false);
  if (c.type === "phone")
    return `<div class="shot shot--phone shot--${c.shot}"><span class="shot__label">${c.title}</span></div>`;
  const wide = c.type === "wide" ? " shot--wide" : "";
  return `<div class="shot shot--browser${wide} shot--${c.shot}"><span class="shot__bar"><i></i><i></i><i></i></span><span class="shot__label">${c.title}</span></div>`;
}

/* splash animácie (CityLife, Empiria): reštart od nuly pri každom hoveri.
   Bez .play sú animácie vypnuté (statický stav); mouseenter triedu pridá → cyklus beží od 0 %. */
function wireSplashHover() {
  $$(".case-card").forEach((card) => {
    const sp = card.querySelector(".clsplash, .esplash");
    if (!sp) return;
    if (window.matchMedia("(hover: none)").matches) { sp.classList.add("play"); return; }
    card.addEventListener("mouseenter", () => {
      sp.classList.remove("play");
      void sp.offsetWidth; // reflow → ďalšie pridanie triedy reštartuje keyframy
      sp.classList.add("play");
    });
    card.addEventListener("mouseleave", () => sp.classList.remove("play"));
  });
}

/* fill the bento case cards */
function renderCards() {
  $$(".case-card[data-case]").forEach((card) => {
    const c = CASES.find((x) => x.slug === card.dataset.case);
    if (!c) return;
    if (c.dark) card.classList.add("case-card--dark");
    card.innerHTML = `
      <div class="case-card__top">
        <h2 class="case-card__title">
          <span class="case-card__title-default">${c.title}</span>
          <span class="case-card__title-hover">${c.url}</span>
        </h2>
        <p class="case-card__meta"><span class="case-card__description">${c.desc}</span></p>
      </div>
      <div class="case-card__visual">${cardVisual(c)}</div>
      <div class="case-card__bottom">
        <div class="case-card__actions">
          <span class="case-card__globe" role="link" tabindex="0" aria-label="Pozrieť naživo">${GLOBE}</span>
          <span class="case-card__cta">Preskúmať ${ARROW}</span>
        </div>
      </div>`;
    card.addEventListener("click", (e) => {
      // globe opens live link separately
      if (e.target.closest(".case-card__globe")) { e.preventDefault(); window.open(c.live, "_blank", "noopener"); return; }
      e.preventDefault();
      if (c.href) { window.location.href = c.href; return; }
      openCase(c.slug, card);
    });
  });
}

/* ===================== ROUTER / SLIDE ===================== */
let currentView = "home";
let currentSlug = null;

function swap(targetId) {
  $$(".view").forEach((v) => v.classList.toggle("is-active", v.id === targetId));
  window.scrollTo(0, 0);
}

function go(targetId, dir) {
  document.documentElement.dataset.slide = dir;
  const run = () => swap(targetId);
  if (document.startViewTransition) {
    document.startViewTransition(run);
  } else {
    run();
  }
}

/* navigate to a main view (home/portfolio/kontakt) */
function navMain(view) {
  if (view === currentView && !currentSlug) return;
  const fromIdx = currentSlug ? VIEW_INDEX.case : VIEW_INDEX[currentView];
  const toIdx = VIEW_INDEX[view];
  // user's rule: target to the LEFT -> slide "left"; to the RIGHT -> slide "right"
  const dir = toIdx < fromIdx ? "left" : "right";
  go("view-" + view, dir);
  currentView = view;
  currentSlug = null;
  document.body.classList.remove("in-case");
  setActivePill(view);
}

function setActivePill(view) {
  $$(".navpill").forEach((p) => p.classList.toggle("is-active", p.dataset.view === view));
}

/* open a case detail — MORPH expand from the clicked card box (no sideways slide) */
function openCase(slug, cardEl) {
  const c = CASES.find((x) => x.slug === slug);
  if (!c) return;
  fillCase(c);
  delete document.documentElement.dataset.slide; // not a navbar slide
  const hero = $("#case-hero");

  const apply = () => { swap("view-case"); document.body.classList.add("in-case"); setActivePill("portfolio"); };

  if (document.startViewTransition && cardEl) {
    document.documentElement.classList.add("is-morphing");
    cardEl.style.viewTransitionName = "case-morph";
    hero.style.viewTransitionName = "case-morph";
    const t = document.startViewTransition(apply);
    t.finished.finally(() => {
      cardEl.style.viewTransitionName = "";
      hero.style.viewTransitionName = "";
      document.documentElement.classList.remove("is-morphing");
    });
  } else {
    apply();
  }
  currentView = "home";
  currentSlug = slug;
}

function show(sel, cond, fn) {
  const el = $(sel);
  if (!el) return;
  el.hidden = !cond;
  if (cond) fn();
}

function fillCase(c) {
  const hero = $("#case-hero");
  hero.classList.toggle("case-hero--dark", !!c.dark);
  hero.style.setProperty("--case-accent", c.accent);

  $("#case-url").textContent = c.url;
  $("#case-title").textContent = c.title;
  $("#case-desc").textContent = c.desc;
  $("#case-obdobie").textContent = c.obdobie;
  $("#case-rola").textContent = c.rola;
  $("#case-tags").innerHTML = c.tags.map((t) => `<span>${t}</span>`).join("");

  // cover (real image / dashboard mock / gradient)
  const big = $("#case-bigshot");
  big.className = "case-shot";
  big.style.cssText = "";
  if (c.video) {
    big.classList.add("has-img");
    big.innerHTML = `<video src="${c.video}" autoplay muted loop playsinline poster="${c.cover || ""}"></video>`;
    $("#case-cap").textContent = "Video hero z webu " + c.url;
  } else if (c.cover) {
    big.classList.add("has-img");
    big.innerHTML = `<img src="${c.cover}" alt="${c.title}">`;
    $("#case-cap").textContent = "Náhľad z webu " + c.url;
  } else if (c.mock === "dash") {
    big.className = "case-shot has-mock";
    big.innerHTML = dashMock(true);
    $("#case-cap").textContent = "Replika admin dashboardu (reálne screeny za loginom doplníš ty)";
  } else {
    big.style.background = shotBg(c.shot);
    big.textContent = c.title;
    $("#case-cap").textContent = "[ Sem príde hlavný náhľad / cover projektu ]";
  }

  // funkcie / tech / moodboard (len ak projekt má dáta)
  show("#case-features-wrap", c.features, () => {
    $("#case-features").innerHTML = c.features.map((f) => `<li>${f}</li>`).join("");
  });
  show("#case-tech-wrap", c.tech, () => {
    $("#case-tech").innerHTML = c.tech.map((t) => `<span class="chip">${t}</span>`).join("");
  });
  show("#case-design-wrap", c.design, () => {
    $("#case-design-philo").textContent = c.design.philosophy;
    $("#case-swatches").innerHTML = c.design.palette
      .map((p) => `<div class="swatch"><i style="background:${p.hex}"></i><b>${p.name}</b><span>${p.hex}</span></div>`)
      .join("");
    $("#case-fonts").innerHTML = c.design.fonts.map((f) => `<span class="chip">${f}</span>`).join("");
    $("#case-design-note").textContent = c.design.note;
  });

  // screens board (clickable individual screens)
  const boardWrap = $("#case-board-wrap");
  if (c.hasBoard) {
    boardWrap.hidden = false;
    buildBoard(c);
  } else {
    boardWrap.hidden = true;
  }

  // live prototype iframe (auto-updates from git)
  const protoWrap = $("#case-proto-wrap");
  const proto = $("#case-proto");
  if (c.appUrl) {
    protoWrap.hidden = false;
    if (proto.src !== c.appUrl) proto.src = c.appUrl;
    $("#case-proto-url").textContent = c.url;
    $("#case-proto-open").href = c.appUrl;
    $("#case-proto-note").textContent = "Beží naživo a aktualizuje sa automaticky pri každej zmene na GitHube — žiadny statický obrázok.";
  } else {
    protoWrap.hidden = true;
    proto.removeAttribute("src");
  }

  // UX research case study (tall image)
  const uxWrap = $("#case-uxcase-wrap");
  if (c.caseImage) { uxWrap.hidden = false; $("#case-uxcase").src = c.caseImage; }
  else { uxWrap.hidden = true; $("#case-uxcase").removeAttribute("src"); }

  // text blocks
  $("#case-zadanie").textContent = c.zadanie || c.kontext || "";
  $("#case-riesenie").textContent = c.riesenie || "Placeholder — sem príde finálne riešenie a kľúčové obrazovky projektu „" + c.title + "“.";
  $("#case-vysledok").textContent = c.vysledok || "";

  // galéria (reálne fotky alebo placeholdery)
  $("#case-gallery-wrap").hidden = !!c.hideGallery;
  if (c.hideGallery) {
    // skip
  } else if (c.images) {
    $("#case-gallery").innerHTML = c.images
      .map((src) => `<div><img src="${src}" alt="${c.title}" loading="lazy"></div>`)
      .join("");
  } else {
    const bg = c.mock ? "#161922" : shotBg(c.shot);
    $("#case-gallery").innerHTML = [1, 2, 3]
      .map((n) => `<div style="background:${bg}">${c.title} · ${n}</div>`)
      .join("");
  }

  // metriky
  const metrics = c.metrics || [
    { v: "[ ? ]", l: "[ metrika ]" }, { v: "[ ? ]", l: "[ metrika ]" }, { v: "[ ? ]", l: "[ metrika ]" },
  ];
  $("#case-metrics").innerHTML = metrics
    .map((m) => `<div class="case-metric"><strong>${m.v}</strong><span>${m.l}</span></div>`)
    .join("");

  // ďalší projekt
  const i = CASES.findIndex((x) => x.slug === c.slug);
  const nt = $("#case-next-title");
  if (nt) nt.textContent = CASES[(i + 1) % CASES.length].title;

  $("#case-live").href = c.live;
}

function shotBg(s) {
  return {
    a: "linear-gradient(135deg,#20827c,#5fa396)",
    b: "linear-gradient(135deg,#3f3f46,#71717a)",
    c: "linear-gradient(135deg,#0c4b3a,#8dc63f)",
    d: "linear-gradient(160deg,#b89b3d,#e0cf5a)",
    e: "linear-gradient(135deg,#c8553d,#e08a5a)",
  }[s];
}

/* back from case — MORPH back into the originating card on the home grid */
function backFromCase() {
  const slug = currentSlug;
  const card = $(`.case-card[data-case="${slug}"]`);
  const hero = $("#case-hero");
  delete document.documentElement.dataset.slide;

  const apply = () => { swap("view-home"); document.body.classList.remove("in-case"); setActivePill("home"); };

  if (document.startViewTransition && card) {
    document.documentElement.classList.add("is-morphing");
    hero.style.viewTransitionName = "case-morph";
    card.style.viewTransitionName = "case-morph";
    const t = document.startViewTransition(apply);
    t.finished.finally(() => {
      hero.style.viewTransitionName = "";
      card.style.viewTransitionName = "";
      document.documentElement.classList.remove("is-morphing");
    });
  } else {
    apply();
  }
  currentView = "home";
  currentSlug = null;
}

/* prev/next within cases — gentle cross-fade in place (no slide, no morph) */
function stepCase(delta) {
  const i = CASES.findIndex((x) => x.slug === currentSlug);
  const next = CASES[(i + delta + CASES.length) % CASES.length];
  delete document.documentElement.dataset.slide;
  const run = () => { fillCase(next); window.scrollTo(0, 0); };
  if (document.startViewTransition) document.startViewTransition(run);
  else run();
  currentSlug = next.slug;
}

/* ===================== SCREENS BOARD + LIGHTBOX ===================== */
let SCREEN_META = [];
let LB_LIST = [];
let LB_INDEX = 0;

async function loadScreenMeta(dir) {
  try {
    const res = await fetch(dir + "/_meta.json");
    SCREEN_META = await res.json();
  } catch (e) { SCREEN_META = []; }
}

async function buildBoard(c) {
  if (!SCREEN_META.length) await loadScreenMeta(c.boardDir);
  LB_LIST = SCREEN_META.map((m) => ({
    src: c.boardDir + "/screen-" + m.id + ".png", title: m.title, desc: m.desc, num: m.id,
  }));
  $("#case-board").innerHTML = LB_LIST.map((s, i) => `
    <button class="screen-tile" data-lb="${i}">
      <img src="${s.src}" alt="${s.title}" loading="lazy" />
      <span class="screen-tile__cap"><b><span class="screen-tile__num">${s.num}</span> · ${s.title}</b>${s.desc}</span>
    </button>`).join("");
  $("#case-board-title").textContent = LB_LIST.length + " obrazoviek";
}

function openLB(i) {
  if (!LB_LIST.length) return;
  LB_INDEX = (i + LB_LIST.length) % LB_LIST.length;
  const s = LB_LIST[LB_INDEX];
  $("#lightbox-img").src = s.src;
  $("#lightbox-title").textContent = s.num + " · " + s.title;
  $("#lightbox-desc").textContent = s.desc;
  $("#lightbox").hidden = false;
}
function closeLB() { $("#lightbox").hidden = true; }
function stepLB(d) { openLB(LB_INDEX + d); }

/* ===================== WIRE UP ===================== */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderCards();
  wireSplashHover();

  // nav pills + logo
  $$("[data-view]").forEach((el) => {
    el.addEventListener("click", (e) => { e.preventDefault(); navMain(el.dataset.view); });
  });

  // back / prev / next
  $("[data-back]").addEventListener("click", backFromCase);
  $$("[data-case-prev]").forEach((b) => b.addEventListener("click", () => stepCase(-1)));
  $$("[data-case-next]").forEach((b) => b.addEventListener("click", () => stepCase(1)));

  // lang toggle (visual)
  $$(".header__lang .pill").forEach((b) => {
    b.addEventListener("click", () => {
      $$(".header__lang .pill").forEach((x) => x.classList.remove("is-active"));
      b.classList.add("is-active");
      document.documentElement.lang = b.dataset.lang;
    });
  });

  // CV download (PDF v assets — pri novej verzii stačí prepísať súbor)
  $$("[data-cv]").forEach((el) => {
    el.href = "assets/cv-samuel.pdf";
    el.target = "_blank";
    el.rel = "noopener";
  });

  // screens board + lightbox
  $("#case-board").addEventListener("click", (e) => {
    const t = e.target.closest("[data-lb]");
    if (t) openLB(+t.dataset.lb);
  });
  $("[data-lb-close]").addEventListener("click", closeLB);
  $("[data-lb-prev]").addEventListener("click", () => stepLB(-1));
  $("[data-lb-next]").addEventListener("click", () => stepLB(1));
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLB(); });

  // keyboard
  document.addEventListener("keydown", (e) => {
    if (!$("#lightbox").hidden) {
      if (e.key === "Escape") closeLB();
      else if (e.key === "ArrowLeft") stepLB(-1);
      else if (e.key === "ArrowRight") stepLB(1);
      return;
    }
    if (e.key === "Escape" && currentSlug) backFromCase();
  });

  // preload screen captions early
  loadScreenMeta("assets/citylife/screens");
});
