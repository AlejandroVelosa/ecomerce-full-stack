import { configureStore } from "@reduxjs/toolkit";
import products from "../pages/slices/products.slice"
import cart from "../pages/slices/cart.slice"

export default configureStore({
    reducer: {
        products,
        cart
    }
})