export interface Profile {
  name: string;
  roles: string[];
  tagline: string;
  mission: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  photoUrl: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  isCurrent: boolean;
  summary: string;
  bullets: string[];
  impactMetrics: ImpactMetric[];
  tech: string[];
}

export interface ProjectEntry {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  problem: string;
  solution: string;
  architecture: string;
  impact: string;
  keyFeatures: string[];
  tech: string[];
  githubOwner?: string;
  githubRepo?: string;
  liveDemoUrl?: string;
  accent: 'indigo' | 'cyan' | 'amber' | 'emerald';
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  contribution: string;
  outcomes: string[];
  innovations: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: string;
}

export interface EducationEntry {
  institution: string;
  credential: string;
  score: string;
  scoreValue: number;
  year: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface JourneyStage {
  title: string;
  description: string;
  icon: string;
}

export interface StoryBeat {
  title: string;
  body: string;
  icon: string;
}
