import { Category, Product } from "../types/product";

const API_URL = "https://dummyjson.com";

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function getProducts(
  limit: number,
  skip: number,
): Promise<{ products: Product[]; total: number }> {
  const response = await fetch(
    `${API_URL}/products?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
