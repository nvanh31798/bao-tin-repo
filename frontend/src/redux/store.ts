import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter/counterSlice";
import categoryReducer from "./slice/categorySlice/categorySlice";
import authenticationReducer from "./slice/authenticationSlice/authSlice";
import productReducer from "./slice/productSlice/productSlice";
import shoppingCartReducer from "./slice/shoppingCartSlice/shoppingCartSlice";
import productsFilterReducer from "./slice/productFilterSlice/productsFilterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
    category: categoryReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    productsFilter: productsFilterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
