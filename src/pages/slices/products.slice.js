import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProductsG: (states, action) => action.payload,
  },
});

const { setProductsG } = productsSlice.actions;
export default productsSlice.reducer;

const BASE_URL = import.meta.env.VITE_REACT_APP_URL;

const defaultUrl = `${BASE_URL}/products`;

export const getAllProductsThunk =
  (url = defaultUrl) =>
  (dispatch) => {
    axios
      .get(url)
      .then((res) => dispatch(setProductsG(res.data)))
      .catch((err) => console.log(err));
  };
