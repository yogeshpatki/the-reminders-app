import { COMPONENT_TWO } from "../actionTypes";

const initialState = {
	text: ""
};

export default (state = initialState, action) => {
	switch (action.type) {
		case COMPONENT_TWO:
			return {
				...state,
				text: action.payload
			};

		default:
			return state;
	}
};
