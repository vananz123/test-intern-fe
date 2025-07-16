

import api from '@/lib/axios'
import type {User} from '@/types/user'
export const createUser = async(user:User)=>{
    try {
        const params = {
            name:user.name,
            heartProductId:user.heartProductId || []
        }
      const {data} = await api.post("/api/user", params, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch {
      return null;
    }
}
export const getUserById = async(id:string)=>{
    try {
      const {data} = await api.get(`/api/user/${id}`);
      return data;
    } catch {
      return null;
    }
}
export const updateUser = async(user:User)=>{
    try {
      const {data} = await api.put(`/api/user/${user.id}`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch {
      return null;
    }
}