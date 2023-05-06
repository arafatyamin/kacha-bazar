import { LOAD_PRODUCTS } from "@/store/actionTypes/actionTypes";

export const loadProducts = (data) => {
  return {
    type: LOAD_PRODUCTS,
    payload: data,
  };
};
