import type { ProcessStep } from '@/types/portfolio';

export const howIWork = [
  'Understand the business problem',
  'Define requirements',
  'Plan the solution',
  'Build iteratively',
  'Test with users',
  'Improve after feedback',
];

export const developmentProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: "Understand the client's problem and goals.",
  },
  {
    number: '02',
    title: 'Requirements',
    description: 'Turn business needs into clear functional requirements.',
  },
  {
    number: '03',
    title: 'Planning',
    description: 'Define scope, timeline, system architecture, and milestones.',
  },
  {
    number: '04',
    title: 'Design',
    description: 'Prepare the user experience and interface.',
  },
  {
    number: '05',
    title: 'Development',
    description: 'Build the system iteratively.',
  },
  {
    number: '06',
    title: 'Testing',
    description: 'Validate functionality, usability, and edge cases.',
  },
  {
    number: '07',
    title: 'Delivery',
    description: 'Deploy, document, and hand over the project.',
  },
  {
    number: '08',
    title: 'Support',
    description: 'Provide agreed post-launch support.',
  },
];
