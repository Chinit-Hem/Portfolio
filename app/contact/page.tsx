import { ContactForm } from '@/components/ContactForm';
import { LocalizedText } from '@/components/LocalizedText';
import { profile } from '@/data/profile';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Hem Chinit for freelance web development, business systems, dashboards, IT support, or system planning.',
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[#d9e2dc] bg-[#eef3ef] py-14 dark:border-[#2b3c33] dark:bg-[#101714] md:py-20">
        <div className="container-custom">
          <p className="section-eyebrow"><LocalizedText text="Contact" /></p>
          <h1 className="mt-3 heading-xl max-w-4xl text-slate-950 dark:text-white">
            <LocalizedText text="Tell me the business problem first." />
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            <LocalizedText text="Use this form for freelance projects, business systems, dashboards, IT support, or software engineering opportunities." />
          </p>
        </div>
      </section>

      <section className="section-spacing bg-white dark:bg-[#101714]">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-5">
            <div className="panel p-6">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text="Contact Details" /></h2>
              <div className="mt-5 space-y-5 text-sm">
                <a href={`mailto:${profile.email}`} className="flex gap-3 text-slate-600 hover:text-emerald-800 dark:text-slate-400 dark:hover:text-emerald-300">
                  <Mail className="h-5 w-5 flex-none" />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="flex gap-3 text-slate-600 hover:text-emerald-800 dark:text-slate-400 dark:hover:text-emerald-300">
                  <Phone className="h-5 w-5 flex-none" />
                  {profile.phone} / {profile.telegram} Telegram
                </a>
                <div className="flex gap-3 text-slate-600 dark:text-slate-400">
                  <MapPin className="h-5 w-5 flex-none" />
                  {profile.location}, {profile.country}
                </div>
              </div>
            </div>

            <div className="muted-panel p-6">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-white"><LocalizedText text="Email Backend" /></h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <LocalizedText text="This project is prepared without fake credentials. To send mail directly from the site later, connect a service such as Resend, Formspree, or a Next.js API route with secure environment variables." />
              </p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
