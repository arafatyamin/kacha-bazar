let customer = { isLoggedIn: false };

const customerReducer = (state = customer, action) => {
  switch (action.type) {
    case "UPDATE_CUSTOMER":
      console.log(action.customer)
      return { ...state, ...action.customer };
    default:
      return state;
  }
};

export { customerReducer };
