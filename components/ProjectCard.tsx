'use client';

import type { Project } from '@/types/portfolio';
import { useLanguage } from '@/app/language-provider';
import { ArrowRight, ExternalLink, Github, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ProjectCardProps = {
  project: Project;
  imageAvailable: boolean;
};

export function ProjectCard({ project, imageAvailable }: ProjectCardProps) {
  const { t } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group panel overflow-hidden smooth-transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {imageAvailable && !imageFailed && (
          <Image
            src={project.image}
            alt={`${project.name} dashboard screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover smooth-transition group-hover:scale-[1.03]"
            onError={() => setImageFailed(true)}
          />
        )}
        {(!imageAvailable || imageFailed) && (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(23,107,77,0.18),transparent_36%),linear-gradient(135deg,#f7f9f7,#dfe9e2)] p-6 dark:bg-[radial-gradient(circle_at_top_left,rgba(79,187,138,0.18),transparent_36%),linear-gradient(135deg,#101714,#1b2922)]">
            <div className="w-full rounded-lg border border-[#cbd8d0] bg-white/80 p-4 shadow-sm backdrop-blur dark:border-[#2b3c33] dark:bg-[#15201b]/80">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <LayoutDashboard className="h-4 w-4 text-slate-400" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 h-20 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-20 rounded bg-emerald-100 dark:bg-emerald-950" />
                <div className="h-8 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-8 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-8 rounded bg-amber-100 dark:bg-amber-950" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
          {t(project.category)}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
          {t(project.name)}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {t(project.businessProblem)}
        </p>

        <dl className="mt-5 grid grid-cols-1 gap-3 text-sm">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">{t('My role')}</dt>
            <dd className="mt-1 text-slate-600 dark:text-slate-400">{t(project.role)}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">{t('Business value')}</dt>
            <dd className="mt-1 text-slate-600 dark:text-slate-400">{t(project.businessValue)}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 dark:bg-emerald-400 dark:text-[#101714] dark:hover:bg-emerald-300"
          >
            {t('View Case Study')}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {project.liveDemo && project.liveDemo !== '#' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 p-2.5 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={`Open ${project.name} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 p-2.5 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={`Open ${project.name} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
