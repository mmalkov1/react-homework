import React from 'react';
import JsonData from '../data/menu.json';
import Filter from './Filter';
import MenuBody from './MenuBody';

class Menu extends React.Component {
	state = {
		menu: [...JsonData],
	};

	heandleFilterProducts = e => {
		const textFilter = e.target.value;
		this.setState(() => ({
			menu: JsonData.filter(el => el.name.includes(textFilter)),
		}));
	};

	render() {
		const { menu } = this.state;
		return (
			<div className="menu">
				<h2>Menu</h2>
				<Filter heandleFilter={this.heandleFilterProducts} />
				<MenuBody menu={menu} />
			</div>
		);
	}
}

export default Menu;
