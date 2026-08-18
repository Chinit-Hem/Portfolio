import { CTAButton } from '@/components/CTAButton';
import { ServiceCard } from '@/components/ServiceCard';
import { LocalizedText } from '@/components/LocalizedText';
import { developmentProcess } from '@/data/process';
import { services } from '@/data/services';
import type { Metadata } from 'next';
import { BarChart3, Code2, Headphones, LayoutTemplate, ListChecks } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Freelance services from Hem Chinit for websites, business web systems, dashboards, IT support, and system requirement analysis.',
};

const serviceIcons = [LayoutTemplate, Code2, BarChart3, Headphones, ListChecks];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[#d9e2dc] bg-[#eef3ef] py-14 dark:border-[#2b3c33] dark:bg-[#101714] md:py-20">
        <div className="container-custom">
          <p className="section-eyebrow"><LocalizedText text="Services" /></p>
          <h1 className="mt-3 heading-xl max-w-4xl text-slate-950 dark:text-white">
            <LocalizedText text="Practical technical services for business problems." />
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            <LocalizedText text="I help small businesses and teams plan, build, and support websites, dashboards, internal systems, and everyday IT workflows." />
          </p>
        </div>
      </section>

      <section className="section-spacing bg-white dark:bg-[#101714]">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.whatIProvide}
                audience={service.for}
                features={service.deliverables}
                price={service.price}
                icon={serviceIcons[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#eef3ef] dark:bg-[#15201b]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-eyebrow"><LocalizedText text="How Quotes Work" /></p>
            <h2 className="mt-3 heading-lg text-slate-950 dark:text-white">
              <LocalizedText text="Scope first, price second." />
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              <LocalizedText text="I do not hardcode unrealistic prices because websites, dashboards, and systems depend on scope, workflows, user roles, data, and support needs." />
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {developmentProcess.slice(0, 4).map((step) => (
              <article key={step.number} className="panel p-5">
                <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">{step.number}</p>
                <h3 className="mt-3 font-semibold text-slate-950 dark:text-white"><LocalizedText text={step.title} /></h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400"><LocalizedText text={step.description} /></p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <CTAButton text="Request a Quote" href="/contact" size="lg" icon />
          </div>
        </div>
      </section>
    </>
  );
}
