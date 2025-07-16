import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exampleReducer from "./features/example/reducer";
import loadHomeReducer from "./features/home/reducer";
import loadDetailProductReducer from "./features/product/reducer";
import loadCartReducer from "./features/cart/reducer";
import favoriteReducer from "./features/favorite/reducer";
const persistConfig = {
  key: "app-test",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  example: exampleReducer,
  home:loadHomeReducer,
  detailProduct:loadDetailProductReducer,
  cart:loadCartReducer,
  favorite:favoriteReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export let store = createStore();

export const persistor = persistStore(store);

export const refreshStore = () => {
  store = createStore();
};
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
