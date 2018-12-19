import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MenuPage from '../pages/MenuPage';
import MenuAddPage from '../pages/MenuAddPAge';
import MenuItemPage from '../pages/MenuItemPage';

const App = () => (
	<div>
		<NavLink exact to="/" className="link" activeClassName="active">
			Главная
		</NavLink>
		<NavLink to="/menu" className="link" activeClassName="active">
			Меню
		</NavLink>
		<Switch>
			<Route path="/menu/add" component={MenuAddPage} />
			<Route path="/menu/:id" component={MenuItemPage} />
			<Route path="/menu" component={MenuPage} />
			<Route path="/" component={MainPage} />
		</Switch>
	</div>
);

export default App;
