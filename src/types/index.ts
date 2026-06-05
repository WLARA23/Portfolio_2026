export interface Project {
  // Card fields
  id: string;
  title: string;
  categories: string[];
  bgColor: string;
  image?: string;
  featured?: boolean;
  // Detail fields
  year?: string;
  role?: string;
  client?: string;
  duration?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'instagram' | 'whatsapp' | 'email' | 'behance';

export interface SocialLinkData {
  platform: SocialPlatform;
  url: string;
  label: string;
}
