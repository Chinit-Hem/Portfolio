import type { Education, Profile, Stat } from '@/types/portfolio';

export const profile: Profile = {
  name: 'Hem Chinit',
  positioning: 'IT Executive | Full-Stack Developer | Future IT Project Manager',
  headline: 'Building Business Systems That Actually Solve Problems.',
  brandStatement: 'I build practical digital systems that solve real business problems.',
  summary:
    'I design and develop practical web systems, internal tools, dashboards, and enterprise solutions while combining technical execution with project management thinking.',
  email: 'chinithem81@gmail.com',
  phone: '011311161',
  telegram: '0974243312',
  location: 'Phnom Penh',
  country: 'Cambodia',
  availability: 'Available for Freelance Projects',
  status: 'IT Executive with hands-on full-stack development experience',
  profileImage: '/profile/hem-chinit.png',
  resumePath: '/resume.pdf',
  resumeFilename: 'Hem-Chinit-Resume.pdf',
  social: {
    github: {
      label: 'GitHub',
      href: 'https://github.com/Chinit-Hem',
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chinit-hem',
    },
  },
};

export const stats: Stat[] = [
  {
    value: '3+',
    label: 'Years Professional Experience',
    description: 'Across IT operations, support, administration, and software projects.',
  },
  {
    value: '5',
    label: 'Enterprise Systems',
    description: 'VMS, LMS, SMS, Loan Management, and Unified System Hub concepts.',
  },
  {
    value: 'Full-Stack',
    label: 'Web Development',
    description: 'React, Next.js, Node.js, APIs, PostgreSQL, and deployment workflows.',
  },
  {
    value: 'IT + Systems',
    label: 'Operations Management',
    description: 'User support, hardware, software, network basics, CCTV, GPS, and files.',
  },
];

export const education: Education[] = [
  {
    school: 'Royal University of Phnom Penh',
    degree: 'Bachelor of Science in Information Technology',
    period: '2022 - 2026',
    field: 'Information Technology',
    gpa: '3.22',
    highlights: [
      'Delivered technical presentations on Shell Scripting.',
      'Developed a Task Management mobile application using Flutter.',
    ],
  },
];

export const budgetOptions = [
  'Not sure yet',
  'Under $300',
  '$300 - $800',
  '$800 - $1,500',
  '$1,500+',
];
