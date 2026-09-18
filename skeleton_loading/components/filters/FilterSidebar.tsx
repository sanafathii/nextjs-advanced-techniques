"use client";

import { Category, ProductColor, ProductType } from "../types/product";

import CategoryFilter from "./CategoryFilter";
import TypeFilter from "./TypeFilter";
import ColorFilter from "./ColorFilter";

interface FilterSidebarProps {
  categories: Category[];
  types: ProductType[];
  colors: ProductColor[];

  selectedCategories: number[];
  selectedTypes: number[];
  selectedColors: number[];

  onCategoryChange: (id: number) => void;
  onTypeChange: (id: number) => void;
  onColorChange: (id: number) => void;
}

export default function FilterSidebar({
  categories,
  types,
  colors,
  selectedCategories,
  selectedTypes,
  selectedColors,
  onCategoryChange,
  onTypeChange,
  onColorChange,
}: FilterSidebarProps) {
  return (
    <aside className="w-full shrink-0 border-gray-200 lg:w-64 lg:border-r lg:pr-6">
      <div className="space-y-8">
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onChange={onCategoryChange}
        />

        <div className="border-t border-gray-200 pt-8">
          <TypeFilter
            types={types}
            selectedTypes={selectedTypes}
            onChange={onTypeChange}
          />
        </div>

        <div className="border-t border-gray-200 pt-8">
          <ColorFilter
            colors={colors}
            selectedColors={selectedColors}
            onChange={onColorChange}
          />
        </div>
      </div>
    </aside>
  );
}
