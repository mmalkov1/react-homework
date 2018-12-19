import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import * as API from '../services/menu-api';
import MenuBody from '../components/menu/MenuBody';
import CategoryList from '../components/category/categoryList';

class MenuPage extends React.Component {
	state = {
		menu: [],
		categories: [],
	};

	componentDidMount() {
		const category = this.getCategoryFromProps(this.props);
		const { location, history } = this.props;

		if (!category) {
			history.replace({
				pathname: location.pathname,
				search: `category=all`,
			});
			API.getAllMenuItems().then(items =>
				this.setState({
					menu: items,
				}),
			);
		} else if (category && category !== 'all') {
			API.getMenuItemsWithCategory(category).then(menu => this.setState({ menu }));
		} else {
			API.getAllMenuItems().then(items =>
				this.setState({
					menu: items,
				}),
			);
		}

		API.getCategories().then(cat =>
			this.setState({
				categories: cat,
			}),
		);
	}

	componentDidUpdate(prevProps) {
		const prevCategory = this.getCategoryFromProps(prevProps);
		const nextCategory = this.getCategoryFromProps(this.props);

		if (prevCategory !== nextCategory) {
			API.getMenuItemsWithCategory(nextCategory).then(menu =>
				this.setState({ menu }),
			);
		}
	}

	getCategoryFromProps = props =>
		queryString.parse(props.location.search).category;

	handleChangeCategory = category => {
		const { history, location } = this.props;
		history.push({
			pathname: location.pathname,
			search: `category=${category}`,
		});
	};

	render() {
		const { menu, categories } = this.state;
		return (
			<div className="menu">
				<h2>Menu</h2>
				<Link to="/menu/add">Добавить элемент меню</Link>
				<hr />
				<CategoryList
					options={categories}
					onChange={this.handleChangeCategory}
					value={this.getCategoryFromProps(this.props)}
				/>
				<hr />
				<MenuBody menu={menu} />
			</div>
		);
	}
}

export default MenuPage;
