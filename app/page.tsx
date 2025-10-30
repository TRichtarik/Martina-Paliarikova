'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Download, ChevronDown, BookOpen, Award, Briefcase, Mail } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function Home() {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white section-padding min-h-[90vh] flex items-center">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                  {locale === 'en' ? (
                    <>
                      Martina Paliariková
                    </>
                  ) : (
                    <>
                      Martina Paliariková
                    </>
                  )}
                </h1>
                <p className="text-xl text-navy-200 leading-relaxed">
                  {locale === 'en' 
                    ? 'Law Student at Masaryk University | Master\'s in International Relations | Specializing in International Law & European Integration'
                    : 'Studentka práva na Masarykově univerzitě | Magisterský titul v Mezinárodních vztazích | Specializace na mezinárodní právo a evropskou integraci'
                  }
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/cv.pdf" download className="btn-secondary">
                  <Download className="w-5 h-5 mr-2" />
                  {t.home.downloadCV}
                </a>
                <Link href="/about" className="btn-primary">
                  {t.home.learnMore}
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400">3+</div>
                  <div className="text-sm text-navy-200 mt-1">
                    {locale === 'en' ? 'Years Experience' : 'Roky zkušeností'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400">6</div>
                  <div className="text-sm text-navy-200 mt-1">
                    {locale === 'en' ? 'Organizations' : 'Organizace'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400">2+1</div>
                  <div className="text-sm text-navy-200 mt-1">
                    {locale === 'en' ? 'Degrees + In Progress' : 'Tituly + Probíhá'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Professional Photo Placeholder */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-navy-700 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Placeholder for professional photo */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-600 to-navy-800">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 bg-gold-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-5xl text-navy-900 font-serif font-bold">MP</span>
                      </div>
                      <p className="text-navy-300 text-sm">
                        Martina Paliariková
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold-400" />
        </div>
      </section>

      {/* Featured Sections */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-navy-900">
            {locale === 'en' ? 'Explore My Work' : 'Prozkoumejte mou práci'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Experience Card */}
            <Link href="/experience" className="card hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-navy-900">
                {t.nav.experience}
              </h3>
              <p className="text-navy-600 text-sm">
                {locale === 'en' 
                  ? 'Professional journey through leading legal institutions'
                  : 'Profesní cesta přes přední právní instituce'
                }
              </p>
            </Link>

            {/* Research Card */}
            <Link href="/research" className="card hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-navy-900">
                {t.nav.research}
              </h3>
              <p className="text-navy-600 text-sm">
                {locale === 'en'
                  ? 'Academic focus on international law and European integration'
                  : 'Akademické zaměření na mezinárodní právo a evropskou integraci'
                }
              </p>
            </Link>

            {/* Awards Card */}
            <Link href="/awards" className="card hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-navy-900">
                {t.nav.awards}
              </h3>
              <p className="text-navy-600 text-sm">
                {locale === 'en'
                  ? 'Recognition and achievements in legal competitions'
                  : 'Uznání a úspěchy v právních soutěžích'
                }
              </p>
            </Link>

            {/* Contact Card */}
            <Link href="/contact" className="card hover:scale-105 transition-transform bg-navy-800 text-white border-navy-800">
              <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-navy-900" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                {t.nav.contact}
              </h3>
              <p className="text-navy-200 text-sm">
                {locale === 'en'
                  ? 'Get in touch for collaboration opportunities'
                  : 'Spojte se pro možnosti spolupráce'
                }
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            {locale === 'en' ? "Let's Connect" : 'Spojme se'}
          </h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'Interested in collaboration, academic discussion, or professional opportunities? Feel free to reach out.'
              : 'Máte zájem o spolupráci, akademickou diskusi nebo profesní příležitosti? Neváhejte mě kontaktovat.'
            }
          </p>
          <Link href="/contact" className="btn-secondary">
            {t.contact.title}
          </Link>
        </div>
      </section>
    </div>
  );
}
