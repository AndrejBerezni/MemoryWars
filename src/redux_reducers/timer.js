const initialState = {
  value: 0,
  isRunning: false
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT TIMER":
      return {...state, value: state.value + 1};
    case "RESET TIMER":
      return {state, value: 0};
    case "STOP TIMER":
      return {...state, isRunning: false};
    case "START TIMER":
      return {...state, isRunning: true}
    default:
      return state;
  }
};

export default timerReducer;
