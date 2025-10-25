'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Hammer, PaintBucket, Bath } from 'lucide-react';
import { Locale, getTranslations } from '@/lib/i18n';

interface PageProps {
  params: { locale: Locale };
}

export default function HomePage({ params }: PageProps) {
  const t = getTranslations(params.locale);

  return (
    <div>
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '80px',
          background: 'linear-gradient(135deg, #F5F5F5 0%, #E8F5E9 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1
                className="mb-6"
                style={{ color: 'var(--brand)', fontSize: '48px', lineHeight: '1.2' }}
              >
                {t.hero.title}
              </h1>
              <p className="mb-8 text-xl" style={{ color: 'var(--text)', opacity: 0.9 }}>
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${params.locale}/platform`}>
                  <button className="btn-primary flex items-center gap-2">
                    {t.hero.ctaPlatform}
                    <ArrowRight size={20} />
                  </button>
                </Link>
                <Link href={`/${params.locale}/contact`}>
                  <button className="btn-secondary">{t.hero.cta}</button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card h-48 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                <Hammer size={48} style={{ color: 'var(--brand)', marginBottom: '12px' }} />
                <p className="text-center font-medium">Tegelwerk</p>
              </div>
              <div className="card h-48 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                <PaintBucket
                  size={48}
                  style={{ color: 'var(--brand)', marginBottom: '12px' }}
                />
                <p className="text-center font-medium">Vloeren</p>
              </div>
              <div className="card h-48 flex flex-col items-center justify-center hover:shadow-lg transition-shadow col-span-2">
                <Bath size={48} style={{ color: 'var(--brand)', marginBottom: '12px' }} />
                <p className="text-center font-medium">Badkamerrenovaties</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6" style={{ color: 'var(--brand)' }}>
              Waarom RenoVapro?
            </h2>
            <p className="text-lg" style={{ color: 'var(--text)', opacity: 0.8 }}>
              Met jarenlange ervaring in de renovatiesector, bieden wij professionele diensten aan
              in Gent en omgeving. Van kleine reparaties tot volledige verbouwingen, uw project is
              bij ons in goede handen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Kwaliteit',
                desc: 'Hoogwaardige materialen en vakmanschap',
              },
              {
                title: 'Betrouwbaarheid',
                desc: 'Tijdige levering en duidelijke communicatie',
              },
              {
                title: 'Ervaring',
                desc: 'Jaren van expertise in renovatie',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="mb-3" style={{ color: 'var(--brand)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text)', opacity: 0.8 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
