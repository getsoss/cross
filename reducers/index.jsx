import { combineReducers } from "redux";
import stationReducer from "./stationReducer"; // 예시 리듀서를 임포트합니다.

const rootReducer = combineReducers({
  place: stationReducer,
});

export default rootReducer;
