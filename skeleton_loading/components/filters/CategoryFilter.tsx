"use client";

import { Category } from "../types/product";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: number[];
  onChange: (id: number) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategories,
  onChange,
}: CategoryFilterProps) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold">دسته‌بندی</h3>

      <div className="space-y-3">
        {categories.map((category) => (
          <label
            key={category.id}
            className="flex cursor-pointer items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => onChange(category.id)}
              />

              <span>{category.name}</span>
            </div>

            <span className="text-gray-400">{category.productCount}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
