import axios from 'axios';

const BASE_URL = 'http://localhost:8080/history';

const getAllHistory = () => axios.get(BASE_URL).then(response => response.data);

const getHistoryById = id =>
	axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteHistoryById = id =>
	axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addHistoryItem = item =>
	axios.post(BASE_URL, item).then(response => response.data);

export { getAllHistory, getHistoryById, deleteHistoryById, addHistoryItem };
