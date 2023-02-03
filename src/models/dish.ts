import { Comment } from './comment';
export interface Dish {
  id: string;
  name: string;
  image: string | undefined;
  category: string;
  featured: boolean;
  label: string | undefined;
  price: string;
  description: string | undefined;
  comments: Comment[];
}
