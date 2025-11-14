// Fix: Import React to resolve namespace errors.

export interface Technology {
  name: string;
  description: string;
  icon: string; // Changed from React.ComponentType to string
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  description: string;
}