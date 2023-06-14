const gameOnReducer = (state = true, action) => {
  switch (action.type) {
    case "GAME ON":
      return true;
    case "GAME OFF":
      return false;
    default:
      return state;
  }
};

export default gameOnReducer;
