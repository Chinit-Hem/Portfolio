export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  positioning: string;
  headline: string;
  brandStatement: string;
  summary: string;
  email: string;
  phone: string;
  telegram: string;
  location: string;
  country: string;
  availability: string;
  status: string;
  profileImage: string;
  resumePath: string;
  resumeFilename: string;
  social: {
    github: SocialLink;
    linkedin: SocialLink;
  };
};

export type Stat = {
  value: string;
  label: string;
  description: string;
};

export type Experience = {
  title: string;
  period: string;
  description: string;
  responsibilities: string[];
  skillsGained: string[];
  businessImpact: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  field: string;
  gpa: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  purpose: string;
  businessProblem: string;
  role: string;
  technologies: string[];
  features: string[];
  businessValue: string;
  status: string;
  image: string;
  liveDemo?: string;
  github?: string;
  caseStudy: {
    overview: string;
    users: string[];
    requirements: string[];
    responsibilities: string[];
    architecture: string[];
    workflow: string[];
    challenges: string[];
    solutions: string[];
    results: string[];
    lessons: string[];
    nextImprovements: string[];
  };
};

export type Service = {
  id: string;
  title: string;
  for: string[];
  whatIProvide: string;
  deliverables: string[];
  price: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
