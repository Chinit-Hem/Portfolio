import { ArrowRight, LucideIcon } from 'lucide-react';
import { LocalizedText } from '@/components/LocalizedText';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  icon?: LucideIcon;
  features?: string[];
  audience?: string[];
}

export function ServiceCard({
  title,
  description,
  price,
  icon: Icon,
  features = [],
  audience = [],
}: ServiceCardProps) {
  return (
    <article className="panel flex h-full flex-col p-6 smooth-transition hover:-translate-y-1 hover:shadow-lg">
      {Icon && (
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          <Icon className="h-5 w-5" />
        </div>
      )}

      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
        <LocalizedText text={title} />
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        <LocalizedText text={description} />
      </p>

      {audience.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {audience.map((item) => (
            <span key={item} className="tag">
              <LocalizedText text={item} />
            </span>
          ))}
        </div>
      )}

      {features.length > 0 && (
        <ul className="mt-5 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600 dark:bg-amber-300" />
              <span><LocalizedText text={feature} /></span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        {price && (
          <div className="mb-4 border-t border-[#d9e2dc] pt-4 dark:border-[#2b3c33]">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              <LocalizedText text="Starting price" />
            </p>
            <p className="mt-1 text-lg font-bold text-slate-950 dark:text-white"><LocalizedText text={price} /></p>
          </div>
        )}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 dark:text-emerald-300 dark:hover:text-emerald-200"
        >
          <LocalizedText text="Request Quote" />
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
