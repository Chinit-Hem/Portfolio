import { experience } from '@/data/experience';
import { LocalizedText } from '@/components/LocalizedText';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing bg-white dark:bg-[#101714]">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="section-eyebrow"><LocalizedText text="Career Journey" /></p>
          <h2 className="mt-3 heading-lg text-slate-950 dark:text-white">
            <LocalizedText text="Practical experience across support, design, IT operations, and systems." />
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            <LocalizedText text="This timeline shows progression toward stronger technical delivery and project coordination." />
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <article key={item.title} className="grid grid-cols-1 gap-5 lg:grid-cols-[180px_1fr]">
              <div className="flex items-start gap-4 lg:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-800 text-sm font-bold text-white dark:bg-emerald-300 dark:text-[#101714]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 lg:mt-4">
                  <LocalizedText text={item.period} />
                </p>
              </div>
              <div className="panel p-6">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white"><LocalizedText text={item.title} /></h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400"><LocalizedText text={item.description} /></p>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950 dark:text-white"><LocalizedText text="Key responsibilities" /></h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>- <LocalizedText text={responsibility} /></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950 dark:text-white"><LocalizedText text="Skills gained" /></h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skillsGained.map((skill) => (
                        <span key={skill} className="tag">
                          <LocalizedText text={skill} />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950 dark:text-white"><LocalizedText text="Business impact" /></h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <LocalizedText text={item.businessImpact} />
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
