/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
  role?: string;
  brandContext?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  stats?: { label: string; value: string }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  details: string[];
}

export interface LeadershipClub {
  id: string;
  role: string;
  club: string;
  description: string;
  badge: string;
  responsibilities: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface VoluntaryExperience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  bullets: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  tag?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Marketing" | "Digital Creation" | "Branding" | "Corporate Strategy";
  tags: string[];
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  isFeatured: boolean;
  author: string;
}

