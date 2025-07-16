/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from "@reduxjs/toolkit";
import { defaultProductReducer } from "./type";
import type { RootState } from "@/redux/store";
import { loadDetailProduct } from "./action";
import type { User } from "@/types/user";
const loadDetailProductReducer = createReducer(
  defaultProductReducer,
  (builder: any) => {
    builder
      .addCase(loadDetailProduct.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(loadDetailProduct.fulfilled, (state: any, action: any) => {
        if (!action.payload) return;
        const auth = localStorage.getItem("user");
        if (auth != null) {
          const user = JSON.parse(auth) as User;
          if (
            user.heartProductId !== undefined &&
            user.heartProductId.length > 0 &&
            user.heartProductId.includes(action.payload.id)
          ) {
            state.data = { ...action.payload, is_favorite: true };
          } else {
            state.data = { ...action.payload, is_favorite: false };
          }
        } else {
          state.data = { ...action.payload, is_favorite: false };
        }
        state.isLoading = false;
      })
      .addCase(loadDetailProduct.rejected, (state: any) => {
        state.isLoading = false;
      });
  }
);
export const selectDetailProduct = (state: RootState) => state;

export default loadDetailProductReducer;
