import { ORDER_CONFIRM } from "../actionTypes/actionTypes";

export const orderConfirm = (data) => {
  return {
    type: ORDER_CONFIRM,
    payload: data,
  };
};
