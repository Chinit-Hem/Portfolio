import { education } from '@/data/profile';
import { LocalizedText } from '@/components/LocalizedText';
import { howIWork } from '@/data/process';
import { CheckCircle2, GraduationCap } from 'lucide-react';

const workAreas = [
  'IT operations',
  'Technical support',
  'System development',
  'Business process digitalization',
  'Software planning',
  'Internal enterprise systems',
  'User support',
  'Project coordination',
];

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-[#eef3ef] dark:bg-[#15201b]">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-eyebrow"><LocalizedText text="About" /></p>
            <h2 className="mt-3 heading-lg text-slate-950 dark:text-white">
              <LocalizedText text="Bridging technology work with business requirements." />
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              <LocalizedText text="I work across IT operations, user support, internal system development, and business process digitalization. My strength is understanding daily business problems, translating them into practical requirements, and building systems that are clear enough for real users." />
            </p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              <LocalizedText text="I am developing toward stronger Software Engineering capability and IT Project Management, with a focus on reliable delivery, communication, documentation, and systems that help business teams work better." />
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className="panel p-6">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text="Where I Work" /></h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {workAreas.map((area) => (
                  <span key={area} className="tag">
                    <LocalizedText text={area} />
                  </span>
                ))}
              </div>
            </div>

            <div className="panel p-6">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text="How I Work" /></h3>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {howIWork.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-700 dark:text-emerald-300" />
                    <span><LocalizedText text={item} /></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text="Education" /></h3>
              </div>
              {education.map((item) => (
                <div key={item.school} className="mt-4">
                  <p className="font-semibold text-slate-900 dark:text-slate-100"><LocalizedText text={item.school} /></p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    <LocalizedText text={item.degree} /> | {item.period}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    <LocalizedText text={item.field} /> | GPA: {item.gpa}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
