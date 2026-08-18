'use client';

import { profile } from '@/data/profile';
import { useLanguage } from '@/app/language-provider';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2b3c33] bg-[#123d2f] py-12 text-white dark:bg-[#0b110e] md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="relative mb-4 h-11 w-11 overflow-hidden rounded-lg border border-white/20 bg-[#d7d8d3]">
              <Image
                src={profile.profileImage}
                alt={`${profile.name} profile photo`}
                fill
                sizes="44px"
                className="object-cover object-[50%_18%]"
              />
            </div>
            <h2 className="text-lg font-semibold">{profile.name}</h2>
            <p className="mt-1 text-sm text-slate-300">
              {t(profile.positioning)}
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              {t('Designed and developed with a focus on practical business solutions.')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('Navigation')}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white smooth-transition">{t('Home')}</Link></li>
              <li><Link href="/projects" className="hover:text-white smooth-transition">{t('Projects')}</Link></li>
              <li><Link href="/services" className="hover:text-white smooth-transition">{t('Services')}</Link></li>
              <li><Link href="/contact" className="hover:text-white smooth-transition">{t('Contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('Connect')}</h3>
            <div className="flex space-x-4">
              <a
                href={profile.social.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white smooth-transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.social.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-400 hover:text-white smooth-transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © {currentYear} {profile.name}. {t('All rights reserved.')}
            </p>
            <div className="mt-4 flex space-x-6 text-sm text-slate-400 md:mt-0">
              <Link href="/projects" className="hover:text-white smooth-transition">{t('Case Studies')}</Link>
              <Link href="/services" className="hover:text-white smooth-transition">{t('Services')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
