import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuItem from '../components/menu/MenuItem';
import * as API from '../services/menu-api';

class MenuItemPage extends React.Component {
	state = {
		menuItem: {},
	};

	componentDidMount() {
		const { match } = this.props;
		API.getMenuItemById(match.params.id).then(item =>
			this.setState({
				menuItem: item,
			}),
		);
	}

	handleGoToMenu = () => {
		const {
			location: { state },
			history,
		} = this.props;

		if (state) {
			history.push({
				pathname: state.from.pathname,
				search: state.from.search,
			});
		} else {
			history.push({
				pathname: '/menu',
				search: '',
			});
		}
	};

	render() {
		const { menuItem } = this.state;
		return <MenuItem menuItem={menuItem} handleGoToMenu={this.handleGoToMenu} />;
	}
}

export default withRouter(MenuItemPage);
