'use client';

import { Award, Trophy, Medal, Star, Heart, Users } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function Awards() {
  const { locale } = useLocale();
  const t = translations[locale];

  const awards = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: locale === 'en' ? 'Ius Commune Moot Court 2024' : 'Ius Commune Moot Court 2024',
      category: locale === 'en' ? 'International Legal Competition' : 'Mezinárodní právnická soutěž',
      year: '2024',
      description: locale === 'en'
        ? 'Participated in a prestigious international legal competition at the University of Vienna, focused on European and comparative law. Engaged in complex legal argumentation and oral advocacy before expert panels.'
        : 'Účast v prestižní mezinárodní právnické soutěži na Univerzitě ve Vídni, zaměřené na evropské a srovnávací právo. Zapojení do komplexní právní argumentace a ústní advokace před odborníky.',
      achievement: locale === 'en' ? 'University of Vienna' : 'Univerzita Vídeň',
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: locale === 'en' ? 'The Hague Inter-University Law Debate Tournament 2024' : 'Haagský meziuniverzitní právnický debatní turnaj 2024',
      category: locale === 'en' ? 'International Law Debate' : 'Debata o mezinárodním právu',
      year: '2024',
      description: locale === 'en'
        ? 'Competed in an international legal debate tournament on European and international law issues. Demonstrated advanced critical thinking and argumentation skills in high-level academic debates.'
        : 'Soutěžení v mezinárodním právnickém debatním turnaji o otázkách evropského a mezinárodního práva. Prokázání pokročilého kritického myšlení a argumentačních dovedností v akademických debatách na vysoké úrovni.',
      achievement: locale === 'en' ? 'The Hague, Netherlands' : 'Haag, Nizozemsko',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: locale === 'en' ? 'Legal English Conference Presenter' : 'Prezentující na konferenci právní angličtiny',
      category: locale === 'en' ? 'Academic Presentation' : 'Akademická prezentace',
      year: '2024',
      description: locale === 'en'
        ? 'Delivered a presentation on international legal affairs at the Legal English Conference organized by the Faculty of Law, Masaryk University. Shared insights on the importance of legal English proficiency in modern legal practice.'
        : 'Přednesení prezentace o mezinárodních právních záležitostech na konferenci právní angličtiny organizované Právnickou fakultou Masarykovy univerzity. Sdílení poznatků o důležitosti znalosti právní angličtiny v moderní právní praxi.',
      achievement: locale === 'en' ? 'Faculty of Law MUNI' : 'Právnická fakulta MUNI',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: locale === 'en' ? 'Epistemic Injustice Program' : 'Program o epistemické nespravedlnosti',
      category: locale === 'en' ? 'International Research Semester' : 'Mezinárodní výzkumný semestr',
      year: '2023-2024',
      description: locale === 'en'
        ? 'Selected for an international research semester focused on epistemic injustice and legal epistemology. Engaged in interdisciplinary research examining how knowledge and credibility function within legal systems.'
        : 'Vybrána pro mezinárodní výzkumný semestr zaměřený na epistemickou nespravedlnost a právní epistemologii. Zapojení do interdisciplinárního výzkumu zkoumajícího, jak funguje znalost a důvěryhodnost v rámci právních systémů.',
      achievement: locale === 'en' ? 'Research Scholar' : 'Výzkumná stipendistka',
    },
  ];

  const certifications = [
    {
      name: locale === 'en' ? 'TOLES Higher Exam' : 'TOLES Higher Exam',
      issuer: locale === 'en' ? 'Cambridge Law Studio' : 'Cambridge Law Studio',
      year: '2024',
      description: locale === 'en' ? 'Advanced Legal English proficiency' : 'Pokročilá znalost právní angličtiny',
    },
    {
      name: locale === 'en' ? 'Certificate in Legal Information System Proficiency' : 'Certifikát znalosti právního informačního systému',
      issuer: 'Codexis',
      year: '2024',
      description: locale === 'en' ? 'Czech legal database expertise' : 'Expertíza v české právní databázi',
    },
    {
      name: locale === 'en' ? 'Protikorupčná akadémia' : 'Protikorupčná akadémia',
      issuer: locale === 'en' ? 'Anti-Corruption Academy (Slovakia)' : 'Protikorupční akademie (Slovensko)',
      year: '2023',
      description: locale === 'en' ? 'Skills in education, tutoring, and project planning' : 'Dovednosti ve vzdělávání, tutorovství a projektovém plánování',
    },
    {
      name: locale === 'en' ? 'Activist Network Certification' : 'Certifikace aktivistické sítě',
      issuer: locale === 'en' ? 'Rada mládeže Slovenska' : 'Rada mládeže Slovenska',
      year: '2023',
      description: locale === 'en' ? 'Campaign building and project management' : 'Budování kampaní a projektový management',
    },
  ];

  const volunteer = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: locale === 'en' ? 'Education Intern' : 'Vzděl ávací stážistka',
      organization: locale === 'en' ? 'Nadácia Zastavme korupciu (Slovakia)' : 'Nadácia Zastavme korupciu (Slovensko)',
      period: locale === 'en' ? 'Oct 2023 - Jan 2024' : 'Říj 2023 - Led 2024',
      description: locale === 'en'
        ? 'Designed educational materials on anti-corruption and civic rights for Slovak citizens. Contributed to public awareness campaigns promoting transparency and democratic values.'
        : 'Návrh vzdělávacích materiálů o protikorupci a občanských právech pro slovenské občany. Příspěvek ke kampaním veřejného povědomí podporujícím transparentnost a demokratické hodnoty.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: locale === 'en' ? 'Participant, Young Public Affairs Leaders Academy (YPALA)' : 'Účastnice, Akademie mladých vůdců veřejných záležitostí (YPALA)',
      organization: locale === 'en' ? 'Public Affairs Leadership Program' : 'Program vedení veřejných záležitostí',
      period: locale === 'en' ? 'May 2025 - Present' : 'Kvě 2025 - Současnost',
      description: locale === 'en'
        ? 'Engaged in leadership and policy training focused on public affairs, advocacy, and civic engagement. Developing skills in policy analysis and strategic communication.'
        : 'Zapojení do leadershipu a školení v oblasti politiky zaměřené na veřejné záležitosti, advokaci a občanské zapojení. Rozvoj dovedností v analýze politik a strategické komunikaci.',
    },
  ];

  const organizations = [
    {
      name: locale === 'en' ? 'Mladí Konzervativci' : 'Mladí Konzervativci',
      role: locale === 'en' ? 'Member' : 'Členka',
      period: locale === 'en' ? 'Since May 2025' : 'Od května 2025',
    },
    {
      name: locale === 'en' ? 'Občiansko-demokratická mládež' : 'Občiansko-demokratická mládež',
      role: locale === 'en' ? 'Member' : 'Členka',
      period: locale === 'en' ? 'Since Nov 2023' : 'Od listopadu 2023',
    },
    {
      name: 'ELSA Brno',
      role: locale === 'en' ? 'Member' : 'Členka',
      period: '2022 - 2025',
    },
    {
      name: locale === 'en' ? 'Student Section of IIPS' : 'Studentská sekce IIPS',
      role: locale === 'en' ? 'Member' : 'Členka',
      period: '2021 - 2025',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white section-padding">
        <div className="container-custom">
          <div className="flex items-center mb-6">
            <Trophy className="w-12 h-12 mr-4 text-gold-400" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold">{t.awards.title}</h1>
          </div>
          <p className="text-xl text-navy-200 max-w-3xl leading-relaxed">
            {locale === 'en' 
              ? 'Recognition for excellence in legal competitions, academic achievements, and contributions to human rights education and civic engagement.'
              : 'Uznání za excelenci v právních soutěžích, akademické úspěchy a příspěvky ke vzdělávání v oblasti lidských práv a občanského zapojení.'
            }
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-navy-900 text-center">
            {locale === 'en' ? 'Honors & Awards' : 'Pocty a ocenění'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    {award.icon}
                  </div>
                  <span className="px-3 py-1 bg-navy-800 text-white text-sm font-semibold rounded-full">
                    {award.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-gold-600 font-semibold text-sm mb-3">
                  {award.category}
                </p>
                <p className="text-navy-700 leading-relaxed mb-4">
                  {award.description}
                </p>

                {/* Achievement Badge */}
                <div className="pt-4 border-t border-navy-100">
                  <div className="flex items-center text-navy-900">
                    <Star className="w-4 h-4 text-gold-500 mr-2 fill-gold-500" />
                    <span className="font-semibold text-sm">{award.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-navy-900 text-center">
            {locale === 'en' ? 'Certifications & Training' : 'Certifikáty a školení'}
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-semibold text-navy-900 mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-navy-600 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-navy-500">{cert.description}</p>
                  </div>
                  <div className="md:ml-4">
                    <span className="px-4 py-2 bg-gold-500 text-navy-900 font-bold rounded-lg inline-block">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Work Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-navy-900 text-center">
            {locale === 'en' ? 'Volunteer & Civic Engagement' : 'Dobrovolnictví a občanské zapojení'}
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {volunteer.map((vol, index) => (
              <div key={index} className="card border-l-4 border-gold-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-600">
                    {vol.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold text-navy-900 mb-2">
                      {vol.title}
                    </h3>
                    <p className="text-gold-600 font-medium mb-2">{vol.organization}</p>
                    <p className="text-sm text-navy-500 mb-3">{vol.period}</p>
                    <p className="text-navy-700 leading-relaxed">
                      {vol.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-navy-900 text-center">
            {locale === 'en' ? 'Professional Organizations' : 'Profesní organizace'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {organizations.map((org, index) => (
              <div key={index} className="card bg-white hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-navy-900 mb-1">
                      {org.name}
                    </h3>
                    <p className="text-navy-600 text-sm">{org.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gold-600">{org.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gold-400 mb-2">4</div>
              <div className="text-navy-200">
                {locale === 'en' ? 'Major Awards' : 'Hlavní ocenění'}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold-400 mb-2">4</div>
              <div className="text-navy-200">
                {locale === 'en' ? 'Certifications' : 'Certifikáty'}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold-400 mb-2">4+</div>
              <div className="text-navy-200">
                {locale === 'en' ? 'Organizations' : 'Organizace'}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold-400 mb-2">2</div>
              <div className="text-navy-200">
                {locale === 'en' ? 'Volunteer Projects' : 'Dobrovolnické projekty'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
