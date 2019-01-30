import axios from 'axios';
import actions from './menuActions';

const fetchAllMenuItems = () => dispatch => {
	dispatch(actions.fetchRequest());

	axios
		.get('http://localhost:8080/menu')
		.then(response => dispatch(actions.fetchSuccess(response.data)))
		.catch(error => dispatch(actions.fetchError(error)));
};

export default { fetchAllMenuItems };
