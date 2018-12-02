import React, { Component } from 'react';

import MenuCard from './MenuCard';

class MenuBody extends Component {
	state = {};

	render() {
		const { menu } = this.props;

		return (
			<div className="menu__wrapper">
				{menu.map(({ id, image, description, name, price }) => (
					<MenuCard
						id={id}
						image={image}
						description={description}
						name={name}
						price={price}
						key={id}
					/>
				))}
			</div>
		);
	}
}

export default MenuBody;
