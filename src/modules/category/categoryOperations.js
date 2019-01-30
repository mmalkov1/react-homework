import axios from 'axios';
import * as actions from './categoryActions';

const fetchAllCategoryItems = () => dispatch => {
	dispatch(actions.fetchRequest());

	axios
		.get('http://localhost:8080/categories')
		.then(response => dispatch(actions.fetchSuccess(response.data)))
		.catch(error => dispatch(actions.fetchError(error)));
};

export default { fetchAllCategoryItems };
