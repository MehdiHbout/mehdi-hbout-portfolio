export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface WhatIDoItem {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  short: string;
  impact: string;
  tags: string[];
  detail?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Service {
  title: string;
  description: string;
  bullets: string[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  highlights: string;
  description: string;
}
