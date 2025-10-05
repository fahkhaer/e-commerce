export interface iProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  stock: number;
  images: string[];
  rating: number;
  reviewCount: number;
  soldCount: number;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  shop: {
    id: number;
    name: string;
    slug: string;
    logo: string | null;
  };
  description: string
}
