export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: NewsCategory;
  author: string;
  tags: string[];
}

export type NewsCategory = 
  | "Todas"
  | "Educação" 
  | "Saúde" 
  | "Infraestrutura" 
  | "Social" 
  | "Eventos"
  | "Anúncios";

export const NEWS_CATEGORIES: NewsCategory[] = [
  "Todas",
  "Educação",
  "Saúde",
  "Infraestrutura",
  "Social",
  "Eventos",
  "Anúncios",
];
