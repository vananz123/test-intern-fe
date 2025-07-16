/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from "@reduxjs/toolkit";
import { defaultHomeReducer } from "./type";
import type { RootState } from "@/redux/store";
import { loadHome } from "./action";

const loadHomeReducer = createReducer(defaultHomeReducer, (builder: any) => {
  builder
    .addCase(loadHome.pending, (state: any) => {
      state.isLoading = true;
    })
    .addCase(loadHome.fulfilled, (state: any, action: any) => {
      if (!action.payload) return;
      state.data = action.payload;
      state.isLoading = false;
    })
    .addCase(loadHome.rejected, (state: any) => {
      state.isLoading = false;
    });
});
export const selectHome = (state: RootState) => state;

export default loadHomeReducer;
