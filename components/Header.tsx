'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, setLocale } = useLocale();

  const t = translations[locale];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.experience, href: '/experience' },
    { name: t.nav.research, href: '/research' },
    { name: t.nav.blog, href: '/blog' },
    { name: t.nav.awards, href: '/awards' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'cs' : 'en');
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-navy-900 hover:text-gold-600 transition-colors">
            Legal Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-navy-700 hover:text-gold-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-navy-50 hover:bg-navy-100 transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4 text-navy-700" />
              <span className="text-sm font-medium text-navy-700">
                {locale.toUpperCase()}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-navy-700 hover:text-gold-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-navy-700 hover:text-gold-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-navy-50 hover:bg-navy-100 transition-colors"
            >
              <Globe className="w-4 h-4 text-navy-700" />
              <span className="text-sm font-medium text-navy-700">
                {locale === 'en' ? 'Switch to Czech' : 'Přepnout na angličtinu'}
              </span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

