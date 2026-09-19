import { Category, Product } from "../types/product";

export const skeletonProducts: Product[] = Array.from(
  { length: 12 },
  (_, index) => ({
    id: index + 1,
    title: "Loading product title",
    description: "Loading product description",
    category: "beauty",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "Loading brand",
    thumbnail: "",
    images: [],
  }),
);

const skeletonCategoryNames = [
  "Loading",
  "Loading category",
  "Loading products",
  "Loading category name",
  "Loading",
  "Loading product category",
];

export const skeletonCategories: Category[] = skeletonCategoryNames.map(
  (name, index) => ({
    slug: `loading-${index}`,
    name,
    url: "data:,",
  }),
);
