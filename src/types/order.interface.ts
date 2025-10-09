export interface iOrder {
  id: number;
  code: string;
  paymentStatus: string;
  address: string;
  addressDetail: {
    name: string;
    phone: string;
    city: string;
    postalCode: string;
    address: string;
    shippingMethod: string;
  }[];
  totalAmount: number;
  createdAt: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  productId: number;
  shopId: number;
  qty: number;
  priceSnapshot: number;
  status: "NEW" | "PROCESSING" | "DELIVERED" | "CANCELLED"; // Tambahkan status lain jika ada
  product: Product;
  shop: Shop;
}

export interface Product {
  id: number;
  title: string;
  images: string[]; // URL gambar
}

export interface Shop {
  id: number;
  name: string;
  slug: string;
}
