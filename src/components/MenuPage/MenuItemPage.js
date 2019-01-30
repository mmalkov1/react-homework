import React from 'react';

const MenuItem = ({
	item: { name, description, image, ingredients = [], price, category },
	handleGoToMenu,
}) => (
	<div>
		<div>
			<h2>{name}</h2>
			<h3>Категория: </h3>
			<p>{category}</p>
			<img className="menu__image" src={image} alt={name} />
			<h3>Описание:</h3> <p>{description}</p>
		</div>
		<div>
			<h3>Ингредиенты:</h3>
			<ul>
				{ingredients.map(el => (
					<li key={el}>{el}</li>
				))}
			</ul>
		</div>
		<h3>Цена:</h3>
		<p> {price}грн.</p>
		<button type="button" onClick={handleGoToMenu}>
			Back to menu
		</button>
	</div>
);

export default MenuItem;
