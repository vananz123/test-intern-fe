/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from "@reduxjs/toolkit";
import { defaultProductReducer, type CartItem, type CartType } from "./type";
import type { RootState } from "@/redux/store";
import {
  addToCart,
  deleteItemInCart,
  loadCart,
  updateQualityInCart,
} from "./action";

const loadCartReducer = createReducer(defaultProductReducer, (builder: any) => {
  builder
    .addCase(loadCart, (state: CartType) => {
      const localStorageCart = localStorage.getItem("cart");
      if (localStorageCart === null) {
        state.data = [];
      }else{
        const dataParse = JSON.parse(localStorageCart as string) as CartItem[] ;
        state.data = dataParse;
        state.itemCount = dataParse.length;
        let total = 0;
        dataParse.map((_) => {
          total += _.price * _.quantity;
        });
        state.totalPrice = total;
      }
    })
    .addCase(addToCart, (state: CartType, action: any) => {
      const cartN = state.data || [];
      const indexN = cartN.findIndex((e) => {
        return e.id === action.payload.id;
      });
      console.log(indexN);
      if (indexN != -1) {
        cartN[indexN].quantity =
          cartN[indexN].quantity + action.payload.quantity;
      } else {
        cartN.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(cartN));
      state.data = cartN;
    })
    .addCase(updateQualityInCart, (state: CartType, action: any) => {
      const cartN = state.data || [];
      const indexN = cartN.findIndex((e) => {
        return e.id === action.payload.id;
      });
      cartN[indexN].quantity = action.payload.quality;
      localStorage.setItem("cart", JSON.stringify(cartN));
      state.data = cartN;
    })
    .addCase(deleteItemInCart, (state: CartType, action: any) => {
      const cartN = state.data || [];

      const cartNF = cartN.filter((e) => e.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(cartNF));
      state.data = cartNF;
    });
});
export const selectCart = (state: RootState) => state;

export default loadCartReducer;
