import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    slug: 'vms',
    name: 'Vehicle Management System - VMS',
    category: 'Enterprise Operations System',
    purpose:
      'Manage vehicles, valuation, vehicle information, GPS data, records, and operational workflows.',
    businessProblem:
      'Vehicle-related information can become scattered across spreadsheets, documents, and manual follow-up, making tracking and audit preparation harder.',
    role: 'System planner and full-stack developer',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Neon', 'Cloudinary', 'Vercel'],
    features: [
      'Vehicle records',
      'Search and filtering',
      'Vehicle categories',
      'Valuation support',
      'GPS-related information',
      'Dashboard',
      'User management',
      'Audit-related workflows',
    ],
    businessValue:
      'Creates a structured source of truth for vehicle operations and improves daily visibility for business users.',
    status: 'In development / portfolio case study',
    image: '/projects/vms-dashboard.png',
    liveDemo: '#',
    github: '#',
    caseStudy: {
      overview:
        'VMS is designed as an internal vehicle operations platform for teams that need reliable vehicle records, valuation support, GPS references, and dashboard-level visibility.',
      users: ['IT/Admin users', 'Operations staff', 'Management reviewers', 'Audit support users'],
      requirements: [
        'Centralize vehicle records and core information.',
        'Allow users to search, filter, and categorize vehicles.',
        'Support valuation and GPS-related reference fields.',
        'Provide user access and audit-friendly workflows.',
      ],
      responsibilities: [
        'Collected workflow needs from business operations.',
        'Planned the data structure and dashboard experience.',
        'Built reusable interface patterns for records, filters, and summary views.',
      ],
      architecture: [
        'Next.js application for UI and route structure.',
        'PostgreSQL hosted on Neon for relational vehicle records.',
        'Cloudinary prepared for vehicle image storage.',
        'Vercel deployment target for production hosting.',
      ],
      workflow: [
        'User logs in and opens the vehicle dashboard.',
        'User creates or updates vehicle information.',
        'System organizes records by category, status, and operational details.',
        'Managers review dashboard summaries and search records when needed.',
      ],
      challenges: [
        'Turning real operational language into clear system fields.',
        'Designing workflows flexible enough for future audit needs.',
      ],
      solutions: [
        'Structured data around vehicle identity, status, valuation, and GPS references.',
        'Designed searchable dashboard patterns instead of relying on manual files.',
      ],
      results: [
        'Prepared a practical foundation for vehicle record management.',
        'Improved the clarity of how vehicle information could be captured and reviewed.',
      ],
      lessons: [
        'Operational systems need simple screens, consistent fields, and strong search more than decorative UI.',
      ],
      nextImprovements: [
        'Role-based approval flow',
        'Exportable audit reports',
        'More detailed vehicle lifecycle history',
      ],
    },
  },
  {
    slug: 'lms',
    name: 'Learning Management System - LMS',
    category: 'Employee Development Platform',
    purpose: 'Internal learning and employee development platform.',
    businessProblem:
      'Training content and employee learning progress can be difficult to manage without a shared platform.',
    role: 'Frontend and system workflow contributor',
    technologies: ['Next.js', 'TypeScript', 'Shared Authentication', 'PostgreSQL'],
    features: ['Courses', 'Learning content', 'Employee learning records', 'Dashboard', 'User access', 'Shared authentication'],
    businessValue:
      'Supports a more organized learning culture by centralizing courses, access, and employee progress records.',
    status: 'Concept / portfolio case study',
    image: '/projects/lms-dashboard.png',
    liveDemo: '#',
    github: '#',
    caseStudy: {
      overview:
        'LMS is planned as an internal learning platform where employees can access learning content and the company can organize training records.',
      users: ['Employees', 'Trainers', 'HR/Admin users', 'Management reviewers'],
      requirements: [
        'Provide course and learning content management.',
        'Track employee learning records.',
        'Use shared authentication with other internal systems.',
        'Show dashboard summaries for learning activity.',
      ],
      responsibilities: [
        'Defined core screens and user access needs.',
        'Mapped the relationship between users, courses, and learning records.',
        'Planned reusable navigation patterns shared with other enterprise systems.',
      ],
      architecture: [
        'Next.js frontend with modular pages.',
        'Shared authentication concept across systems.',
        'Relational database tables for users, courses, and progress records.',
      ],
      workflow: [
        'Admin creates course content.',
        'Employee opens assigned or available courses.',
        'System records learning progress.',
        'Admin reviews progress from dashboard views.',
      ],
      challenges: ['Keeping learning records simple while leaving room for future reporting.'],
      solutions: ['Separated course content, employee records, and dashboard summaries in the data model.'],
      results: ['Created a realistic structure for internal learning management without overcomplicating early scope.'],
      lessons: ['Shared authentication and consistent navigation matter when multiple internal systems are connected.'],
      nextImprovements: ['Course completion certificates', 'Quiz support', 'Manager reporting views'],
    },
  },
  {
    slug: 'sms',
    name: 'Stock / Asset Management System - SMS',
    category: 'Asset and Inventory Workflow',
    purpose: 'Track business assets, equipment, ownership, location, and transfers.',
    businessProblem:
      'Assets and equipment can be hard to control when ownership, location, status, and transfers are tracked manually.',
    role: 'System planner and full-stack developer',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Neon', 'REST APIs'],
    features: [
      'Asset registry',
      'Asset status',
      'Employee transfer workflow',
      'Pending approval',
      'Accept/reject transfer',
      'Transfer history',
      'Audit log',
      'Dashboard',
      'Search',
      'Location tracking',
    ],
    businessValue:
      'Improves asset accountability by making ownership, location, transfer status, and history easier to review.',
    status: 'In development / portfolio case study',
    image: '/projects/sms-dashboard.png',
    liveDemo: '#',
    github: '#',
    caseStudy: {
      overview:
        'SMS focuses on business asset tracking, from registration through status changes, transfer approval, and history review.',
      users: ['IT/Admin users', 'Asset owners', 'Approvers', 'Audit support users'],
      requirements: [
        'Register assets with ownership and location data.',
        'Support transfer requests between employees.',
        'Allow approval, rejection, and history tracking.',
        'Keep an audit log for important asset changes.',
      ],
      responsibilities: [
        'Mapped asset lifecycle requirements.',
        'Designed transfer and approval states.',
        'Planned dashboard, search, and audit history views.',
      ],
      architecture: [
        'Next.js routes for asset list, detail, transfer, and dashboard views.',
        'PostgreSQL structure for assets, employees, locations, transfers, and logs.',
        'API routes prepared around asset workflows and approval actions.',
      ],
      workflow: [
        'Asset is registered with status, owner, and location.',
        'User requests transfer to another employee or location.',
        'Approver accepts or rejects the request.',
        'System records transfer history and audit log entries.',
      ],
      challenges: ['Designing transfer states clearly so users understand pending, accepted, and rejected actions.'],
      solutions: ['Used explicit workflow statuses and separate history records for accountability.'],
      results: ['Prepared a more reliable structure for asset ownership and transfer control.'],
      lessons: ['Approval systems need clear status labels, timestamps, and history from the beginning.'],
      nextImprovements: ['Barcode/QR labels', 'Export reports', 'Branch-level asset summaries'],
    },
  },
  {
    slug: 'loan',
    name: 'Loan Management System',
    category: 'Pawn / Finance Operations System',
    purpose: 'Manage loan lifecycle for pawn / finance operations.',
    businessProblem:
      'Loan operations need careful tracking of borrower data, collateral, balances, repayments, arrears, and branch performance.',
    role: 'System analyst and full-stack developer',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Vercel'],
    features: [
      'Borrower information',
      'Loan creation',
      'Vehicle collateral',
      'LTV calculation',
      'Disbursement',
      'Repayment',
      'Loan balance',
      'Arrears',
      'Collateral tracking',
      'Dashboard KPIs',
      'Branch performance',
      'Operational alerts',
    ],
    businessValue:
      'Models the full loan lifecycle so operations teams can track status, risk indicators, and follow-up actions more consistently.',
    status: 'Concept / portfolio case study',
    image: '/projects/loan-dashboard.png',
    liveDemo: '#',
    github: '#',
    caseStudy: {
      overview:
        'The Loan Management System is planned around the enterprise lifecycle of a pawn or finance loan, from borrower intake to repayment and collateral tracking.',
      users: ['Branch staff', 'Operations users', 'Managers', 'Finance reviewers'],
      requirements: [
        'Capture borrower and collateral information.',
        'Calculate LTV and loan balance values.',
        'Track disbursement, repayment, arrears, and operational alerts.',
        'Show dashboard KPIs and branch performance indicators.',
      ],
      responsibilities: [
        'Translated finance workflow ideas into system modules.',
        'Planned lifecycle states for loan creation, repayment, arrears, and closure.',
        'Designed dashboard concepts for operational visibility.',
      ],
      architecture: [
        'Relational data model for borrowers, loans, collateral, repayments, and branches.',
        'Next.js application with protected operational screens.',
        'API routes for loan actions and dashboard queries.',
      ],
      workflow: [
        'Staff records borrower and collateral information.',
        'System calculates supporting loan values such as LTV and balance.',
        'Repayments and arrears are tracked through the loan lifecycle.',
        'Management reviews KPIs, branch activity, and operational alerts.',
      ],
      challenges: ['Loan systems require accurate lifecycle thinking and careful handling of financial concepts.'],
      solutions: ['Kept the portfolio version focused on workflow design and clear data relationships rather than fake financial results.'],
      results: ['Documented a realistic enterprise system plan for finance operations.'],
      lessons: ['Financial workflows need validation, auditability, and role controls before advanced features.'],
      nextImprovements: ['Role-based permissions', 'Repayment schedule engine', 'Detailed audit exports'],
    },
  },
  {
    slug: 'system-hub',
    name: 'Unified Enterprise System Hub',
    category: 'Enterprise Platform Concept',
    purpose: 'One central login and navigation experience across enterprise systems.',
    businessProblem:
      'When companies have multiple internal systems, users can struggle with inconsistent navigation, separate access patterns, and scattered modules.',
    role: 'Product thinker and frontend architect',
    technologies: ['Next.js', 'TypeScript', 'Shared Design System', 'Role-Based Access Concept'],
    features: [
      'Unified authentication',
      'Role-based access concept',
      'Central system selector',
      'Shared design system',
      'Consistent navigation',
      'Modules: VMS, LMS, SMS, Loan, HR',
    ],
    businessValue:
      'Improves user confidence by giving employees a consistent starting point for internal systems.',
    status: 'Architecture concept / portfolio case study',
    image: '/projects/system-hub.png',
    liveDemo: '#',
    github: '#',
    caseStudy: {
      overview:
        'The Unified Enterprise System Hub is a central access layer that connects major internal modules under one login and navigation experience.',
      users: ['Employees', 'IT/Admin users', 'Managers', 'Department users'],
      requirements: [
        'Provide a central selector for VMS, LMS, SMS, Loan, and HR modules.',
        'Prepare role-based access concepts.',
        'Use a shared design system and consistent navigation.',
        'Reduce confusion across internal tools.',
      ],
      responsibilities: [
        'Defined the platform concept and module map.',
        'Planned shared navigation and access patterns.',
        'Designed a scalable structure for future modules.',
      ],
      architecture: [
        'Next.js shell application for shared layout and navigation.',
        'Role-based access concept for module visibility.',
        'Shared design tokens and reusable UI patterns.',
      ],
      workflow: [
        'User signs in once.',
        'System shows available modules based on role concept.',
        'User opens a system with consistent navigation and shared UI patterns.',
        'IT can add future modules without redesigning the whole experience.',
      ],
      challenges: ['Balancing simplicity for users with enough structure for future systems.'],
      solutions: ['Used a central module selector and common design language across systems.'],
      results: ['Created a practical direction for connecting enterprise systems into one coherent experience.'],
      lessons: ['A shared platform improves adoption when users work across many internal systems.'],
      nextImprovements: ['Real authentication integration', 'Module usage analytics', 'Admin role management'],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
