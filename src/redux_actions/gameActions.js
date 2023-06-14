const startGame = () => {
  return {
    type: "GAME ON",
  };
};

const endGame = () => {
  return {
    type: "GAME OFF",
  };
};

export { startGame, endGame };
