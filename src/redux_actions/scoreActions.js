const incrementScore = () => {
  return {
    type: "INCREMENT SCORE",
  };
};

const resetScore = () => {
  return {
    type: "RESET SCORE",
  };
};

export { incrementScore, resetScore };
