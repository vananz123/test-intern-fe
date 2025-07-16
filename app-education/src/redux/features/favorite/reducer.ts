/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from "@reduxjs/toolkit";
import { defaultFavoriteReducer } from "./type";
import type { RootState } from "@/redux/store";
import { handleFavorite ,loadLoadFavorite} from "./action";
import type { Product } from "@/types/product";

const favoriteReducer = createReducer(defaultFavoriteReducer, (builder: any) => {
  builder
    .addCase(handleFavorite.pending, (state: any) => {
      state.isLoading = true;
    })
    .addCase(handleFavorite.fulfilled, (state: any, action: any) => {
      if (!action.payload) return;
      if(action.payload ===null) return;
      localStorage.setItem('user',JSON.stringify(action.payload).toString())
      state.isLoading = false;
    })
    .addCase(handleFavorite.rejected, (state: any) => {
      state.isLoading = false;
    }) //
    .addCase(loadLoadFavorite.pending, (state: any) => {
      state.isLoading = true;
    })
    .addCase(loadLoadFavorite.fulfilled, (state: any, action: any) => {
      if (!action.payload) return;
      if(action.payload === null) return;
      const productFavorite: Product[] =[] 
      action.payload.products.map((_:Product)=>{
        if(action.payload.user.heartProductId.includes(_.id)){
          productFavorite.push({..._,is_favorite:true})
        }
      })
      state.data = productFavorite
      state.isLoading = false;
    })
    .addCase(loadLoadFavorite.rejected, (state: any) => {
      state.isLoading = false;
    });
});
export const selectFavorite = (state: RootState) => state;

export default favoriteReducer;
