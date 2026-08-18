'use client';

import { useTheme } from '@/app/theme-provider';
import { useLanguage } from '@/app/language-provider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ResumeButton } from '@/components/ResumeButton';
import { profile } from '@/data/profile';
import { Briefcase, Menu, Monitor, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#d9e2dc] bg-white/90 backdrop-blur-xl dark:border-[#2b3c33] dark:bg-[#101714]/90">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 flex-none overflow-hidden rounded-lg border border-emerald-800/20 bg-[#d7d8d3] dark:border-emerald-300/30">
              <Image
                src={profile.profileImage}
                alt={`${profile.name} profile photo`}
                fill
                sizes="40px"
                className="object-cover object-[50%_18%]"
              />
            </div>
            <div className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold text-slate-950 dark:text-white">
                {profile.name}
              </span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">
                {t('IT Executive')}
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium smooth-transition ${
                  pathname === item.href
                    ? 'bg-emerald-50 text-emerald-900 dark:bg-[#1b2922] dark:text-emerald-200'
                    : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-900 dark:text-slate-300 dark:hover:bg-[#1b2922] dark:hover:text-emerald-200'
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <div className="hidden xl:block">
              <ResumeButton />
            </div>
            <button
              onClick={cycleTheme}
              className="rounded-lg border border-[#d9e2dc] bg-white p-2 text-slate-700 hover:bg-emerald-50 dark:border-[#2b3c33] dark:bg-[#15201b] dark:text-slate-200 dark:hover:bg-[#1b2922]"
              aria-label={`Theme: ${theme}`}
              title={`Theme: ${theme}`}
            >
              {theme === 'system' ? (
                <Monitor className="h-5 w-5" />
              ) : resolvedTheme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900 dark:bg-emerald-400 dark:text-[#101714] dark:hover:bg-emerald-300 md:inline-flex"
            >
              <Briefcase className="h-4 w-4" />
              {t('Hire Me')}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg border border-[#d9e2dc] p-2 text-slate-700 hover:bg-emerald-50 dark:border-[#2b3c33] dark:text-slate-200 dark:hover:bg-[#1b2922] xl:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="space-y-2 border-t border-[#d9e2dc] py-4 dark:border-[#2b3c33] xl:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-[#1b2922]"
                onClick={() => setIsOpen(false)}
              >
                {t(item.label)}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <ResumeButton />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-800 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-900 dark:bg-emerald-400 dark:text-[#101714]"
                onClick={() => setIsOpen(false)}
              >
                <Briefcase className="h-4 w-4" />
                {t('Hire Me')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
