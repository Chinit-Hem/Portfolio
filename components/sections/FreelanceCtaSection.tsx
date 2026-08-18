import { CTAButton } from '@/components/CTAButton';
import { LocalizedText } from '@/components/LocalizedText';

export function FreelanceCtaSection() {
  return (
    <section className="section-spacing bg-[#123d2f] text-white dark:bg-[#0b110e]">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-300"><LocalizedText text="Freelance CTA" /></p>
          <h2 className="mt-3 heading-lg">
            <LocalizedText text="Have a Business Problem That Software Could Solve?" />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            <LocalizedText text="Tell me the problem first. We can determine whether you need a website, dashboard, internal system, or a simpler technical solution." />
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton text="Discuss Your Project" href="/contact" size="lg" icon />
            <CTAButton text="Contact Me" href="/contact" variant="secondary" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
