"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import FilterSidebar from "@/components/filters/FilterSidebar";
import Pagination from "@/components/products/Pagination";
import ProductList from "@/components/products/ProductList";
import { getCategories, getProducts } from "@/components/services/product";
import { Category, Product } from "@/components/types/product";
import {
  skeletonCategories,
  skeletonProducts,
} from "@/components/configs/skeleton";

const PRODUCTS_PER_PAGE = 12;

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      setIsCategoriesLoading(true);

      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } finally {
        setIsCategoriesLoading(false);
      }
    }

    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      setIsProductsLoading(true);

      try {
        const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

        const data = await getProducts(PRODUCTS_PER_PAGE, skip);

        setProducts(data.products);
        setTotalProducts(data.total);
      } finally {
        setIsProductsLoading(false);
      }
    }

    loadProducts();
  }, [currentPage]);

  function handleCategoryChange(slug: string) {
    setSelectedCategories((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );

    setCurrentPage(1);
  }

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category),
        );

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">محصولات</h1>

          <p className="mt-2 text-gray-500">مجموعه محصولات ما را مشاهده کنید</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <FilterSidebar
            categories={isCategoriesLoading ? skeletonCategories : categories}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            isSkeleton={isCategoriesLoading}
          />

          <section className="min-w-0 flex-1">
            <ProductList
              products={isProductsLoading ? skeletonProducts : filteredProducts}
              isSkeleton={isProductsLoading}
            />

            {!isProductsLoading && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </section>
        </div>
      </main>
    </>
  );
}
