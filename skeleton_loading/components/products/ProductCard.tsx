import Image from "next/image";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price);
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice =
    product.discountPercent > 0
      ? product.price - (product.price * product.discountPercent) / 100
      : product.price;

  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        <Image
          src={product.hoverImageUrl}
          alt=""
          fill
          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        {product.discountPercent > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-black px-3 py-1 text-xs text-white">
            {product.discountPercent}٪ تخفیف
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 min-h-12 text-sm font-medium">
          {product.name}
        </h3>

        <div className="mt-4">
          {product.discountPercent > 0 && (
            <div className="text-sm text-gray-400 line-through">
              {formatPrice(product.price)} تومان
            </div>
          )}

          <div className="mt-1 font-semibold">
            {formatPrice(discountedPrice)} تومان
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {product.colors.map((color) => (
            <span
              key={color.id}
              className="h-4 w-4 rounded-full border border-gray-300"
              style={{
                backgroundColor: color.hex,
              }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
