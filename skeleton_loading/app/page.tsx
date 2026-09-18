"use client";

import { useEffect, useState } from "react";

import Header from "@/components/header/Header";
import FilterSidebar from "@/components/filters/FilterSidebar";
import ProductList from "@/components/products/ProductList";
import {
  Category,
  Product,
  ProductColor,
  ProductType,
} from "@/components/types/product";
import {
  getCategories,
  getColors,
  getProducts,
  getProductTypes,
} from "@/components/services/product";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [types, setTypes] = useState<ProductType[]>([]);
  const [colors, setColors] = useState<ProductColor[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const [selectedTypes, setSelectedTypes] = useState<number[]>([]);

  const [selectedColors, setSelectedColors] = useState<number[]>([]);

  useEffect(() => {
    async function loadData() {
      const [categoriesData, typesData, colorsData, productsData] =
        await Promise.all([
          getCategories(),
          getProductTypes(),
          getColors(),
          getProducts(),
        ]);

      setCategories(categoriesData);
      setTypes(typesData);
      setColors(colorsData);
      setProducts(productsData);
    }

    loadData();
  }, []);

  function handleCategoryChange(id: number) {
    setSelectedCategories((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function handleTypeChange(id: number) {
    setSelectedTypes((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function handleColorChange(id: number) {
    setSelectedColors((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

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
            categories={categories}
            types={types}
            colors={colors}
            selectedCategories={selectedCategories}
            selectedTypes={selectedTypes}
            selectedColors={selectedColors}
            onCategoryChange={handleCategoryChange}
            onTypeChange={handleTypeChange}
            onColorChange={handleColorChange}
          />

          <section className="min-w-0 flex-1">
            <ProductList products={products} />
          </section>
        </div>
      </main>
    </>
  );
}
