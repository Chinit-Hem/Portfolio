'use client';

import { useLanguage } from '@/app/language-provider';

export function LocalizedText({ text }: { text: string }) {
  const { t } = useLanguage();
  return <>{t(text)}</>;
}
