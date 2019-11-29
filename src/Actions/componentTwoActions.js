import { COMPONENT_TWO } from "../actionTypes";

export const componentTwoAction = () => dispatch =>
	dispatch({
		type: COMPONENT_TWO,
		payload: "Component Two"
	});
