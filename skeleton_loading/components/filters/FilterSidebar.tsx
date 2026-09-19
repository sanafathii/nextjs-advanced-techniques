"use client";

import { Category } from "../types/product";
import CategoryFilter from "./CategoryFilter";

interface FilterSidebarProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (slug: string) => void;
  isSkeleton?: boolean;
}

export default function FilterSidebar({
  categories,
  selectedCategories,
  onCategoryChange,
  isSkeleton = false,
}: FilterSidebarProps) {
  return (
    <aside className="w-full shrink-0 border-gray-200 lg:w-64 lg:border-r lg:pr-6">
      <div className="space-y-8">
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onChange={onCategoryChange}
          isSkeleton={isSkeleton}
        />
      </div>
    </aside>
  );
}
