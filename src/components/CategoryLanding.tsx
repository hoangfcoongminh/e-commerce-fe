import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllCategoriesWithSubCategories } from "../store/categorySlice";
import type { Category } from "../types/category";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const CategoryLanding = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector((state) => state.categories);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  useEffect(() => {
    dispatch(fetchAllCategoriesWithSubCategories());
  }, [dispatch]);

  return (
    <nav className="pt-20 relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <>
            <div className="flex items-center justify-center py-6">
              <div className="flex items-center gap-3 text-gray-500">
                <div className="h-5 w-5 rounded-full border-2 border-[var(--color-primary)] border-t-transparent animate-spin" />
                <span className="text-sm tracking-wide">Đang tải danh mục...</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-8 h-14">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setActiveCategory(category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-[var(--color-primary)] transition-colors py-4">
                    <span>{category.name}</span>
                    <BiChevronDown />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeCategory && activeCategory === category && (
                    <div className="absolute top-full left-0 pt-2 z-40">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 min-w-[240px]">
                        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                          {category.name}
                        </h3>
                        <ul className="space-y-2">
                          {category.subCategories.map((subcategory) => (
                            <li
                              key={subcategory.id}
                              className="flex items-center justify-between gap-2"
                            >
                              <BiChevronRight />
                              <button className="text-gray-700 hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200 block w-full text-left cursor-pointer">
                                <span>{subcategory.name}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Backdrop */}
      {activeCategory && <div className="fixed inset-0 bg-black/15 z-30 pointer-events-none" />}
    </nav>
  );
};
export default CategoryLanding;
