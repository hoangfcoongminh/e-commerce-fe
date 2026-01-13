import type { SubCategory } from "./subCategory";

export interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
  status: number;
  subCategories: SubCategory[];
}
