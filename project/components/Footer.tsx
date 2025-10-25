'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Locale, getTranslations } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);

  return (
    <footer style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #E5E5E5' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--brand)' }}>
              {t.footer.company}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text)' }}
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text)' }}
                >
                  {t.footer.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/careers`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text)' }}
                >
                  {t.footer.careers}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--brand)' }}>
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} style={{ color: 'var(--brand)' }} />
                <span className="text-sm" style={{ color: 'var(--text)' }}>
                  +32 9 XXX XX XX
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} style={{ color: 'var(--brand)' }} />
                <a
                  href="mailto:info@renovapro.be"
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text)' }}
                >
                  info@renovapro.be
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} style={{ color: 'var(--brand)', marginTop: '2px' }} />
                <span className="text-sm" style={{ color: 'var(--text)' }}>
                  {t.footer.location}
                  <br />
                  België, Gent
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--brand)' }}>
              {t.footer.legal}
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text)' }}
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text)' }}
                >
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
            <div className="flex gap-2">
              {['NL', 'FR', 'EN'].map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang.toLowerCase()}`}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    locale === lang.toLowerCase()
                      ? 'bg-[var(--brand)] text-white'
                      : 'border border-[var(--brand)] text-[var(--brand)]'
                  }`}
                >
                  {lang}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm" style={{ color: 'var(--text)', opacity: 0.7 }}>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
