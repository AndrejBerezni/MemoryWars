const incrementTimer = () => {
  return {
    type: "INCREMENT TIMER",
  };
};

const resetTimer = () => {
  return {
    type: "RESET TIMER",
  };
};

export { incrementTimer, resetTimer };
