export type Locale = 'en' | 'cs';

export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      research: 'Research',
      blog: 'Blog',
      awards: 'Awards',
      contact: 'Contact',
    },
    home: {
      greeting: 'Legal Professional & International Relations Expert',
      subtitle: 'Law Student at Masaryk University | International Law & European Integration',
      downloadCV: 'Download CV',
      learnMore: 'Learn More',
    },
    about: {
      title: 'About Me',
      education: 'Education',
      interests: 'Areas of Interest',
    },
    experience: {
      title: 'Professional Experience',
      current: 'Present',
    },
    research: {
      title: 'Research & Focus Areas',
      subtitle: 'Academic interests and research topics',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Legal reflections and academic insights',
      search: 'Search articles...',
      readMore: 'Read More',
      noResults: 'No articles found',
    },
    awards: {
      title: 'Awards & Achievements',
      subtitle: 'Recognition and accomplishments',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Feel free to reach out for collaboration or inquiries',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      linkedIn: 'Connect on LinkedIn',
    },
    footer: {
      rights: 'All rights reserved',
      built: 'Built with Next.js & TailwindCSS',
    },
  },
  cs: {
    nav: {
      home: 'Domů',
      about: 'O mně',
      experience: 'Zkušenosti',
      research: 'Výzkum',
      blog: 'Blog',
      awards: 'Ocenění',
      contact: 'Kontakt',
    },
    home: {
      greeting: 'Právnička & Expertka na mezinárodní vztahy',
      subtitle: 'Studentka práva na Masarykově univerzitě | Mezinárodní právo & Evropská integrace',
      downloadCV: 'Stáhnout CV',
      learnMore: 'Zjistit více',
    },
    about: {
      title: 'O mně',
      education: 'Vzdělání',
      interests: 'Oblasti zájmu',
    },
    experience: {
      title: 'Profesní zkušenosti',
      current: 'Současnost',
    },
    research: {
      title: 'Výzkum & Zaměření',
      subtitle: 'Akademické zájmy a výzkumné oblasti',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Právní reflexe a akademické poznatky',
      search: 'Hledat články...',
      readMore: 'Číst více',
      noResults: 'Žádné články nenalezeny',
    },
    awards: {
      title: 'Ocenění & Úspěchy',
      subtitle: 'Uznání a dosažené výsledky',
    },
    contact: {
      title: 'Kontaktujte mě',
      subtitle: 'Neváhejte mě kontaktovat ohledně spolupráce či dotazů',
      name: 'Jméno',
      email: 'E-mail',
      message: 'Zpráva',
      send: 'Odeslat zprávu',
      linkedIn: 'Propojit na LinkedIn',
    },
    footer: {
      rights: 'Všechna práva vyhrazena',
      built: 'Vytvořeno pomocí Next.js & TailwindCSS',
    },
  },
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

