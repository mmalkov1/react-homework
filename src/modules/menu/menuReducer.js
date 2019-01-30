import { combineReducers } from 'redux';
import * as types from './menuActionTypes';

function menuReducer(state = [], { type, payload }) {
	switch (type) {
		case types.FETCH_SUCCESS:
			return payload;

		default:
			return state;
	}
}

export default combineReducers({
	items: menuReducer,
});
