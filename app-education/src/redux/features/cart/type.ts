import type { Product } from "@/types/product";
export interface CartItem extends Product{
  quantity:number;
};
export interface CartType {
  isLoading: boolean;
  data: CartItem[] | null;
  success: boolean;
  totalPrice:number;
  itemCount:number;
  message: string;
}
export const defaultProductReducer: CartType = {
  isLoading: true,
  data: [],
  message: "",
  totalPrice:0,
  itemCount:0,
  success: false,
};
