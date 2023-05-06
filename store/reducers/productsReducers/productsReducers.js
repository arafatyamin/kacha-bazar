import {FETCH_START, LOAD_PRODUCTS} from "@/store/actionTypes/actionTypes";

const initialState = {
    products: [],
    loading: false,
    error: null,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                loading: true,
                error: null,
            }
        case LOAD_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null,
            }
        default:
                return state;
    }
}

export default productsReducer;