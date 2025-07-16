import api from "@/lib/axios";
import { filterByName, filterByPrice } from "@/utils/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadHome = createAsyncThunk("home/load-home", async ({search, range}:{search?:string; range?:number}) => {
  const url = `/api/product`;
  try {
    const { data} = await api.get(url);
    let dataN =data;
    if(search !== "" && search !== undefined) {
      dataN = filterByName(dataN,search)
    }
    if(range !==0 && range !== undefined) dataN = filterByPrice(dataN,range)
    return dataN
  } catch {
    return null;
  }
});
