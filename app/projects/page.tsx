import { ProjectCard } from '@/components/ProjectCard';
import { LocalizedText } from '@/components/LocalizedText';
import { projects } from '@/data/projects';
import { hasProjectImage } from '@/lib/project-image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'Enterprise systems and case studies by Hem Chinit, including VMS, LMS, SMS, Loan Management, and a Unified Enterprise System Hub.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-[#d9e2dc] bg-[#eef3ef] py-14 dark:border-[#2b3c33] dark:bg-[#101714] md:py-20">
        <div className="container-custom">
          <p className="section-eyebrow"><LocalizedText text="Projects" /></p>
          <h1 className="mt-3 heading-xl max-w-4xl text-slate-950 dark:text-white">
            <LocalizedText text="Case studies for practical enterprise systems." />
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            <LocalizedText text="These projects focus on business workflows, operational visibility, structured records, user access, and realistic system lifecycle thinking." />
          </p>
        </div>
      </section>

      <section className="section-spacing bg-white dark:bg-[#101714]">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                imageAvailable={hasProjectImage(project.image)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
