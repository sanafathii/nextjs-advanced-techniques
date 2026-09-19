import Image from "next/image";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  isSkeleton?: boolean;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price);
}

export default function ProductCard({
  product,
  isSkeleton = false,
}: ProductCardProps) {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="relative aspect-square shrink-0 overflow-hidden bg-gray-100">
        {!isSkeleton && (
          <>
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />

            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt=""
                fill
                className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            )}
          </>
        )}

        {product.discountPercentage > 0 && !isSkeleton && (
          <span className="absolute right-3 top-3 rounded-full bg-black px-3 py-1 text-xs text-white">
            {Math.round(product.discountPercentage)}٪ تخفیف
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 min-h-5 text-xs text-gray-400">
          {product.category}
        </div>

        <h3 className="line-clamp-2 min-h-12 text-sm font-semibold">
          {product.title}
        </h3>

        <div className="mt-4 min-h-14">
          {product.discountPercentage > 0 && !isSkeleton && (
            <div className="text-sm text-gray-400 line-through">
              {formatPrice(product.price)} تومان
            </div>
          )}

          <div className="mt-1 text-lg font-bold">
            {!isSkeleton && `${formatPrice(discountedPrice)} تومان`}
          </div>
        </div>

        <div className="mt-4 flex min-h-5 items-center justify-between text-sm text-gray-500">
          <span>{!isSkeleton && `⭐ ${product.rating}`}</span>

          <span>{!isSkeleton && product.brand}</span>
        </div>

        <button
          type="button"
          className="mt-auto w-full rounded-lg bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          {!isSkeleton && "افزودن به سبد خرید"}
        </button>
      </div>
    </article>
  );
}
