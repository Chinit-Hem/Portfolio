'use client';

import { useLanguage } from '@/app/language-provider';
import { FileText } from 'lucide-react';
import Link from 'next/link';

export function ResumeButton() {
  const { t } = useLanguage();

  return (
    <Link
      href="/resume"
      className="inline-flex items-center gap-2 rounded-lg border border-[#d9e2dc] bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-emerald-50 dark:border-[#2b3c33] dark:bg-[#15201b] dark:text-slate-100 dark:hover:bg-[#1b2922]"
    >
      <FileText className="h-4 w-4" />
      {t('View CV')}
    </Link>
  );
}
