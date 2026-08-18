import { CTAButton } from '@/components/CTAButton';
import { LocalizedText } from '@/components/LocalizedText';
import { ResumeButton } from '@/components/ResumeButton';
import { profile } from '@/data/profile';
import { CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const techBadges = ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Vercel'];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-[#d9e2dc] bg-[#f7f9f7] dark:border-[#2b3c33] dark:bg-[#101714]">
      <div className="container-custom grid min-h-[calc(100vh-64px)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
            <CheckCircle2 className="h-4 w-4" />
            <LocalizedText text={profile.availability} />
          </div>
          <p className="mt-6 section-eyebrow">
            <LocalizedText text="IT Executive • Full-Stack Developer • Future ITPM" />
          </p>
          <h1 className="mt-4 heading-xl max-w-4xl text-slate-950 dark:text-white">
            <LocalizedText text={profile.headline} />
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            <LocalizedText text={profile.summary} />
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton text="View My Work" href="/projects" size="lg" icon />
            <CTAButton text="Start a Project" href="/contact" variant="secondary" size="lg" icon />
            <ResumeButton />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#d9e2dc] bg-white px-3 py-2 dark:border-[#2b3c33] dark:bg-[#15201b]">
              <MapPin className="h-4 w-4 text-amber-700 dark:text-amber-300" />
              <LocalizedText text={profile.country} />
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#d9e2dc] bg-white px-3 py-2 dark:border-[#2b3c33] dark:bg-[#15201b]">
              <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
              <LocalizedText text={profile.status} />
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <span key={badge} className="tag">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <figure className="mx-auto w-full max-w-md overflow-hidden rounded-lg border border-[#d9e2dc] bg-white shadow-sm dark:border-[#2b3c33] dark:bg-[#15201b]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#d7d8d3]">
            <Image
              src={profile.profileImage}
              alt={`${profile.name}, ${profile.positioning}`}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="flex items-center justify-between gap-4 border-t border-[#d9e2dc] px-5 py-4 dark:border-[#2b3c33]">
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">{profile.name}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400"><LocalizedText text={profile.positioning} /></p>
            </div>
            <span className="h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" aria-label="Available" />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
