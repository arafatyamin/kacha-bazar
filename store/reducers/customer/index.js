let customer = {};

const customerReducer = (state = customer, action) => {
  switch (action.type) {
    case "UPDATE_CUSTOMER":
      return { ...state, ...action.customer };
    default:
      return state;
  }
};

export { customerReducer };
