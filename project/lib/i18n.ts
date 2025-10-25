import nlTranslations from '@/i18n/nl.json';
import frTranslations from '@/i18n/fr.json';
import enTranslations from '@/i18n/en.json';

export const locales = ['nl', 'fr', 'en'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'nl';

export const translations = {
  nl: nlTranslations,
  fr: frTranslations,
  en: enTranslations,
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
