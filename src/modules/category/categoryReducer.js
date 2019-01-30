import { combineReducers } from 'redux';
import * as types from './categoryActionsType';

const categoryReducer = (state = [], { type, payload }) => {
	switch (type) {
		case types.FETCH_SUCCESS:
			return payload;

		default:
			return state;
	}
};

const activeCategoryReducer = (state = 'all', { type, payload }) => {
	switch (type) {
		case types.CHANGE_CATEGORY:
			return payload;

		default:
			return state;
	}
};

export default combineReducers({
	items: categoryReducer,
	activeCategory: activeCategoryReducer,
});
