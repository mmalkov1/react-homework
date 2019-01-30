import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import menuOperations from '../modules/menu/menuOperations';
import categoryOperations from '../modules/category/categoryOperations';

import Header from './Header/Header';
import AccountPage from '../pages/AccountPage';
import DeliveryPage from '../pages/DeliveryPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import MenuListPage from '../pages/MenuListPage';
import MenuItemPage from '../pages/MenuItemPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';

class App extends Component {
	componentDidMount() {
		const { fetchMenuItems, fetchCategoryItems } = this.props;
		fetchMenuItems();
		fetchCategoryItems();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/menu/:id" component={MenuItemPage} />
					<Route path="/menu" component={MenuListPage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/account" component={AccountPage} />
					<Route path="/contacts" component={ContactPage} />
					<Route path="/delivery" component={DeliveryPage} />
					<Route path="/orderhistory" component={OrderHistoryPage} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = {
	fetchMenuItems: menuOperations.fetchAllMenuItems,
	fetchCategoryItems: categoryOperations.fetchAllCategoryItems,
};

export default connect(
	null,
	mapDispatchToProps,
)(App);
