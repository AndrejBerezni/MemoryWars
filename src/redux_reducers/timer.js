const timerReducer = (state = false, action) => {
  switch (action.type) {
    case "TIMER ON":
      return true;
    case "TIMER OFF":
      return false;
    default:
      return state;
  }
};

export default timerReducer;
