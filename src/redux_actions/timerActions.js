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

const stopTimer = () => {
  return {
    type: "STOP TIMER"
  }
}

const startTimer = () => {
  return {
    type: "START TIMER"
  }
}

export { incrementTimer, resetTimer, stopTimer, startTimer };
