import { COMPONENT_ONE } from "../actionTypes";

export const componentOneAction = () => dispatch =>
	dispatch({
		type: COMPONENT_ONE,
		payload: "Component One"
	});
