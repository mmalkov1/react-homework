import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import MenuCard from './MenuCard';

class MenuBody extends Component {
	state = {};

	render() {
		const { menu, match, location } = this.props;

		return (
			<div className="menu__wrapper">
				{menu.map(({ id, image, name, price }) => (
					<Link
						to={{
							pathname: `${match.url}/${id}`,
							state: { from: location },
						}}
						key={id}
					>
						<MenuCard id={id} image={image} name={name} price={price} key={id} />
					</Link>
				))}
			</div>
		);
	}
}

export default withRouter(MenuBody);
