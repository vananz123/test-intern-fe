//import api from "@/lib/axios";
//import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import type { CartItem } from "./type";

export const addToCart = createAction(
  "cart/add-to-cart",
  (cardItem: CartItem) => {
    return {
      payload: {
        ...cardItem,
      },
    };
  }
);
export const updateQualityInCart = createAction(
  "cart/update-quality-in-cart",
  (id: string, quality: number) => {
    return {
      payload: {
        id: id,
        quality: quality,
      },
    };
  }
);
export const deleteItemInCart = createAction(
  "cart/delete-item-in-cart",
  (id: string) => {
    return {
      payload: {
        id: id,
      },
    };
  }
);
export const loadCart = createAction("cart/load-cart");
