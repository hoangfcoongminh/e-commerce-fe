import { MdAddShoppingCart } from "react-icons/md";
import type { Product } from "../types/product";
import type { SubCategory } from "../types/subCategory";
interface ProductCardProps {
  product: Product;
  subCategories: SubCategory[];
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, subCategories, onAddToCart }: ProductCardProps) {
  const subCategory = subCategories.find((sub) => sub.id === product.subCategoryId);
  return (
    <div className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span
          className="absolute top-4 left-4 px-3 py-1 text-xs text-white rounded-full shadow-lg"
          style={{ backgroundColor: "#28914E" }}
        >
          {subCategory?.name ?? ""}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl mb-2 text-gray-900">{product.name}</h3>
        <div className="">
          <p className="text-2xl mb-4 text-[var(--color-primary)] font-semibold">
            {product.realPrice.toLocaleString("vi-VN")} VND
            {}
          </p>
          {product.promotions && (
            <p className="text-x mb-4 line-through text-[var(--color-primary)]">
              {product.originalPrice.toLocaleString("vi-VN")} VND
            </p>
          )}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
        >
          <MdAddShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
