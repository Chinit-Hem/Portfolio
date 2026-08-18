import { CTAButton } from '@/components/CTAButton';
import { LocalizedText } from '@/components/LocalizedText';
import { getProject, projects } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, Monitor } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ProjectDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.name,
    description: project.purpose,
    openGraph: {
      title: `${project.name} | Hem Chinit`,
      description: project.businessProblem,
    },
  };
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="panel p-6">
      <h2 className="text-xl font-semibold text-slate-950 dark:text-white"><LocalizedText text={title} /></h2>
      <div className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item}>- <LocalizedText text={item} /></li>
      ))}
    </ul>
  );
}

function ScreenshotPlaceholder({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-[#d9e2dc] bg-[#eef3ef] p-4 dark:border-[#2b3c33] dark:bg-[#15201b]">
      <div className="rounded-lg border border-[#cbd8d0] bg-white p-5 shadow-sm dark:border-[#2b3c33] dark:bg-[#101714]">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <Monitor className="h-5 w-5 text-slate-400" />
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-6 h-12 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="col-span-2 h-36 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="col-span-4 grid grid-cols-2 gap-3">
            <div className="rounded bg-emerald-100 dark:bg-emerald-950" />
            <div className="rounded bg-amber-100 dark:bg-amber-950" />
            <div className="rounded bg-slate-200 dark:bg-slate-800" />
            <div className="rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
        <p className="mt-5 text-sm font-medium text-slate-600 dark:text-slate-400">
          <LocalizedText text="Future screenshot placeholder:" /> {title}
        </p>
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="border-b border-[#d9e2dc] bg-[#eef3ef] dark:border-[#2b3c33] dark:bg-[#101714]">
        <div className="container-custom py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 dark:text-emerald-300 dark:hover:text-emerald-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <LocalizedText text="Back to Projects" />
          </Link>
        </div>
      </div>

      <section className="border-b border-[#d9e2dc] bg-white py-14 dark:border-[#2b3c33] dark:bg-[#101714] md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_0.7fr]">
            <div>
              <p className="section-eyebrow"><LocalizedText text={project.category} /></p>
              <h1 className="mt-3 heading-xl text-slate-950 dark:text-white"><LocalizedText text={project.name} /></h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                <LocalizedText text={project.purpose} />
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <aside className="panel p-6">
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-slate-950 dark:text-white"><LocalizedText text="Status" /></dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-400"><LocalizedText text={project.status} /></dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950 dark:text-white"><LocalizedText text="My role" /></dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-400"><LocalizedText text={project.role} /></dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950 dark:text-white"><LocalizedText text="Business value" /></dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-400"><LocalizedText text={project.businessValue} /></dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-2">
                {project.liveDemo && project.liveDemo !== '#' && (
                  <a href={project.liveDemo} className="btn-secondary inline-flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <LocalizedText text="Live Demo" />
                  </a>
                )}
                {project.github && project.github !== '#' && (
                  <a href={project.github} className="btn-secondary inline-flex items-center justify-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#eef3ef] dark:bg-[#15201b]">
        <div className="container-custom grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <CaseStudySection title="1. Overview">
              <p><LocalizedText text={project.caseStudy.overview} /></p>
            </CaseStudySection>
            <CaseStudySection title="2. Business Problem">
              <p><LocalizedText text={project.businessProblem} /></p>
            </CaseStudySection>
            <CaseStudySection title="3. Users">
              <List items={project.caseStudy.users} />
            </CaseStudySection>
            <CaseStudySection title="4. Requirements">
              <List items={project.caseStudy.requirements} />
            </CaseStudySection>
            <CaseStudySection title="5. My Responsibilities">
              <List items={project.caseStudy.responsibilities} />
            </CaseStudySection>
            <CaseStudySection title="6. Architecture">
              <List items={project.caseStudy.architecture} />
            </CaseStudySection>
            <CaseStudySection title="7. Technologies">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </CaseStudySection>
            <CaseStudySection title="8. Main Features">
              <List items={project.features} />
            </CaseStudySection>
            <CaseStudySection title="9. Workflow">
              <List items={project.caseStudy.workflow} />
            </CaseStudySection>
            <CaseStudySection title="10. Challenges">
              <List items={project.caseStudy.challenges} />
            </CaseStudySection>
            <CaseStudySection title="11. Solutions">
              <List items={project.caseStudy.solutions} />
            </CaseStudySection>
            <CaseStudySection title="12. Results">
              <List items={project.caseStudy.results} />
            </CaseStudySection>
            <CaseStudySection title="13. Lessons Learned">
              <List items={project.caseStudy.lessons} />
            </CaseStudySection>
            <CaseStudySection title="14. Screenshots">
              <ScreenshotPlaceholder title={project.name} />
            </CaseStudySection>
            <CaseStudySection title="15. Next Improvements">
              <List items={project.caseStudy.nextImprovements} />
            </CaseStudySection>
          </div>

          <aside className="h-fit lg:sticky lg:top-24">
            <div className="panel p-6">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text="Need a similar system?" /></h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <LocalizedText text="Start with the business problem. I can help turn the workflow into a practical system plan." />
              </p>
              <div className="mt-5">
                <CTAButton text="Discuss Your Project" href="/contact" icon />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
