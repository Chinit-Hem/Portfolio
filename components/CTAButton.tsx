'use client';

import { useLanguage } from '@/app/language-provider';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
}

export function CTAButton({
  text,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
}: CTAButtonProps) {
  const { t } = useLanguage();
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg smooth-transition';

  const variantClasses = {
    primary:
      'bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm dark:bg-emerald-400 dark:hover:bg-emerald-300 dark:text-[#101714]',
    secondary:
      'bg-white hover:bg-emerald-50 text-slate-950 border border-[#d9e2dc] dark:bg-[#15201b] dark:hover:bg-[#1b2922] dark:text-white dark:border-[#2b3c33]',
    ghost:
      'text-slate-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-[#1b2922]',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {t(text)}
      {icon && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
