
export type Language = 'AR' | 'FR' | 'EN' | 'ES';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  videoUrl?: string;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface WorkingHour {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}
