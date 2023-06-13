import { combineReducers } from "redux";
import scoreReducer from "./score";
import timerReducer from "./timer";

const combinedReducers = combineReducers({
  score: scoreReducer,
  timerRunning: timerReducer,
});

export default combinedReducers;
