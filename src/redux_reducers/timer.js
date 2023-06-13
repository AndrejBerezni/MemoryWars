const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT TIMER":
      return state + 1;
    case "RESET TIMER":
      return 0;
    default:
      return state;
  }
};

export default timerReducer;
