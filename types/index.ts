export interface WorkItem {
  id: string;
  title: string;
  category: 'reels' | 'youtube' | 'ads' | 'brand';
  thumbnail?: string;
  videoUrl?: string;
  isVideo?: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
  big?: boolean;
  description?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Fact {
  number: string;
  label: string;
}
