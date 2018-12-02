import React from 'react';

const ModalInfoHistory = ({ info }) => (
	<div>
		<h1>Header</h1>
		<p>ID: {info.id}</p>
		<p>Address: {info.address}</p>
		<p>Date: {info.date}</p>
		<p>Price: {info.price}</p>
		<p>Rating: {info.rating}</p>
	</div>
);

export default ModalInfoHistory;
