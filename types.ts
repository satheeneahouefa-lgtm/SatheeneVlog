
export type Category = 'Mode' | 'Beauté' | 'Bien-être' | 'Lifestyle';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  imageUrl: string;
  author: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  role: 'subscriber' | 'admin';
}
