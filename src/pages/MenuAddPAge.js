import React from 'react';
import MenuAddItem from '../components/menu/MenuAddItem';
import * as API from '../services/menu-api';

const INITIAL_STATE = {
	name: '',
	description: '',
	image: '',
	category: '',
	categories: [],
	price: '',
};

class MenuAddPage extends React.Component {
	state = { ...INITIAL_STATE };

	componentDidMount() {
		API.getCategories().then(categories => this.setState({ categories }));
	}

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	handleChangeCategory = category => {
		this.setState({ category });
	};

	handleAddItem = e => {
		const { name, description, price, image, category } = this.state;
		e.preventDefault();
		API.addMenuItem({ name, description, price, image, category }).then(() =>
			this.handleBackToMenu(),
		);
	};

	handleBackToMenu = () => {
		const { history } = this.props;
		history.push({
			pathname: `/menu`,
			search: `category=all`,
		});
	};

	render() {
		return (
			<div>
				<h1>Добавление нового элемента</h1>
				<MenuAddItem
					options={this.state}
					handleChange={this.handleChange}
					handleChangeCategory={this.handleChangeCategory}
					handleAddItem={this.handleAddItem}
				/>
			</div>
		);
	}
}

export default MenuAddPage;
