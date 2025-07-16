/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from "@reduxjs/toolkit";
import { defaultExampleReducer} from "./type";
import  type { RootState } from "@/redux/store";
import { update } from "./action";

const exampleReducer = createReducer(defaultExampleReducer, (builder:any) => {
  builder.addCase(update, (state:any) => {
    state.value++
  });
});
export const selectExample = (state: RootState) => state;

export default exampleReducer;
