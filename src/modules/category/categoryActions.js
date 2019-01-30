import * as types from './categoryActionsType';

const fetchRequest = () => ({
	type: types.FETCH_REQUEST,
});

const fetchSuccess = state => ({
	type: types.FETCH_SUCCESS,
	payload: state,
});

const fetchError = error => ({
	type: types.FETCH_ERROR,
	payload: error,
});

const changeCategory = category => ({
	type: types.CHANGE_CATEGORY,
	payload: category,
});

export { fetchRequest, fetchSuccess, fetchError, changeCategory };
