import { CTAButton } from '@/components/CTAButton';
import { ProjectCard } from '@/components/ProjectCard';
import { LocalizedText } from '@/components/LocalizedText';
import { projects } from '@/data/projects';
import { hasProjectImage } from '@/lib/project-image';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing bg-[#eef3ef] dark:bg-[#15201b]">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="section-eyebrow"><LocalizedText text="Featured Projects" /></p>
            <h2 className="mt-3 heading-lg text-slate-950 dark:text-white">
              <LocalizedText text="Enterprise systems and real-world workflow thinking." />
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              <LocalizedText text="Each project is framed around the business problem, system role, technology, lifecycle, and operational value." />
            </p>
          </div>
          <CTAButton text="View All Projects" href="/projects" variant="secondary" icon />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              imageAvailable={hasProjectImage(project.image)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
