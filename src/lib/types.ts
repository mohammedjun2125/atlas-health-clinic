import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  name: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string;
  forWhom: string;
  whenToVisit: string;
}

export interface Doctor {
  name: string;
  specialization: string;
  experience: string;
  philosophy: string;
  languages: string[];
  imageId: string;
}

export interface Review {
  author: string;
  rating: number;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
