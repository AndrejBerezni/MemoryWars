const gameOnReducer = (state = false, action) => {
  switch (action.type) {
    case "GAME ON":
      return true;
    case "GAME OVER":
      return false;
    default:
      return state;
  }
};

export default gameOnReducer;
