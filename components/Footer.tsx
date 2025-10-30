'use client';

import Link from 'next/link';
import { Linkedin, Mail, FileText } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function Footer() {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">Martina Paliariková</h3>
            <p className="text-navy-200 text-sm">
              {locale === 'en' 
                ? 'Law student and international relations expert specializing in international law, European integration, and human rights. Based in Brno, Czechia.'
                : 'Studentka práva a expertka na mezinárodní vztahy se specializací na mezinárodní právo, evropskou integraci a lidská práva. Sídlo v Brně, Česká republika.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold-400">
              {locale === 'en' ? 'Quick Links' : 'Rychlé odkazy'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-navy-200 hover:text-gold-400 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-navy-200 hover:text-gold-400 transition-colors">
                  {t.nav.experience}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-navy-200 hover:text-gold-400 transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-navy-200 hover:text-gold-400 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold-400">
              {locale === 'en' ? 'Connect' : 'Spojení'}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-navy-800 rounded-lg hover:bg-gold-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-navy-800 rounded-lg hover:bg-gold-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/cv.pdf"
                download
                className="p-3 bg-navy-800 rounded-lg hover:bg-gold-600 transition-colors"
                aria-label="Download CV"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-navy-300 text-sm">
          <p>© {new Date().getFullYear()} {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}

