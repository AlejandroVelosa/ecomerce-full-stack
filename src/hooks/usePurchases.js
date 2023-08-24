import axios from "axios";
import getConfigAuth from "../componets/utils/getConfigAuth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCartG } from "../pages/slices/cart.slice";

const usePurchases = () => {
  const [purchases, setPurchases] = useState();
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
  const url = `${BASE_URL}/purchase`;

  const getAllPurchases = () => {
    axios
      .get(url, getConfigAuth())
      .then((res) => setPurchases(res.data))
      .catch((err) => console.log(err));
  };

  const makeAPuschases = () => {
    axios
      .post(url, {}, getConfigAuth())
      .then((res) => {
        console.log(res);
        dispatch(setCartG([]));
      })
      .catch((err) => console.log(err));
  };

  return { purchases, getAllPurchases, makeAPuschases };
};

export default usePurchases;
