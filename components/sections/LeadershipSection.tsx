import { leadershipAreas } from '@/data/skills';
import { LocalizedText } from '@/components/LocalizedText';
import { Target } from 'lucide-react';

export function LeadershipSection() {
  return (
    <section className="section-spacing bg-[#eef3ef] dark:bg-[#15201b]">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-eyebrow"><LocalizedText text="ITPM Journey" /></p>
            <h2 className="mt-3 heading-lg text-slate-950 dark:text-white">
              <LocalizedText text="Building Toward Technical Project Leadership" />
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              <LocalizedText text="My goal is not only to build software, but to learn how to lead teams that deliver reliable technology solutions." />
            </p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              <LocalizedText text="I am still growing in this direction, so I focus on practical habits: clear requirements, documentation, communication, testing, and realistic delivery planning." />
            </p>
          </div>

          <div className="panel p-6">
            <div className="mb-5 flex items-center gap-3">
              <Target className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text="Development Areas" /></h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {leadershipAreas.map((area) => (
                <div key={area} className="rounded-lg border border-[#d9e2dc] bg-[#eef3ef] px-4 py-3 text-sm font-medium text-slate-700 dark:border-[#2b3c33] dark:bg-[#101714] dark:text-slate-300">
                  <LocalizedText text={area} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
