import type { Product } from "@/types/product";

export interface HomeType {
  isLoading: boolean;
  data: Product[] | null;
  success: boolean;
  message: string;
}
export const defaultHomeReducer: HomeType = {
  isLoading: true,
  data: null,
  message: "",
  success: false,
};
