"use client";

import { ProductType } from "../types/product";

interface TypeFilterProps {
  types: ProductType[];
  selectedTypes: number[];
  onChange: (id: number) => void;
}

export default function TypeFilter({
  types,
  selectedTypes,
  onChange,
}: TypeFilterProps) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold">نوع محصول</h3>

      <div className="space-y-3">
        {types.map((type) => (
          <label
            key={type.id}
            className="flex cursor-pointer items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type.id)}
                onChange={() => onChange(type.id)}
              />

              <span>{type.name}</span>
            </div>

            <span className="text-gray-400">{type.productCount}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
