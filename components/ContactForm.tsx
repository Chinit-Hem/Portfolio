'use client';

import { budgetOptions, profile } from '@/data/profile';
import { useLanguage } from '@/app/language-provider';
import { projectTypeOptions } from '@/data/services';
import { Send } from 'lucide-react';
import { useState } from 'react';

type FormState = {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
  preferredContact: string;
};

const initialForm: FormState = {
  fullName: '',
  email: '',
  company: '',
  projectType: projectTypeOptions[0],
  budget: budgetOptions[0],
  description: '',
  preferredContact: 'Email',
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [message, setMessage] = useState('');

  const updateField = (field: keyof FormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) nextErrors.fullName = t('Full name is required.');
    if (!validateEmail(formData.email)) nextErrors.email = t('Enter a valid email address.');
    if (formData.description.trim().length < 20) {
      nextErrors.description = t('Please describe the project in at least 20 characters.');
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setMessage(t('Please fix the highlighted fields before sending.'));
      return;
    }

    const subject = encodeURIComponent(`Project inquiry: ${formData.projectType}`);
    const body = encodeURIComponent(
      [
        `Full Name: ${formData.fullName}`,
        `Email: ${formData.email}`,
        `Company / Organization: ${formData.company || 'Not provided'}`,
        `Project Type: ${formData.projectType}`,
        `Estimated Budget: ${formData.budget}`,
        `Preferred Contact Method: ${formData.preferredContact}`,
        '',
        'Project Description:',
        formData.description,
      ].join('\n')
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setMessage(t('Your email app should open with the project inquiry prepared.'));
  };

  return (
    <form onSubmit={handleSubmit} className="panel p-6 md:p-8" noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('Full Name')}</span>
          <input
            value={formData.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            className="mt-2 w-full rounded-lg border border-[#cbd8d0] bg-white px-4 py-3 text-sm text-slate-950 dark:border-[#2b3c33] dark:bg-[#101714] dark:text-white"
            placeholder={t('Your full name')}
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName && <span className="mt-1 block text-sm text-red-600">{errors.fullName}</span>}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('Email')}</span>
          <input
            type="email"
            value={formData.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="mt-2 w-full rounded-lg border border-[#cbd8d0] bg-white px-4 py-3 text-sm text-slate-950 dark:border-[#2b3c33] dark:bg-[#101714] dark:text-white"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="mt-1 block text-sm text-red-600">{errors.email}</span>}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('Company / Organization')}</span>
          <input
            value={formData.company}
            onChange={(event) => updateField('company', event.target.value)}
            className="mt-2 w-full rounded-lg border border-[#cbd8d0] bg-white px-4 py-3 text-sm text-slate-950 dark:border-[#2b3c33] dark:bg-[#101714] dark:text-white"
            placeholder={t('Optional')}
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('Project Type')}</span>
          <select
            value={formData.projectType}
            onChange={(event) => updateField('projectType', event.target.value)}
            className="mt-2 w-full rounded-lg border border-[#cbd8d0] bg-white px-4 py-3 text-sm text-slate-950 dark:border-[#2b3c33] dark:bg-[#101714] dark:text-white"
          >
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>{t(option)}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('Estimated Budget')}</span>
          <select
            value={formData.budget}
            onChange={(event) => updateField('budget', event.target.value)}
            className="mt-2 w-full rounded-lg border border-[#cbd8d0] bg-white px-4 py-3 text-sm text-slate-950 dark:border-[#2b3c33] dark:bg-[#101714] dark:text-white"
          >
            {budgetOptions.map((option) => (
              <option key={option} value={option}>{t(option)}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('Preferred Contact Method')}</span>
          <select
            value={formData.preferredContact}
            onChange={(event) => updateField('preferredContact', event.target.value)}
            className="mt-2 w-full rounded-lg border border-[#cbd8d0] bg-white px-4 py-3 text-sm text-slate-950 dark:border-[#2b3c33] dark:bg-[#101714] dark:text-white"
          >
            {['Email', 'Phone', 'Telegram'].map((option) => (
              <option key={option} value={option}>{t(option)}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('Project Description')}</span>
        <textarea
          value={formData.description}
          onChange={(event) => updateField('description', event.target.value)}
          rows={7}
          className="mt-2 w-full resize-none rounded-lg border border-[#cbd8d0] bg-white px-4 py-3 text-sm text-slate-950 dark:border-[#2b3c33] dark:bg-[#101714] dark:text-white"
          placeholder={t('Describe the business problem, users, workflow, deadline, or support issue.')}
          aria-invalid={Boolean(errors.description)}
        />
        {errors.description && <span className="mt-1 block text-sm text-red-600">{errors.description}</span>}
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-800 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-900 dark:bg-emerald-400 dark:text-[#101714] dark:hover:bg-emerald-300 md:w-auto"
      >
        <Send className="h-4 w-4" />
        {t('Prepare Email Inquiry')}
      </button>

      {message && (
        <p className="mt-4 rounded-lg border border-[#d9e2dc] bg-[#eef3ef] px-4 py-3 text-sm text-slate-700 dark:border-[#2b3c33] dark:bg-[#1b2922] dark:text-slate-300">
          {message}
        </p>
      )}
    </form>
  );
}
