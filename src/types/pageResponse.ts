import type { Pagination } from "./pagination";

export interface PageResponse<T> {
    content: T[];
    pagination: Pagination;
}