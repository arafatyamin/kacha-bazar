const userReducer = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
