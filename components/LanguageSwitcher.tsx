'use client';

import { useLanguage } from '@/app/language-provider';
import { localeOptions, type Locale } from '@/data/translations';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <label className="relative flex items-center" title="Language">
      <Languages className="pointer-events-none absolute left-2.5 h-4 w-4 text-slate-500 dark:text-slate-300" />
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="h-10 max-w-[104px] appearance-none rounded-lg border border-[#d9e2dc] bg-white py-2 pl-8 pr-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 dark:border-[#2b3c33] dark:bg-[#15201b] dark:text-slate-200 dark:hover:bg-[#1b2922]"
        aria-label="Select language"
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.shortLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
