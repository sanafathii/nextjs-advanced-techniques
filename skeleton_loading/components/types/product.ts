export interface Category {
  id: number;
  name: string;
  enName: string;
  productCount: number;
}

export interface ProductType {
  id: number;
  name: string;
  enName: string;
  productCount: number;
}

export interface ProductColor {
  id: number;
  name: string;
  enName: string;
  hex: string;
}

export interface ProductColorItem {
  id: number;
  hex: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPercent: number;
  imageUrl: string;
  hoverImageUrl: string;
  type: number;
  category: number;
  colors: ProductColorItem[];
  base64: string;
  blurHash: string;
  thumbHash: string;
}
