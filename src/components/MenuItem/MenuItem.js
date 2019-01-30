import React from 'react';

const Note = ({ name, price, image }) => (
	<div style={{ display: 'flex', flexDirection: 'column', padding: '1em' }}>
		<h4>{name}</h4>
		<img src={image} alt={name} style={{ width: '100%', height: '200px' }} />
		<p>{price} грн.</p>
	</div>
);

export default Note;
