
import api from "@/lib/axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadDetailProduct = createAsyncThunk(
  "product/load-detail-product",
  async (param: { id: string }) => {
    const { id } = param;
    const url = `/api/product/${id}`;
    try {
      const { data } = await api.get(url);
      return data;
    } catch {
      return null;
    }
  }
);
