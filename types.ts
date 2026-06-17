export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export type InventoryStatus = 'In Stock' | 'Out of Stock' | 'Pre-Order' | 'Low Stock';

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    icon_emoji?: string;
    description?: string;
    accent_color?: string;
    banner_image?: CosmicImage;
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    sale_price?: number;
    featured_image?: CosmicImage;
    gallery?: CosmicImage[];
    inventory_status?: InventoryStatus | string;
    brand?: string;
    specifications?: Record<string, any> | string;
    category?: Category;
    featured?: boolean;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    rating?: number;
    review_text?: string;
    product?: Product;
    avatar?: CosmicImage;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}