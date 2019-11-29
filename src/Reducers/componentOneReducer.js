import { COMPONENT_ONE } from "../actionTypes";

const initialState = {
	text: ""
};

export default (state = initialState, action) => {
	switch (action.type) {
		case COMPONENT_ONE:
			return {
				...state,
				text: action.payload
			};

		default:
			return state;
	}
};
