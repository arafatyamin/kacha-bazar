const { COUPON_FETCH_START, COUPON_FETCH_SUCCESS, COUPON_FETCH_FAILURE } = require("@/store/actionTypes/actionTypes");

const initialState = {
    coupons:[],
    loading:false,
    error:null
}
const couponReducer = (state=initialState, action) => {
    switch (action.type) {
        case COUPON_FETCH_START:
            return {
                ...state,
                loading:true
            }
        case COUPON_FETCH_SUCCESS:
            return {
                ...start,
                coupons:[...state.coupons, action.payload],
                loading:false
            }
        case COUPON_FETCH_FAILURE:
            return {
                ...start,
                loading:false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default couponReducer;