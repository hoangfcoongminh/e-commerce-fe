import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { ProductCard } from "./ProductCart";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { filterProducts } from "../store/productSlice";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { items, error, loading, pagination } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(filterProducts({ page: 0, size: 8, sort: "id,DESC", body: { subCategoryIds: null, keyword: null, minPrice: null, maxPrice: null } }));
  }, [dispatch]);

  const categoryCards: CategoryCard[] = [
    {
      id: 1,
      name: "Men's Collection",
      image:
        "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmYXNoaW9uJTIwamFja2V0fGVufDF8fHx8MTc2ODE0NjMwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      itemCount: 245,
    },
    {
      id: 2,
      name: "Women's Collection",
      image:
        "https://images.unsplash.com/photo-1638717366457-dbcaf6b1afbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZhc2hpb24lMjBlbGVnYW50fGVufDF8fHx8MTc2ODE4NTgyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      itemCount: 320,
    },
    {
      id: 3,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBsdXh1cnl8ZW58MXx8fHwxNzY4MTMyMzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      itemCount: 156,
    },
    {
      id: 4,
      name: "Kids' Collection",
      image:
        "https://images.unsplash.com/photo-1758782213532-bbb5fd89885e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2ODE1MDIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      itemCount: 128,
    },
  ];

  console.log("Items: ", items);
  

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1619384259054-ee3ce9d1798c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2ODE1MjgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fashion Banner"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col justify-center h-full max-w-xl">
            <h1 className="text-5xl sm:text-6xl text-white mb-6 tracking-tight leading-tight">
              Timeless Elegance
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Discover our curated collection of premium fashion pieces designed for the modern
              connoisseur.
            </p>
            <Link
              to="/shop"
              className="group flex items-center gap-3 px-8 py-4 text-xl text-white rounded-lg transition-all hover:shadow-2xl hover:scale-105 w-fit bg-[var(--color-primary)]"
            >
              Shop Now
              <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Collections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 tracking-tight" style={{ color: "#116E33" }}>
              New Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated collections designed for every style and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Category Image */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Category Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-200 mb-4">{category.itemCount} Items</p>
                  <button className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                    <span>Explore Collection</span>
                    <BsArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 tracking-tight" style={{ color: "#116E33" }}>
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium clothing crafted with exceptional
              attention to detail.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                // onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
