import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_ENDPOINT,
});
// api.interceptors.request.use((config) => {
//   config.headers.apiKey = process.env.NEXT_PUBLIC_API_KEY;
//   return config;
// });

// export const apiMail = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_MAIL_URL,
// });

export default api;