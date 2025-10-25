import '../globals.css';
import type { Metadata } from 'next';
import { locales, Locale } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'RenoVapro - Professionele Renovatie in Gent',
  description: 'RenoVapro - Specialist in tegelwerk, vloeren, badkamerrenovaties en meer',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale}>
      <body>
        <Navbar locale={params.locale} />
        <main>{children}</main>
        <Footer locale={params.locale} />
      </body>
    </html>
  );
}
