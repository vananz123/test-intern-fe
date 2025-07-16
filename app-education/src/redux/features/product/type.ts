import type { Product } from "@/types/product";

export interface ProductType {
  isLoading: boolean;
  data: Product | null;
  success: boolean;
  message: string;
}
export const defaultProductReducer: ProductType = {
  isLoading: true,
  data: null,
  message: "",
  success: false,
};
