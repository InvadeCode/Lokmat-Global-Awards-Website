export interface LokmatEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  gallery?: string[];
  createdAt: number;
}
