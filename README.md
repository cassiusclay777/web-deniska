# web-deniska
# Web Denisy Bukovčanové - Výživové poradenství

Moderní webová aplikace postavená na Astro frameworku s podporou více jazyků a admin panelem.

## 🚀 Funkce

### ✅ Hotovo
- **Migrace na Astro** - Moderní statický framework s lepší výkonností
- **Plně responzivní design** - Optimalizováno pro všechny zařízení
- **Komponentová architektura** - Snadná údržba a rozšiřitelnost
- **Formulář pro kontakt** - Integrace s FormSubmit.co
- **Stránka "Děkuji"** - Potvrzení odeslání formuláře

### 🔄 V procesu
- **Více jazyků** - Podpora češtiny, angličtiny a němčiny
- **Admin panel** - Správa obsahu bez znalosti kódu
- **Správa článků** - CRUD operace pro blogové příspěvky
- **Správa referencí** - Přidávání a úprava klientů
- **Správa služeb** - Úprava cen a popisů služeb

## 🏗️ Struktura projektu

```
src/
├── components/          # Astro komponenty
│   ├── HeroSection.astro
│   ├── ServicesSection.astro
│   ├── ProcessSection.astro
│   ├── AboutSection.astro
│   ├── TestimonialsSection.astro
│   ├── PersonasSection.astro
│   ├── ArticlesSection.astro
│   └── ContactSection.astro
├── layouts/             # Layouty stránek
│   └── BaseLayout.astro
├── pages/               # Stránky
│   ├── index.astro      # Hlavní stránka
│   ├── thank-you.astro  # Stránka děkuji
│   ├── admin/           # Admin panel
│   │   ├── login.astro
│   │   ├── dashboard.astro
│   │   └── articles.astro
│   ├── en/              # Anglická verze
│   └── de/              # Německá verze
├── styles/              # Styly
│   └── global.css
├── i18n/                # Internacionalizace
│   └── config.ts
└── middleware.ts        # Middleware pro jazyky a auth
```

## 🛠️ Instalace a spuštění

1. **Instalace závislostí:**
```bash
npm install
```

2. **Spuštění vývojového serveru:**
```bash
npm run dev
```

3. **Sestavení pro produkci:**
```bash
npm run build
```

4. **Náhled buildované verze:**
```bash
npm run preview
```

## 🌐 Podpora více jazyků

Web podporuje 3 jazyky:
- **Čeština** (výchozí) - `/`
- **Angličtina** - `/en/`
- **Němčina** - `/de/`

Překlady jsou definovány v `src/i18n/config.ts`.

## 🔐 Admin panel

### Přihlášení
- URL: `/admin/login`
- Výchozí přihlašovací údaje:
  - Uživatelské jméno: `admin`
  - Heslo: `admin123`

### Funkce admin panelu
1. **Správa článků** - Přidávání, úprava, mazání blogových příspěvků
2. **Správa referencí** - Úprava klientů a jejich recenzí
3. **Správa služeb** - Úprava cen a popisů programů
4. **Nastavení webu** - Základní konfigurace a SEO

## 🎨 Design

### Paleta barev
- **Hlavní akcent:** `#E49AA6` (jemná růžová)
- **Sekundární:** `#C9A58C` (cappuccino)
- **Pozadí:** `#FFF8F6` (krémová bílá)
- **Text:** `#3B302F` (tmavě hnědá)

### Typografie
- **Nadpisy:** Fraunces (serif)
- **Text:** DM Sans (sans-serif)

## 📁 Veřejné soubory

Statické soubory (obrázky, PDF) patří do složky `public/`:
- `public/foto1.webp` - Hlavní portrétová fotka
- `public/foto.webp` - Další fotografie
- `public/zivotopis Deni3.pdf` - Životopis (pokud existuje)

## 🔧 Konfigurace

### Astro konfigurace (`astro.config.mjs`)
- Statický výstup
- Tailwind CSS integrace
- Trailing slashes vždy

### Formulář
- Používá FormSubmit.co pro zpracování
- Přesměrování na `/thank-you` po odeslání
- GDPR compliant

## 🚀 Deployment

Web je připraven pro deployment na:
- **Vercel** (doporučeno)
- **Netlify**
- **GitHub Pages**
- Jakýkoliv statický hosting

### Vercel deployment
```bash
vercel --prod
```

## 📈 SEO a optimalizace

- **Meta tagy** pro sociální sítě
- **Strukturovaná data** (Schema.org)
- **Lazy loading** obrázků
- **Optimalizace pro rychlost** (Core Web Vitals)
- **Responzivní obrázky** (WebP formát)

## 🔮 Plánované vylepšení

1. **E-shop** - Prodej e-booků a online kurzů
2. **Newsletter** - Přihlášení k odběru novinek
3. **Kalendář rezervací** - Online objednávání konzultací
4. **Členská sekce** - Pro klienty v dlouhodobých programech
5. **Recenzní systém** - Hodnocení služeb

## 📄 Licence

Vlastní projekt - © Denisa Bukovčanová

## 🤝 Kontakt

Pro technickou podporu nebo dotazy ohledně vývoje:
- Email: [technická podpora]
- GitHub: [odkaz na repozitář]

---

**Poslední aktualizace:** Duben 2024
**Verze:** 2.0.0 (Astro migrace)