'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function Experience() {
  const { locale } = useLocale();
  const t = translations[locale];

  const experiences = [
    {
      company: 'ROWAN LEGAL',
      position: locale === 'en' ? 'Paralegal' : 'Paralegal',
      location: 'Brno, Czech Republic',
      period: locale === 'en' ? 'Jun 2025 - Present' : 'Čer 2025 - Současnost',
      description: locale === 'en'
        ? 'Supporting legal teams in commercial and corporate law matters. Providing comprehensive assistance in contract drafting, due diligence processes, and client communications within a dynamic legal environment.'
        : 'Podpora právních týmů v obchodním a korporátním právu. Poskytování komplexní asistence při tvorbě smluv, procesech due diligence a komunikaci s klienty v dynamickém právním prostředí.',
      responsibilities: locale === 'en'
        ? [
            'Drafting and reviewing commercial contracts and legal documents',
            'Preparing detailed due diligence reports for corporate transactions',
            'Assisting in client consultations and legal correspondence',
            'Conducting legal research on Czech and international commercial law',
          ]
        : [
            'Tvorba a revize obchodních smluv a právních dokumentů',
            'Příprava detailních due diligence zpráv pro korporátní transakce',
            'Asistence při konzultacích s klienty a právní korespondenci',
            'Provádění právního výzkumu v oblasti českého a mezinárodního obchodního práva',
          ],
    },
    {
      company: 'DLA Piper',
      position: locale === 'en' ? 'Paralegal' : 'Paralegal',
      location: 'Prague, Czech Republic',
      period: locale === 'en' ? 'Aug 2024 - Apr 2025' : 'Srp 2024 - Dub 2025',
      description: locale === 'en'
        ? 'Collaborated on international legal cases at one of the world\'s largest law firms. Gained extensive experience in business law, compliance, and cross-border legal matters.'
        : 'Spolupráce na mezinárodních právních případech v jedné z největších právních firem na světě. Získání rozsáhlých zkušeností v obchodním právu, compliance a přeshraničních právních záležitostech.',
      responsibilities: locale === 'en'
        ? [
            'Legal research and analysis on international business law matters',
            'Document review and preparation for cross-border transactions',
            'Supporting compliance and regulatory matters',
            'Assisting senior attorneys with case preparation and client deliverables',
          ]
        : [
            'Právní výzkum a analýza v oblasti mezinárodního obchodního práva',
            'Revize dokumentů a příprava pro přeshraniční transakce',
            'Podpora v oblasti compliance a regulatorních záležitostí',
            'Asistence seniorním právníkům při přípravě případů a výstupů pro klienty',
          ],
    },
    {
      company: locale === 'en' ? 'Student Section of the International Institute of Political Science (IIPS)' : 'Studentská sekce Mezinárodního ústavu politických věd (IIPS)',
      position: locale === 'en' ? 'Legal Assistant' : 'Právní asistentka',
      location: 'Brno, Czech Republic',
      period: locale === 'en' ? 'Sep 2024 - May 2025' : 'Zář 2024 - Kvě 2025',
      description: locale === 'en'
        ? 'Focused on legal research and administrative support for the student section. Contributed to internal operations and legal documentation processes.'
        : 'Zaměření na právní výzkum a administrativní podporu pro studentskou sekci. Příspěvek k vnitřním operacím a procesům právní dokumentace.',
      responsibilities: locale === 'en'
        ? [
            'Conducting legal research for student initiatives and projects',
            'Providing administrative support for internal operations',
            'Assisting with legal documentation and compliance matters',
            'Supporting organizational governance and policy development',
          ]
        : [
            'Provádění právního výzkumu pro studentské iniciativy a projekty',
            'Poskytování administrativní podpory pro vnitřní operace',
            'Asistence s právní dokumentací a compliance záležitostmi',
            'Podpora organizačního řízení a vývoje politik',
          ],
    },
    {
      company: locale === 'en' ? 'Student Section of IIPS' : 'Studentská sekce IIPS',
      position: locale === 'en' ? 'HR Assistant' : 'HR asistentka',
      location: 'Brno, Czech Republic',
      period: locale === 'en' ? 'Sep 2023 - Jun 2024' : 'Zář 2023 - Čer 2024',
      description: locale === 'en'
        ? 'Organized recruitment and onboarding processes for new student members. Coordinated student events and supported team-building initiatives within the organization.'
        : 'Organizace náborových a adaptačních procesů pro nové studentské členy. Koordinace studentských akcí a podpora týmových iniciativ v rámci organizace.',
      responsibilities: locale === 'en'
        ? [
            'Managing recruitment and onboarding for student members',
            'Coordinating student events and organizational activities',
            'Supporting team-building and member engagement initiatives',
            'Maintaining HR documentation and member records',
          ]
        : [
            'Řízení náboru a adaptace studentských členů',
            'Koordinace studentských akcí a organizačních aktivit',
            'Podpora týmových a členských angažovaných iniciativ',
            'Vedení HR dokumentace a záznamů členů',
          ],
    },
    {
      company: locale === 'en' ? 'Institute of International Relations, Prague' : 'Ústav mezinárodních vztahů, Praha',
      position: locale === 'en' ? 'Research & Event Assistant' : 'Výzkumná a eventová asistentka',
      location: 'Prague, Czech Republic',
      period: '2022 - 2023',
      description: locale === 'en'
        ? 'Assisted with academic events, research support, and publications related to European security policy and international relations. Contributed to research projects on strategic culture and regional security dynamics.'
        : 'Asistence s akademickými akcemi, výzkumnou podporou a publikacemi souvisejícími s evropskou bezpečnostní politikou a mezinárodními vztahy. Příspěvek k výzkumným projektům o strategické kultuře a regionální bezpečnostní dynamice.',
      responsibilities: locale === 'en'
        ? [
            'Supporting academic events and conferences on international relations',
            'Assisting with research on European integration and security policy',
            'Contributing to publications on strategic culture and regional dynamics',
            'Coordinating logistics for international academic collaborations',
          ]
        : [
            'Podpora akademických akcí a konferencí o mezinárodních vztazích',
            'Asistence s výzkumem evropské integrace a bezpečnostní politiky',
            'Příspěvky k publikacím o strategické kultuře a regionální dynamice',
            'Koordinace logistiky pro mezinárodní akademickou spolupráci',
          ],
    },
    {
      company: locale === 'en' ? 'Slovak National Centre for Human Rights' : 'Slovenské národné stredisko pre ľudské práva',
      position: locale === 'en' ? 'Administrative Assistant' : 'Administrativní asistentka',
      location: 'Bratislava, Slovakia',
      period: locale === 'en' ? 'Jul 2023 - Oct 2023' : 'Čer 2023 - Říj 2023',
      description: locale === 'en'
        ? 'Contributed to human rights education initiatives and provided administrative support. Assisted in developing educational materials and supporting civic rights programs.'
        : 'Příspěvek k iniciativám vzdělávání v oblasti lidských práv a poskytování administrativní podpory. Asistence při vývoji vzdělávacích materiálů a podpoře programů občanských práv.',
      responsibilities: locale === 'en'
        ? [
            'Supporting human rights education programs and initiatives',
            'Providing administrative assistance for organizational operations',
            'Assisting in the development of educational materials',
            'Contributing to civic rights awareness and advocacy efforts',
          ]
        : [
            'Podpora programů a iniciativ vzdělávání v oblasti lidských práv',
            'Poskytování administrativní asistence pro organizační operace',
            'Asistence při vývoji vzdělávacích materiálů',
            'Příspěvek k povědomí a advokacii občanských práv',
          ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{t.experience.title}</h1>
          <p className="text-xl text-navy-200 max-w-3xl leading-relaxed">
            {locale === 'en'
              ? 'A comprehensive overview of my professional journey through leading legal institutions, human rights organizations, and research centers across Central Europe.'
              : 'Komplexní přehled mé profesní cesty přes přední právní instituce, organizace pro lidská práva a výzkumná centra ve střední Evropě.'
            }
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold-300"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="card hover:shadow-2xl transition-all">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-gold-600 font-semibold mb-3">{exp.company}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-navy-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-navy-700 mb-4 leading-relaxed">{exp.description}</p>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-3">
                          {locale === 'en' ? 'Key Responsibilities:' : 'Hlavní zodpovědnosti:'}
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-navy-600">
                              <span className="text-gold-600 mr-2 mt-1">▸</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-navy-900 text-center">
            {locale === 'en' ? 'Professional Skills' : 'Profesní dovednosti'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-serif font-semibold text-navy-900 mb-4">
                {locale === 'en' ? 'Legal Expertise' : 'Právní odbornost'}
              </h3>
              <ul className="space-y-2 text-navy-600">
                <li>• {locale === 'en' ? 'Legal Administration' : 'Právní administrativa'}</li>
                <li>• {locale === 'en' ? 'Legal Research' : 'Právní výzkum'}</li>
                <li>• {locale === 'en' ? 'Business Law' : 'Obchodní právo'}</li>
                <li>• {locale === 'en' ? 'Corporate Law' : 'Korporátní právo'}</li>
                <li>• {locale === 'en' ? 'Legal English (TOLES Higher)' : 'Právní angličtina (TOLES Higher)'}</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-serif font-semibold text-navy-900 mb-4">
                {locale === 'en' ? 'Specialized Areas' : 'Specializované oblasti'}
              </h3>
              <ul className="space-y-2 text-navy-600">
                <li>• {locale === 'en' ? 'Human Rights' : 'Lidská práva'}</li>
                <li>• {locale === 'en' ? 'International Relations' : 'Mezinárodní vztahy'}</li>
                <li>• {locale === 'en' ? 'Strategic Culture' : 'Strategická kultura'}</li>
                <li>• {locale === 'en' ? 'Education & Tutoring' : 'Vzdělávání a tutoring'}</li>
                <li>• {locale === 'en' ? 'Project Planning' : 'Projektové plánování'}</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-serif font-semibold text-navy-900 mb-4">
                {locale === 'en' ? 'Languages & Tools' : 'Jazyky a nástroje'}
              </h3>
              <ul className="space-y-2 text-navy-600">
                <li>• {locale === 'en' ? 'Czech (Native)' : 'Čeština (rodilý mluvčí)'}</li>
                <li>• {locale === 'en' ? 'Slovak (Native)' : 'Slovenština (rodilý mluvčí)'}</li>
                <li>• {locale === 'en' ? 'English (Professional)' : 'Angličtina (profesionální)'}</li>
                <li>• {locale === 'en' ? 'Codexis (Legal Database)' : 'Codexis (právní databáze)'}</li>
                <li>• {locale === 'en' ? 'Campaign Building' : 'Budování kampaní'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
