'use client';

import { GraduationCap, Globe, Scale, Users } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function About() {
  const { locale } = useLocale();
  const t = translations[locale];

  const education = [
    {
      degree: locale === 'en' ? 'Master of Laws (Mgr.)' : 'Magisterský program práva (Mgr.)',
      field: locale === 'en' ? 'Law and Legal Science' : 'Právo a právní věda',
      institution: locale === 'en' ? 'Faculty of Law, Masaryk University' : 'Právnická fakulta, Masarykova univerzita',
      period: locale === 'en' ? '2023 – Expected 2027' : '2023 – Očekáváno 2027',
      location: 'Brno, Czech Republic',
      thesis: '',
    },
    {
      degree: locale === 'en' ? 'Master of Arts (Mgr.)' : 'Magisterský titul (Mgr.)',
      field: locale === 'en' ? 'International Relations' : 'Mezinárodní vztahy',
      institution: locale === 'en' ? 'Faculty of Social Studies, Masaryk University' : 'Fakulta sociálních studií, Masarykova univerzita',
      period: '2022 – 2025',
      location: 'Brno, Czech Republic',
      thesis: locale === 'en' 
        ? 'Thesis: Testing the Functionality of the Concept of Strategic Culture: A Case Study of Russian Conflicts'
        : 'Diplomová práce: Testování funkčnosti konceptu strategické kultury: případová studie ruských konfliktů',
    },
    {
      degree: locale === 'en' ? 'Bachelor of Arts (Bc.)' : 'Bakalářský titul (Bc.)',
      field: locale === 'en' ? 'International Relations' : 'Mezinárodní vztahy',
      institution: locale === 'en' ? 'Faculty of Social Studies, Masaryk University' : 'Fakulta sociálních studií, Masarykova univerzita',
      period: '2019 – 2022',
      location: 'Brno, Czech Republic',
      thesis: locale === 'en'
        ? 'Thesis: Russian Strategic Culture and Perception of Nuclear Weapons'
        : 'Bakalářská práce: Ruská strategická kultura a vnímání jaderných zbraní',
    },
  ];

  const interests = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: locale === 'en' ? 'International Law & Strategic Culture' : 'Mezinárodní právo a strategická kultura',
      description: locale === 'en' 
        ? 'Exploring how cultural and strategic paradigms influence state behavior in international legal contexts. Research focuses on the intersection of legal norms and strategic decision-making in conflict situations.'
        : 'Zkoumání toho, jak kulturní a strategické paradigmata ovlivňují chování států v mezinárodním právním kontextu. Výzkum se zaměřuje na průsečík právních norem a strategického rozhodování v konfliktních situacích.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: locale === 'en' ? 'European Integration & Diplomacy' : 'Evropská integrace a diplomacie',
      description: locale === 'en'
        ? 'Analyzing the legal and diplomatic frameworks driving European integration. Interest in EU institutional law, treaty structures, and the evolving relationship between supranational and national governance.'
        : 'Analýza právních a diplomatických rámců pohánějících evropskou integraci. Zájem o institucionální právo EU, struktury smluv a vyvíjející se vztah mezi nadnárodní a národní správou.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: locale === 'en' ? 'Human Rights & Global Governance' : 'Lidská práva a globální správa',
      description: locale === 'en'
        ? 'Committed to advancing human rights education and protection mechanisms across Central Europe. Focused on civic education, anti-corruption initiatives, and strengthening democratic participation.'
        : 'Zaměřena na podporu vzdělávání v oblasti lidských práv a ochranných mechanismů ve střední Evropě. Zaměření na občanské vzdělávání, protikorupční iniciativy a posílení demokratické účasti.',
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: locale === 'en' ? 'Legal Ethics & Corporate Responsibility' : 'Právní etika a korporátní odpovědnost',
      description: locale === 'en'
        ? 'Examining the ethical dimensions of legal practice and corporate conduct in business law. Interest in compliance frameworks, legal professionalism, and the role of law in promoting responsible business practices.'
        : 'Zkoumání etických dimenzí právní praxe a chování korporací v obchodním právu. Zájem o compliance rámce, právní profesionalismus a roli práva v podpoře odpovědných obchodních praktik.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{t.about.title}</h1>
          <p className="text-xl text-navy-200 max-w-3xl leading-relaxed">
            {locale === 'en'
              ? 'A dedicated legal professional combining expertise in law and international relations with practical experience in human rights advocacy, diplomacy, and legal research. Passionate about interdisciplinary learning and bridging theoretical knowledge with real-world legal practice.'
              : 'Oddaná právní profesionálka kombinující odbornost v právu a mezinárodních vztazích s praktickými zkušenostmi v oblasti lidských práv, diplomacie a právního výzkumu. Zaměřena na interdisciplinární učení a propojování teoretických znalostí s právní praxí.'
            }
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-navy-900 flex items-center">
            <GraduationCap className="w-10 h-10 mr-4 text-gold-600" />
            {t.about.education}
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card border-l-4 border-gold-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold text-navy-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gold-600 font-medium mb-2">{edu.field}</p>
                    <p className="text-navy-700 mb-1">{edu.institution}</p>
                    <p className="text-sm text-navy-500 mb-2">{edu.location}</p>
                    {edu.thesis && (
                      <p className="text-sm text-navy-600 italic mt-3">{edu.thesis}</p>
                    )}
                  </div>
                  <div className="bg-navy-800 text-white px-4 py-2 rounded-lg text-center whitespace-nowrap">
                    <span className="font-semibold">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-4 text-navy-900 text-center">
            {t.about.interests}
          </h2>
          <p className="text-center text-navy-600 mb-12 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'Specialized fields of study and professional focus areas'
              : 'Specializované oblasti studia a profesního zaměření'
            }
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-600">
                    {interest.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-navy-900 mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-navy-600 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-6 text-gold-400">
              {locale === 'en' ? 'Professional Philosophy' : 'Profesní filozofie'}
            </h2>
            <div className="space-y-4 text-lg text-navy-100 leading-relaxed">
              <p>
                {locale === 'en'
                  ? 'My interdisciplinary approach combines legal theory with international relations analysis, providing a comprehensive understanding of how law operates within complex geopolitical contexts. This dual perspective allows me to examine not only legal frameworks but also the strategic and cultural factors that shape their application.'
                  : 'Můj interdisciplinární přístup kombinuje právní teorii s analýzou mezinárodních vztahů a poskytuje komplexní pochopení toho, jak právo funguje v komplexních geopolitických kontextech. Tato dvojí perspektiva mi umožňuje zkoumat nejen právní rámce, ale také strategické a kulturní faktory, které formují jejich aplikaci.'
                }
              </p>
              <p>
                {locale === 'en'
                  ? 'Through hands-on experience at international law firms, human rights organizations, and academic institutions, I am dedicated to bridging the gap between theoretical knowledge and practical legal advocacy. My work focuses on promoting justice, strengthening democratic institutions, and advancing human rights protection across Central Europe and beyond.'
                  : 'Prostřednictvím praktických zkušeností v mezinárodních právních firmách, organizacích pro lidská práva a akademických institucích se věnuji překlenutí mezery mezi teoretickými znalostmi a praktickou právní advokacií. Má práce se zaměřuje na podporu spravedlnosti, posilování demokratických institucí a prosazování ochrany lidských práv ve střední Evropě a dále.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

