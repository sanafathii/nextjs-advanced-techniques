"use client";

import { Category } from "../types/product";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onChange: (slug: string) => void;
  isSkeleton?: boolean;
}

export default function CategoryFilter({
  categories,
  selectedCategories,
  onChange,
  isSkeleton = false,
}: CategoryFilterProps) {
  return (
    <div className={isSkeleton ? "skeleton" : ""}>
      <h3 className="mb-4 text-base font-semibold">دسته‌بندی</h3>

      <div className="space-y-3">
        {categories.map((category) => (
          <label
            key={category.slug}
            className="flex cursor-pointer items-center text-sm"
          >
            <div className="flex items-center gap-2">
              {!isSkeleton && (
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.slug)}
                  onChange={() => onChange(category.slug)}
                />
              )}

              <span>{category.name}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
