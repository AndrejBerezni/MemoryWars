import { combineReducers } from "redux";
import scoreReducer from "./score";
import timerReducer from "./timer";
import gameOnReducer from "./gameOn";

const combinedReducers = combineReducers({
  score: scoreReducer,
  timerRunning: timerReducer,
  gameOn: gameOnReducer,
});

export default combinedReducers;
