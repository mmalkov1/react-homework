import React from 'react';

const MenuCard = ({ id, image, name, price }) => (
	<div key={id} className="menu__product">
		<img src={image} alt={name} className="menu__image" width="150" />
		<h5>{name}</h5>
		<p>{price}грн.</p>
	</div>
);

export default MenuCard;
