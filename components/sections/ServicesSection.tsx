import { CTAButton } from '@/components/CTAButton';
import { ServiceCard } from '@/components/ServiceCard';
import { LocalizedText } from '@/components/LocalizedText';
import { services } from '@/data/services';
import { BarChart3, Code2, Headphones, LayoutTemplate, ListChecks } from 'lucide-react';

const serviceIcons = [LayoutTemplate, Code2, BarChart3, Headphones, ListChecks];

export function ServicesSection() {
  return (
    <section id="services" className="section-spacing bg-white dark:bg-[#101714]">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="section-eyebrow"><LocalizedText text="Services" /></p>
            <h2 className="mt-3 heading-lg text-slate-950 dark:text-white">
              <LocalizedText text="Client-focused help for websites, systems, dashboards, and IT support." />
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              <LocalizedText text="I start with the business problem first, then define whether the right solution is a website, dashboard, internal system, or technical support." />
            </p>
          </div>
          <CTAButton text="Explore Services" href="/services" variant="secondary" icon />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
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
  );
}
