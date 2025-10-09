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
  reviews: string[]
}

export interface CartResponse {
  cartId: number;
  items: CartItem[];
  groups: CartGroup[];
  grandTotal: number;
}

export interface CartItem {
  id: number;
  productId: number;
  qty: number;
  priceSnapshot: number;
  subtotal: number;
  product: iProduct;
  price: number;
  isActive: boolean,
  stock : number
}

export interface Shop {
  id: number;
  name: string;
  slug: string;
}

export interface CartGroup {
  shop: Shop;
  items: CartItem[];
  subtotal: number;
}

