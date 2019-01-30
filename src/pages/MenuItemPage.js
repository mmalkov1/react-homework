import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItemPage from '../components/MenuPage/MenuItemPage';
import menuSelectors from '../modules/menu/menuSelectors';

class MenuItemPageContainer extends Component {
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
		const { item = [] } = this.props;

		return <MenuItemPage item={item} handleGoToMenu={this.handleGoToMenu} />;
	}
}

const mapStateToProps = (state, ownProps) => ({
	item: menuSelectors.getOneItem(state, ownProps.match.params.id),
});

export default connect(
	mapStateToProps,
	null,
)(MenuItemPageContainer);
