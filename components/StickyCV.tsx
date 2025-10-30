'use client';

import { Download } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function StickyCV() {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <a
        href="/cv.pdf"
        download
        className="flex items-center space-x-2 btn-secondary shadow-2xl animate-pulse hover:animate-none"
        aria-label="Download CV"
      >
        <Download className="w-5 h-5" />
        <span className="hidden sm:inline">{t.home.downloadCV}</span>
      </a>
    </div>
  );
}

