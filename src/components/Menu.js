import React from 'react';
import JsonData from '../data/menu.json';
import MenuCard from './MenuCard';

class Menu extends React.Component {
	state = {
		menu: [...JsonData],
	};

	heandleFilterProducts = e => {
		const textFilter = e.target.value;
		this.setState(() => ({
			menu: JsonData.filter(el => el.name.indexOf(textFilter) !== -1),
		}));
	};

	render() {
		const { menu } = this.state;
		return (
			<div className="menu">
				<h2>Menu</h2>
				<div>
					<input type="text" onInput={e => this.heandleFilterProducts(e)} />
				</div>
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
			</div>
		);
	}
}

export default Menu;
