import type { Image } from "./image";

export interface Product {
  id: number;
  subCategoryId: number;
  name: string;
  description: string | null;
  originalPrice: number;
  realPrice: number;
  stock: number;
  slug: string;
  images: Image[];
}

interface FilterRequest {
    subCategoryIds: number[] | null;
    keyword: string | null;
    minPrice: number | null;
    maxPrice: number | null;
}

export interface FilterRequestArgs {
    page?: number;
    size?: number;
    sort?: string;
    body: FilterRequest;
}