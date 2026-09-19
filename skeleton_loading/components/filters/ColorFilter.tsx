"use client";

import { ProductColor } from "../types/product";

interface ColorFilterProps {
  colors: ProductColor[];
  selectedColors: number[];
  onChange: (id: number) => void;
}

export default function ColorFilter({
  colors,
  selectedColors,
  onChange,
}: ColorFilterProps) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold">رنگ</h3>

      <div className="grid grid-cols-2 gap-3">
        {colors.map((color) => {
          const isSelected = selectedColors.includes(color.id);

          return (
            <button
              key={color.id}
              type="button"
              onClick={() => onChange(color.id)}
              className={`flex items-center gap-2 rounded-md border p-2 text-sm ${
                isSelected ? "border-black" : "border-gray-200"
              }`}
            >
              <span
                className="h-5 w-5 rounded-full border border-gray-300"
                style={{
                  backgroundColor: color.hex,
                }}
              />

              <span>{color.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
