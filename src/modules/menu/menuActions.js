import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './menuActionTypes';

const fetchRequest = () => ({
	type: FETCH_REQUEST,
});

const fetchSuccess = menu => ({
	type: FETCH_SUCCESS,
	payload: menu,
});

const fetchError = error => ({
	type: FETCH_ERROR,
	payload: error,
});

export default { fetchRequest, fetchSuccess, fetchError };
