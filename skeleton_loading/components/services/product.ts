import { Category, Product, ProductColor, ProductType } from "../types/product";

const API_URL = "https://general-api.classbon.com/api/product";

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_URL}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function getProductTypes(): Promise<ProductType[]> {
  const response = await fetch(`${API_URL}/types`);

  if (!response.ok) {
    throw new Error("Failed to fetch product types");
  }

  return response.json();
}

export async function getColors(): Promise<ProductColor[]> {
  const response = await fetch(`${API_URL}/colors`);

  if (!response.ok) {
    throw new Error("Failed to fetch colors");
  }

  return response.json();
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/sieve`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
