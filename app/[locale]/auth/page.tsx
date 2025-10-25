'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { Locale, getTranslations } from '@/lib/i18n';

interface PageProps {
  params: { locale: Locale };
}

export default function AuthPage({ params }: PageProps) {
  const t = getTranslations(params.locale);

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        background: 'linear-gradient(135deg, #F5F5F5 0%, #E8F5E9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-md mx-auto"
        >
          <div className="card">
            <h1 className="mb-2 text-center" style={{ color: 'var(--brand)' }}>
              {t.auth.title}
            </h1>
            <p className="text-center mb-8" style={{ color: 'var(--text)', opacity: 0.8 }}>
              {t.auth.subtitle}
            </p>

            <div
              className="mb-6 p-4 rounded-lg flex items-start gap-3"
              style={{ backgroundColor: '#FFF4E5', border: '1px solid var(--pending)' }}
            >
              <AlertCircle size={20} style={{ color: 'var(--pending)', marginTop: '2px' }} />
              <p style={{ color: 'var(--text)', fontSize: '14px' }}>{t.auth.placeholder}</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  {t.auth.email}
                </label>
                <div className="relative">
                  <Mail
                    size={20}
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--brand)',
                    }}
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder={t.auth.email}
                    disabled
                    style={{
                      width: '100%',
                      padding: '12px 12px 12px 44px',
                      border: '2px solid #E5E5E5',
                      borderRadius: '12px',
                      fontSize: '16px',
                      backgroundColor: '#F9F9F9',
                      cursor: 'not-allowed',
                    }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  {t.auth.password}
                </label>
                <div className="relative">
                  <Lock
                    size={20}
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--brand)',
                    }}
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder={t.auth.password}
                    disabled
                    style={{
                      width: '100%',
                      padding: '12px 12px 12px 44px',
                      border: '2px solid #E5E5E5',
                      borderRadius: '12px',
                      fontSize: '16px',
                      backgroundColor: '#F9F9F9',
                      cursor: 'not-allowed',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full mb-4"
                disabled
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              >
                {t.auth.login}
              </button>

              <div className="text-center">
                <a
                  href="#"
                  style={{
                    color: 'var(--brand)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    opacity: 0.5,
                    pointerEvents: 'none',
                  }}
                >
                  {t.auth.forgotPassword}
                </a>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <Link href={`/${params.locale}`}>
                <button className="btn-secondary">{t.nav.home}</button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
