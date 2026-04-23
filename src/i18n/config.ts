export const languages = {
  cs: 'Čeština',
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang = 'cs' as const;

export const ui = {
  cs: {
    'nav.home': 'Domů',
    'nav.services': 'Služby',
    'nav.faq': 'FAQ',
    'nav.process': 'Postup',
    'nav.about': 'O mně',
    'nav.testimonials': 'Reference',
    'nav.personas': 'Pro koho',
    'nav.articles': 'Články',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Výživové poradenství · ženy 30–50 · Znojmo a online',
    'hero.title': 'Zhubněte 5–10 kg <em>bez jojo efektu</em> — strava, která vydrží v běžném životě.',
    'hero.lead': 'Společně nastavíme jídlo tak, aby šlo skloubit s prací a rodinou — bez extrémů, počítání kalorií a zbytečných výčitek.',
    'hero.cta.consultation': 'Objednat úvodní konzultaci',
    'hero.cta.download': 'Stáhnout ukázkový jídelníček',
    'services.title': 'Programy podle toho, kde právě jste',
    'services.subtitle': 'Vyberte hloubku spolupráce — vždy víte, co dostanete a za co přibližně platíte.',
    'services.intro': 'Každý má jiný čas a energii. Přesnou částku upřesníme po úvodní konzultaci.',
    // ... další překlady
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.faq': 'FAQ',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.personas': 'For Whom',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Nutrition counseling · women 30–50 · Znojmo and online',
    'hero.title': 'Lose 5–10 kg <em>without yo-yo effect</em> — diet that lasts in everyday life.',
    'hero.lead': 'Together we\'ll set up food that can be combined with work and family — without extremes, calorie counting and unnecessary guilt.',
    'hero.cta.consultation': 'Book initial consultation',
    'hero.cta.download': 'Download sample meal plan',
    'services.title': 'Programs based on where you are right now',
    'services.subtitle': 'Choose the depth of cooperation — you always know what you get and what you pay for.',
    'services.intro': 'Everyone has different time and energy. We\'ll specify the exact amount after the initial consultation.',
    // ... další překlady
  },
  de: {
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.faq': 'FAQ',
    'nav.process': 'Ablauf',
    'nav.about': 'Über mich',
    'nav.testimonials': 'Referenzen',
    'nav.personas': 'Für wen',
    'nav.articles': 'Artikel',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Ernährungsberatung · Frauen 30–50 · Znojmo und online',
    'hero.title': 'Verlieren Sie 5–10 kg <em>ohne Jo-Jo-Effekt</em> — Ernährung, die im Alltag Bestand hat.',
    'hero.lead': 'Gemeinsam stellen wir die Ernährung so ein, dass sie mit Arbeit und Familie vereinbar ist — ohne Extreme, Kalorienzählen und unnötige Schuldgefühle.',
    'hero.cta.consultation': 'Erstberatung buchen',
    'hero.cta.download': 'Beispiel-Ernährungsplan herunterladen',
    'services.title': 'Programme je nachdem, wo Sie gerade stehen',
    'services.subtitle': 'Wählen Sie die Tiefe der Zusammenarbeit — Sie wissen immer, was Sie bekommen und wofür Sie bezahlen.',
    'services.intro': 'Jeder hat andere Zeit und Energie. Den genauen Betrag klären wir nach der Erstberatung.',
    // ... další překlady
  },
} as const;

export type Language = keyof typeof languages;