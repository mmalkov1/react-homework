import React from 'react';

const MenuCard = ({ id, image, name, description, price }) => (
	<div key={id} className="menu__product">
		<img src={image} alt={name} className="menu__image" />
		<h5>{name}</h5>
		<p>{description}</p>
		<p>{price}грн.</p>
	</div>
);

export default MenuCard;
