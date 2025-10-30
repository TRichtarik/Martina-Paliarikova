'use client';

import { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, Phone, FileText } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { translations } from '@/lib/i18n';

export default function Contact() {
  const { locale } = useLocale();
  const t = translations[locale];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you would send this to an API endpoint
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{t.contact.title}</h1>
          <p className="text-xl text-navy-200 max-w-3xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                {locale === 'en' ? 'Send a Message' : 'Poslat zprávu'}
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    {locale === 'en' ? 'Message Sent!' : 'Zpráva odeslána!'}
                  </h3>
                  <p className="text-green-700">
                    {locale === 'en'
                      ? 'Thank you for reaching out. I will get back to you soon.'
                      : 'Děkuji za kontaktování. Brzy se vám ozvu.'
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-navy-900"
                      placeholder={locale === 'en' ? 'Your name' : 'Vaše jméno'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-navy-900"
                      placeholder={locale === 'en' ? 'your.email@example.com' : 'vas.email@priklad.cz'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-navy-900 resize-none"
                      placeholder={locale === 'en' ? 'Your message...' : 'Vaše zpráva...'}
                    />
                  </div>

                  <button type="submit" className="w-full btn-secondary">
                    <Send className="w-5 h-5 mr-2" />
                    {t.contact.send}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  {locale === 'en' ? 'Contact Information' : 'Kontaktní informace'}
                </h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">
                        {locale === 'en' ? 'Email' : 'E-mail'}
                      </h3>
                      <a
                        href="mailto:contact@example.com"
                        className="text-navy-600 hover:text-gold-600 transition-colors"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">
                        {locale === 'en' ? 'Location' : 'Lokace'}
                      </h3>
                      <p className="text-navy-600">
                        Brno, Czech Republic
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">LinkedIn</h3>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-600 hover:text-gold-600 transition-colors"
                      >
                        {t.contact.linkedIn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-6 text-gold-400">
                  {locale === 'en' ? 'Quick Actions' : 'Rychlé akce'}
                </h3>
                <div className="space-y-4">
                  <a
                    href="/cv.pdf"
                    download
                    className="flex items-center justify-between w-full bg-navy-700 hover:bg-gold-600 transition-colors rounded-lg p-4 group"
                  >
                    <span className="flex items-center">
                      <FileText className="w-5 h-5 mr-3" />
                      {t.home.downloadCV}
                    </span>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-navy-700 hover:bg-gold-600 transition-colors rounded-lg p-4 group"
                  >
                    <span className="flex items-center">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </span>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              {locale === 'en' ? 'Based in Brno, Czech Republic' : 'Se sídlem v Brně, Česká republika'}
            </h2>
            <p className="text-navy-600 mb-8">
              {locale === 'en'
                ? 'Available for consultations, collaborations, and academic discussions in person or remotely.'
                : 'K dispozici pro konzultace, spolupráci a akademické diskuse osobně nebo vzdáleně.'
              }
            </p>
            <div className="bg-navy-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-navy-500 mx-auto mb-4" />
                <p className="text-navy-700">
                  {locale === 'en' ? 'Map placeholder' : 'Zástupce mapy'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

