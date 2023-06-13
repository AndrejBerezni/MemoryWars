import { combineReducers } from "redux";
import scoreReducer from "./score";
import timerReducer from "./timer";
import gameOnReducer from "./gameOn";

const combinedReducers = combineReducers({
  score: scoreReducer,
  timer: timerReducer,
  gameOn: gameOnReducer,
});

export default combinedReducers;
