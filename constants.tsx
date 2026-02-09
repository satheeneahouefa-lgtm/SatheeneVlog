
import { BlogPost, Category } from './types';

export const CATEGORIES: Category[] = ['Mode', 'Beauté', 'Bien-être', 'Lifestyle'];

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'La douceur du cachemire en hiver',
    excerpt: 'Comment choisir et entretenir ses pièces préférées pour un confort absolu.',
    content: `Le cachemire est plus qu'une simple laine, c'est une invitation à la douceur. Dans cet article, nous explorons les meilleures façons d'intégrer cette matière noble dans votre garde-robe quotidienne.\n\nPrivilégiez les coupes amples et les tons neutres comme le beige sable ou le gris perle. L'entretien est primordial : un lavage à la main délicat assurera la longévité de vos pièces favorites.`,
    category: 'Mode',
    date: '12 Janvier 2024',
    imageUrl: 'https://images.unsplash.com/photo-1576708441919-83564f6ece6b?q=80&w=1000&auto=format&fit=crop',
    author: 'Satheene'
  },
  {
    id: '2',
    title: 'Rituel matinal pour un esprit serein',
    excerpt: 'Cinq étapes simples pour commencer la journée avec calme et intention.',
    content: `Se réveiller en douceur change la trajectoire de toute la journée. Commencez par quelques minutes de silence, un verre d'eau tiède citronnée, et une lecture inspirante.\n\nÉvitez les écrans pendant la première heure. Cette bulle de calme permet de cultiver une paix intérieure durable.`,
    category: 'Bien-être',
    date: '10 Janvier 2024',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
    author: 'Satheene'
  },
  {
    id: '3',
    title: 'Éclat naturel : ma routine soin',
    excerpt: 'Des produits clean et des gestes simples pour une peau lumineuse.',
    content: `La beauté commence par une peau saine. Ma routine se concentre sur l'hydratation et la protection. Un nettoyant doux, un sérum à la vitamine C et une protection solaire sont mes indispensables.\n\nN'oubliez pas que l'éclat vient aussi de l'intérieur : une alimentation riche en antioxydants fait des merveilles.`,
    category: 'Beauté',
    date: '05 Janvier 2024',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfad450526?q=80&w=1000&auto=format&fit=crop',
    author: 'Satheene'
  }
];
