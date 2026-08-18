'use client';

import { type Locale, translate } from '@/data/translations';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('portfolio-locale');
    if (savedLocale === 'en' || savedLocale === 'km' || savedLocale === 'zh') {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem('portfolio-locale', nextLocale);
  };

  useEffect(() => {
    document.documentElement.lang = locale === 'km' ? 'km' : locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t: (text: string) => translate(text, locale) }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
