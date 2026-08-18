import { developmentProcess } from '@/data/process';
import { LocalizedText } from '@/components/LocalizedText';

export function ProcessSection() {
  return (
    <section id="process" className="section-spacing bg-white dark:bg-[#101714]">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="section-eyebrow"><LocalizedText text="Development Process" /></p>
          <h2 className="mt-3 heading-lg text-slate-950 dark:text-white">
            <LocalizedText text="A clear delivery flow that helps clients trust the work." />
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            <LocalizedText text="Good software starts with understanding the problem, then moves through requirements, design, development, testing, and support." />
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {developmentProcess.map((step) => (
            <article key={step.number} className="panel p-5">
              <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">{step.number}</p>
              <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text={step.title} /></h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <LocalizedText text={step.description} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
