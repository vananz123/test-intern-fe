import { createUser, updateUser } from "@/api/user-sevices";
import api from "@/lib/axios";
import type { User } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const loadLoadFavorite = createAsyncThunk(
  "favorite/load-favorite-product",
  async () => {
    try {
      const auth = localStorage.getItem("user") as User;
      if (auth != null) {
        const user = JSON.parse(auth as string) as User
        const { data } = await api.get("/api/product");
        return {
          user: user,
          products: data,
        };
      }
      return null;
    } catch {
      return null;
    }
  }
);
export const handleFavorite = createAsyncThunk(
  "favorite/handle-favorite-product",
  async (productId: string) => {
    try {
      const auth = localStorage.getItem("user");
      if (auth === null) {
        const userApi = await createUser({ heartProductId: [productId] });
        return userApi;
      }
      const user = JSON.parse(auth as string) as User;
      if (user === null || user.heartProductId === undefined) {
        return null;
      }
      if (user.heartProductId.includes(productId)) {
        const heartProductIdN = user.heartProductId.filter(
          (x: string) => x !== productId
        );
        user.heartProductId = heartProductIdN;
      } else {
        user.heartProductId = [...user.heartProductId, productId];
      }
      const putUser = await updateUser(user);
      return putUser;
    } catch {
      return null;
    }
  }
);
