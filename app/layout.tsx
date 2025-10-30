import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCV from '@/components/StickyCV';
import { LocaleProvider } from '@/lib/locale-context';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'Martina Paliariková | Law Student & International Relations Expert | Masaryk University',
  description: 'Martina Paliariková - Law student at Masaryk University with Master\'s in International Relations. Experience at ROWAN LEGAL, DLA Piper. Specializing in international law, European integration, human rights, and strategic culture.',
  keywords: ['law student Brno', 'international law', 'legal research', 'European law', 'Masaryk University', 'human rights', 'strategic culture', 'legal English', 'DLA Piper', 'ROWAN LEGAL', 'Martina Paliariková', 'legal professional', 'European integration'],
  authors: [{ name: 'Martina Paliariková' }],
  openGraph: {
    title: 'Martina Paliariková | International Law & European Integration',
    description: 'Law student and international relations expert specializing in international law, human rights, and strategic culture',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'cs_CZ',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <LocaleProvider>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <StickyCV />
        </LocaleProvider>
      </body>
    </html>
  );
}
