import { skillGroups } from '@/data/skills';
import { LocalizedText } from '@/components/LocalizedText';

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing bg-[#eef3ef] dark:bg-[#15201b]">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="section-eyebrow"><LocalizedText text="Skills" /></p>
          <h2 className="mt-3 heading-lg text-slate-950 dark:text-white">
            <LocalizedText text="Technical, operational, and project coordination capability." />
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            <LocalizedText text="No fake percentage bars. These are practical competency groups connected to the work I do." />
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="panel p-6">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text={group.title} /></h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    <LocalizedText text={skill} />
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
