import {FETCH_CRICKET, FETCH_CRICKET_SUCCESS, FETCH_CRICKET_PENDING} from "./actions";

var defaultState = {};

export const cricketReducer = (state, action) => {

	console.log(action.type);
	switch(action.type)
	{
		

		case FETCH_CRICKET_SUCCESS:
			return {
				data: action.payload
			};

		case FETCH_CRICKET_PENDING:
			console.log('got pending');
			return {
				state,
				isFetching: true
			};

		default:
			return state;
	}

};