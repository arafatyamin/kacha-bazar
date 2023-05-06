import {FETCH_START, LOAD_PRODUCTS} from "@/store/actionTypes/actionTypes";

export const loadingStart = () => {
    return {
        type: FETCH_START,
    }
}
export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data,
    }
}