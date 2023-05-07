import { ADD_TO_CART, DECREASE_FROM_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload:data
    }
}
export const decreaseFromCart = (data) => {
    return {
        type: DECREASE_FROM_CART,
        payload:data
    }
}
export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        payload:data
    }
}