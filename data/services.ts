import type { Service } from '@/types/portfolio';

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    for: ['Small businesses', 'Company websites', 'Landing pages', 'Portfolio sites'],
    whatIProvide:
      'A professional, responsive website that presents your business clearly and makes it easy for customers to contact you.',
    deliverables: ['Responsive website', 'Contact CTA', 'Basic SEO setup', 'Deployment support'],
    price: 'Quote after scope',
  },
  {
    id: 'business-web-systems',
    title: 'Business Web Systems',
    for: ['Inventory', 'Asset management', 'Employee management', 'Internal dashboards', 'Workflow systems'],
    whatIProvide:
      'A practical internal system that turns manual workflows into organized digital records and actions.',
    deliverables: ['Requirements plan', 'System screens', 'Database structure', 'User workflow documentation'],
    price: 'Quote after requirements',
  },
  {
    id: 'dashboard-development',
    title: 'Dashboard Development',
    for: ['Operational dashboards', 'Reporting dashboards', 'KPI monitoring'],
    whatIProvide:
      'Readable dashboards for tracking business information, operational status, and important indicators.',
    deliverables: ['Dashboard layout', 'Filters and summaries', 'KPI cards', 'Responsive interface'],
    price: 'Quote after data review',
  },
  {
    id: 'it-support',
    title: 'IT Support',
    for: ['Windows/software', 'Printer', 'Workstation troubleshooting', 'Basic network issues', 'Technical setup'],
    whatIProvide:
      'Hands-on support for common IT issues that affect daily business operations and users.',
    deliverables: ['Issue diagnosis', 'Setup support', 'Troubleshooting notes', 'User guidance'],
    price: 'Quote after issue review',
  },
  {
    id: 'system-planning',
    title: 'System Planning & Requirement Analysis',
    for: ['Small businesses that know their problem but do not know what software they need'],
    whatIProvide:
      'A clear technical plan that turns business problems into requirements, scope, workflows, and a realistic build direction.',
    deliverables: ['Problem analysis', 'Functional requirements', 'Workflow map', 'Implementation roadmap'],
    price: 'Quote after discovery',
  },
];

export const projectTypeOptions = [
  'Website',
  'Business System',
  'Dashboard',
  'IT Support',
  'System Consultation',
  'Other',
];
