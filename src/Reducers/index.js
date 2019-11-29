import { combineReducers } from "redux";

// Reducers
import componentOneReducer from "./componentOneReducer";
import componentTwoReducer from "./componentTwoReducer";

export default combineReducers({
	componentOne: componentOneReducer,
	componentTwo: componentTwoReducer
});
