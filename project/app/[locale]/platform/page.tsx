'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FolderKanban, Users, UserCircle, BarChart3 } from 'lucide-react';
import { Locale, getTranslations } from '@/lib/i18n';

interface PageProps {
  params: { locale: Locale };
}

export default function PlatformPage({ params }: PageProps) {
  const t = getTranslations(params.locale);
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: t.platform.tabProjects, icon: FolderKanban },
    { id: 'team', label: t.platform.tabTeam, icon: Users },
    { id: 'clients', label: t.platform.tabClients, icon: UserCircle },
    { id: 'reports', label: t.platform.tabReports, icon: BarChart3 },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="mb-3" style={{ color: 'var(--brand)' }}>
            {t.platform.title}
          </h1>
          <p className="text-lg mb-8" style={{ color: 'var(--text)', opacity: 0.8 }}>
            {t.platform.subtitle}
          </p>

          <div
            className="card mb-6"
            style={{ padding: '0', overflow: 'hidden', borderBottom: '2px solid #E5E5E5' }}
          >
            <div className="flex flex-wrap gap-2 p-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-[var(--brand)] text-white'
                        : 'bg-transparent text-[var(--text)] hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="card">
            <div className="text-center py-16">
              <div
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--background)' }}
              >
                {tabs.find((tab) => tab.id === activeTab)?.icon &&
                  (() => {
                    const Icon = tabs.find((tab) => tab.id === activeTab)!.icon;
                    return <Icon size={48} style={{ color: 'var(--brand)' }} />;
                  })()}
              </div>
              <h2 className="mb-4" style={{ color: 'var(--brand)' }}>
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </h2>
              <p style={{ color: 'var(--text)', opacity: 0.7 }}>{t.platform.placeholder}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
