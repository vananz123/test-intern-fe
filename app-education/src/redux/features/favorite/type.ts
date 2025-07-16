import type { Product } from "@/types/product";

export interface FavoriteType {
  isLoading: boolean;
  data: Product[] | null;
  success: boolean;
  message: string;
}
export const defaultFavoriteReducer: FavoriteType = {
  isLoading: true,
  data: null,
  message: "",
  success: false,
};
