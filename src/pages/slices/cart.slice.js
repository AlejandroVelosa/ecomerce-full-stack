import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../componets/utils/getConfigAuth";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartG: (state, action) => action.payload,
    addProductsCartG: (state, action) => [...state, action.payload],
    deleteProductsCartG: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload);
    },
  },
});

export const { setCartG, addProductsCartG, deleteProductsCartG } =
  cartSlice.actions;
export default cartSlice.reducer;

const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
const baseUrl = `${BASE_URL}/cart`;

// THUNKS
export const getCartThunk = () => (dispatch) => {
  const url = baseUrl;
  axios
    .get(url, getConfigAuth())
    .then((res) => dispatch(setCartG(res.data)))
    .catch((err) => console.log(err));
};

export const postCartThunk =
  (prod, quantity = 1) =>
  (dispatch) => {
    const url = baseUrl;

    const data = {
      quantity,
      productId: prod.id,
    };

    axios
      .post(url, data, getConfigAuth())
      .then((res) => {
        const obj = {
          ...res.data,
          product: prod,
        };
        console.log(obj);
        dispatch(addProductsCartG(obj));
      })
      .catch((err) => console.log(err));
  };

export const deleteCartThunk = (id) => (dispatch) => {
  const url = `${baseUrl}/${id}`;
  axios
    .delete(url, getConfigAuth())
    .then((res) => {
      console.log(res);
      dispatch(deleteProductsCartG(id));
    })
    .catch((err) => console.log(err));
};
