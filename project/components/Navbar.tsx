'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Hammer } from 'lucide-react';
import { Locale, getTranslations } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = getTranslations(locale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLocalizedPath = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
    return `/${newLocale}${pathWithoutLocale || ''}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ color: 'var(--brand)' }}>
              RenoVapro
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href={`/${locale}`}
              className="text-base hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text)' }}
            >
              {t.nav.home}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="text-base hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text)' }}
            >
              {t.nav.services}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-base hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text)' }}
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-base hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text)' }}
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              {['nl', 'fr', 'en'].map((lang) => (
                <Link
                  key={lang}
                  href={getLocalizedPath(lang)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                    locale === lang
                      ? 'bg-[var(--brand)] text-white'
                      : 'text-[var(--text)] hover:bg-gray-100'
                  }`}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>

            <Link href={`/${locale}/platform`} className="hidden md:block">
              <button className="btn-primary">{t.nav.platform}</button>
            </Link>

            <div className="absolute top-4 right-6">
              <Hammer size={32} style={{ color: 'var(--brand)' }} />
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <Link
                href={`/${locale}`}
                className="text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <div className="flex gap-2 mt-4">
                {['nl', 'fr', 'en'].map((lang) => (
                  <Link
                    key={lang}
                    href={getLocalizedPath(lang)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      locale === lang
                        ? 'bg-[var(--brand)] text-white'
                        : 'border border-[var(--brand)] text-[var(--brand)]'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </Link>
                ))}
              </div>
              <Link href={`/${locale}/platform`} onClick={() => setIsMobileMenuOpen(false)}>
                <button className="btn-primary w-full mt-4">{t.nav.platform}</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
