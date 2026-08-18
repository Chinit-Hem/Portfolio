import { ResumeActions } from '@/components/ResumeActions';
import { profile } from '@/data/profile';
import resume from '@/data/resume.json';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional resume of Hem Chinit, IT Executive and Full-Stack Developer.',
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-emerald-800 pb-1.5 text-sm font-bold uppercase text-emerald-900 dark:border-emerald-400 dark:text-emerald-300">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="resume-page bg-[#eef3ef] py-10 dark:bg-[#101714] md:py-16">
      <div className="container-custom">
        <div className="resume-actions mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-eyebrow">Professional CV</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Review online, download the PDF, or print a copy.
            </p>
          </div>
          <ResumeActions />
        </div>

        <article className="resume-sheet mx-auto max-w-[210mm] border border-[#d9e2dc] bg-white px-7 py-8 text-slate-800 shadow-sm dark:border-[#2b3c33] dark:bg-[#15201b] dark:text-slate-200 sm:px-10 sm:py-10">
          <header className="flex items-start justify-between gap-5 border-b-2 border-emerald-800 pb-5 dark:border-emerald-400">
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">{resume.name}</h1>
              <p className="mt-2 text-base font-semibold text-emerald-800 dark:text-emerald-300">{resume.title}</p>
              <div className="resume-contact mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
                <span>{resume.location}</span>
                <a href={`mailto:${resume.email}`} className="hover:text-emerald-800">{resume.email}</a>
                <a href={`tel:${resume.phone.replace(/\s/g, '')}`} className="hover:text-emerald-800">{resume.phone}</a>
                <span>Telegram: {resume.telegram}</span>
                <a href={`https://${resume.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-emerald-800">{resume.linkedin}</a>
                <a href={`https://${resume.github}`} target="_blank" rel="noreferrer" className="hover:text-emerald-800">{resume.github}</a>
              </div>
            </div>
            <Image
              src={profile.profileImage}
              alt={`${resume.name} profile photo`}
              width={112}
              height={136}
              priority
              className="resume-photo h-[112px] w-[92px] shrink-0 rounded border border-[#d9e2dc] object-cover object-top sm:h-[136px] sm:w-[112px]"
            />
          </header>

          <div className="mt-6 space-y-6">
            <section>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-3 text-sm leading-6">{resume.summary}</p>
            </section>

            <section>
              <SectionTitle>Professional Experience</SectionTitle>
              <div className="mt-3 space-y-4">
                {resume.experience.map((item) => (
                  <div key={`${item.title}-${item.company}`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.company}</p>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">{item.period}</p>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm leading-5">
                      {item.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>Selected Systems</SectionTitle>
              <div className="mt-3 space-y-3">
                {resume.projects.map((project) => (
                  <div key={project.name}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-sm font-bold text-slate-950 dark:text-white">{project.name}</h3>
                      <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300">{project.technology}</p>
                    </div>
                    <p className="mt-1 text-sm leading-5">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>Education</SectionTitle>
              <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white">{resume.education.school}</h3>
                  <p className="text-sm">{resume.education.degree} | GPA: {resume.education.gpa}</p>
                  <ul className="mt-2 space-y-1 text-sm leading-5">
                    {resume.education.highlights.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">{resume.education.period}</p>
              </div>
            </section>

            <section>
              <SectionTitle>Skills</SectionTitle>
              <dl className="mt-3 space-y-1.5 text-sm leading-5">
                {resume.skills.map((group) => (
                  <div key={group.label} className="grid grid-cols-1 gap-0.5 sm:grid-cols-[130px_1fr]">
                    <dt className="font-bold text-slate-950 dark:text-white">{group.label}</dt>
                    <dd>{group.items}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
