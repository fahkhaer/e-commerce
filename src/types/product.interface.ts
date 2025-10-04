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
}

export interface iProductResponse {
  data: {
    products: iProduct[]; // Array of products
    meta: {
      totalProducts: number; // Total jumlah produk yang tersedia
      page: number;          // Halaman saat ini
      perPage: number;       // Jumlah produk per halaman
    };
  };
}
