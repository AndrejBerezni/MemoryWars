const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT SCORE":
      return state + 1;
    case "RESET SCORE":
      return 0;
    default:
      return state;
  }
};

export default scoreReducer;
