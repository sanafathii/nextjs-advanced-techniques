import { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  isSkeleton?: boolean;
}

export default function ProductList({
  products,
  isSkeleton = false,
}: ProductListProps) {
  if (products.length === 0 && !isSkeleton) {
    return (
      <div className="flex min-h-60 items-center justify-center rounded-lg border border-dashed border-gray-300">
        <p className="text-gray-500">محصولی پیدا نشد</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 ${
        isSkeleton ? "skeleton" : ""
      }`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSkeleton={isSkeleton}
        />
      ))}
    </div>
  );
}
