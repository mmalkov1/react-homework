import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuList from '../components/menuList/MenuList';
import CategoryList from '../components/Category/CategoryList';

import * as actions from '../modules/category/categoryActions';
import menuSelectors from '../modules/menu/menuSelectors';
import categorySelectors from '../modules/category/categorySelectors';

class MenuListContainer extends Component {
	render() {
		const { onChange, value, category = [] } = this.props;
		return (
			<>
				<CategoryList category={category} onChange={onChange} value={value} />
				<MenuList {...this.props} />
			</>
		);
	}
}

const mapStateToProps = state => ({
	menu: menuSelectors.getFilteredMenu(state),
	category: categorySelectors.getItems(state),
	value: categorySelectors.getActiveCategory(state),
});

const mapDispatchToProps = {
	onChange: actions.changeCategory,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MenuListContainer);
