const getItems = state => state.menu.items;

const getFilter = state => state.menu.filter;
const getCategory = state => state.category.activeCategory;

const getFilteredMenu = state => {
	const category = getCategory(state);

	if (category === 'all') {
		return getItems(state);
	}

	return getItems(state).filter(el => el.category === category);
};

const getOneItem = (state, id) => {
	const items = getItems(state);

	return items.find(item => item.id === +id);
};

export default { getItems, getFilter, getFilteredMenu, getOneItem };
