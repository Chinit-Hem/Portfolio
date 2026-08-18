import { stats } from '@/data/profile';
import { LocalizedText } from '@/components/LocalizedText';

export function StatsSection() {
  return (
    <section className="section-spacing bg-white dark:bg-[#101714]">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="panel p-6">
              <p className="text-3xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
              <h2 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
                <LocalizedText text={stat.label} />
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <LocalizedText text={stat.description} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
