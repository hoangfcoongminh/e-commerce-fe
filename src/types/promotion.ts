export interface Promotion {
  id: number;
  name: string;
  description: string | null;
  discountPercent: number;
  discountAmount: number;
  startDate: string;
  endDate: string;
  isBestDeal: boolean;
}

// startDate và endDate sẽ dùng bằng cách: start.toLocaleDateString("vi-VN") hoặc start.toISOString("vi-VN") tùy mục đích sử dụng
