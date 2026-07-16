/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CategoryType = 'all' | 'books' | 'office' | 'art_math' | 'ink_tech' | 'accessories';

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  image: string; // Placeholder or generated image URL
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: CategoryType;
  description?: string;
  image?: string; // Picsum / local images
  unit?: string;
  featured?: boolean;
  brand?: string;
  keywords?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  name: string;
  phone: string;
  deliveryLocation: string;
  deliveryMethod: string;
  notes?: string;
}
