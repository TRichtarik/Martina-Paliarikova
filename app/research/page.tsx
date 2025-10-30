'use client';

import { BookOpen, Globe, Scale, Shield, Users, Gavel } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function Research() {
  const { locale } = useLocale();
  const t = translations[locale];

  const researchAreas = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: locale === 'en' ? 'International Law' : 'Mezinárodní právo',
      description: locale === 'en'
        ? 'Exploring the evolution of international legal norms, treaty interpretation, and the role of international courts in dispute resolution. Focus on the interplay between state sovereignty and international legal obligations.'
        : 'Zkoumání vývoje mezinárodních právních norm, interpretace smluv a role mezinárodních soudů v řešení sporů. Zaměření na vzájemné působení státní suverenity a mezinárodních právních závazků.',
      topics: locale === 'en'
        ? ['Treaty Law', 'State Responsibility', 'International Dispute Resolution', 'Customary International Law']
        : ['Právo mezinárodních smluv', 'Odpovědnost států', 'Mezinárodní řešení sporů', 'Mezinárodní zvykové právo'],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: locale === 'en' ? 'European Integration' : 'Evropská integrace',
      description: locale === 'en'
        ? 'Analyzing the legal and institutional framework of the European Union, including the development of EU law, decision-making processes, and the challenges of deeper integration in an evolving geopolitical landscape.'
        : 'Analýza právního a institucionálního rámce Evropské unie, včetně vývoje práva EU, rozhodovacích procesů a výzev hlubší integrace v měnící se geopolitické krajině.',
      topics: locale === 'en'
        ? ['EU Institutional Law', 'Single Market Regulation', 'EU External Relations', 'Differentiated Integration']
        : ['Institucionální právo EU', 'Regulace jednotného trhu', 'Vnější vztahy EU', 'Diferencovaná integrace'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: locale === 'en' ? 'Human Rights Law' : 'Právo lidských práv',
      description: locale === 'en'
        ? 'Investigating international and regional human rights protection mechanisms, with emphasis on the European Convention on Human Rights, the role of civil society, and emerging challenges to human rights in the digital age.'
        : 'Zkoumání mezinárodních a regionálních mechanismů ochrany lidských práv s důrazem na Evropskou úmluvu o lidských právech, roli občanské společnosti a vznikající výzvy pro lidská práva v digitální éře.',
      topics: locale === 'en'
        ? ['ECHR Jurisprudence', 'Refugee Protection', 'Digital Rights', 'Right to Privacy']
        : ['Judikatura ESLP', 'Ochrana uprchlíků', 'Digitální práva', 'Právo na soukromí'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: locale === 'en' ? 'Strategic Culture' : 'Strategická kultura',
      description: locale === 'en'
        ? 'Examining how strategic culture shapes state behavior in international relations, particularly in the context of European security, defense policy, and responses to emerging threats in the post-Cold War era.'
        : 'Zkoumání toho, jak strategická kultura formuje chování států v mezinárodních vztazích, zejména v kontextu evropské bezpečnosti, obranné politiky a reakcí na vznikající hrozby v post-studenoválečné éře.',
      topics: locale === 'en'
        ? ['European Security Architecture', 'Defense Policy', 'Cybersecurity', 'Transatlantic Relations']
        : ['Evropská bezpečnostní architektura', 'Obranná politika', 'Kybernetická bezpečnost', 'Transatlantické vztahy'],
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: locale === 'en' ? 'International Humanitarian Law' : 'Mezinárodní humanitární právo',
      description: locale === 'en'
        ? 'Researching the application and enforcement of humanitarian law in armed conflicts, including protection of civilians, conduct of hostilities, and the accountability mechanisms for violations of IHL.'
        : 'Výzkum aplikace a prosazování humanitárního práva v ozbrojených konfliktech, včetně ochrany civilistů, vedení nepřátelských akcí a mechanismů odpovědnosti za porušení MHP.',
      topics: locale === 'en'
        ? ['Geneva Conventions', 'War Crimes', 'Protection of Civilians', 'International Criminal Law']
        : ['Ženevské úmluvy', 'Válečné zločiny', 'Ochrana civilistů', 'Mezinárodní trestní právo'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white section-padding">
        <div className="container-custom">
          <div className="flex items-center mb-6">
            <BookOpen className="w-12 h-12 mr-4 text-gold-400" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold">{t.research.title}</h1>
          </div>
          <p className="text-xl text-navy-200 max-w-3xl leading-relaxed">
            {t.research.subtitle}
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className={`card border-l-4 ${
                  index % 2 === 0 ? 'border-gold-500' : 'border-navy-500'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? 'bg-gold-100 text-gold-600' : 'bg-navy-100 text-navy-600'
                  }`}>
                    {area.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-navy-700 leading-relaxed mb-4">
                      {area.description}
                    </p>

                    {/* Topics */}
                    <div>
                      <h4 className="text-sm font-semibold text-navy-900 uppercase tracking-wide mb-3">
                        {locale === 'en' ? 'Key Topics' : 'Klíčová témata'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              index % 2 === 0
                                ? 'bg-gold-50 text-gold-700 border border-gold-200'
                                : 'bg-navy-50 text-navy-700 border border-navy-200'
                            }`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Engagement */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-navy-900 text-center">
            {locale === 'en' ? 'Academic Engagement' : 'Akademické zapojení'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card bg-white">
              <h3 className="text-xl font-serif font-semibold text-navy-900 mb-4">
                {locale === 'en' ? 'Research Activities' : 'Výzkumné aktivity'}
              </h3>
              <ul className="space-y-3 text-navy-600">
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  {locale === 'en'
                    ? 'Participation in international research projects'
                    : 'Účast na mezinárodních výzkumných projektech'
                  }
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  {locale === 'en'
                    ? 'Contribution to academic publications and journals'
                    : 'Příspěvky do akademických publikací a časopisů'
                  }
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  {locale === 'en'
                    ? 'Attendance at international conferences and seminars'
                    : 'Účast na mezinárodních konferencích a seminářích'
                  }
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  {locale === 'en'
                    ? 'Collaboration with research institutions'
                    : 'Spolupráce s výzkumnými institucemi'
                  }
                </li>
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-navy-800 to-navy-900 text-white">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gold-400">
                {locale === 'en' ? 'Research Methodology' : 'Výzkumná metodologie'}
              </h3>
              <ul className="space-y-3 text-navy-100">
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  {locale === 'en'
                    ? 'Comparative legal analysis'
                    : 'Komparativní právní analýza'
                  }
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  {locale === 'en'
                    ? 'Case law and jurisprudence examination'
                    : 'Zkoumání judikatury a soudní praxe'
                  }
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  {locale === 'en'
                    ? 'Doctrinal and theoretical research'
                    : 'Doktrinální a teoretický výzkum'
                  }
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  {locale === 'en'
                    ? 'Policy analysis and evaluation'
                    : 'Analýza a hodnocení politik'
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

