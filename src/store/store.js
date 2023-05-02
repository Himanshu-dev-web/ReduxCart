import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice"
import ProductReducer from "./productsSlice";

const store = configureStore({
    reducer:{
        cart:cartReducers,
        product: ProductReducer,
    }
});


export default store;