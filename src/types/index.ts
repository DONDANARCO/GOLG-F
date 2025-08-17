export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address?: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  createdAt: Date;
}

export interface FilterOptions {
  category?: string;
  brand?: string[];
  priceRange?: [number, number];
  inStock?: boolean;
  rating?: number;
} 