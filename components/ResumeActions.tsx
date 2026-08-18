'use client';

import { useLanguage } from '@/app/language-provider';
import { Download, Printer } from 'lucide-react';

export function ResumeActions() {
  const { t } = useLanguage();

  return (
    <div className="resume-actions flex flex-col gap-3 sm:flex-row">
      <a
        href="/resume.pdf"
        download="Hem-Chinit-Resume.pdf"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-800 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-900 dark:bg-emerald-400 dark:text-[#101714] dark:hover:bg-emerald-300"
      >
        <Download className="h-4 w-4" />
        {t('Download PDF')}
      </a>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d9e2dc] bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-emerald-50 dark:border-[#2b3c33] dark:bg-[#15201b] dark:text-white dark:hover:bg-[#1b2922]"
      >
        <Printer className="h-4 w-4" />
        {t('Print CV')}
      </button>
    </div>
  );
}
