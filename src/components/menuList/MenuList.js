import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';

const MenuList = ({ menu = [], match, location }) => (
	<div
		style={{
			display: 'flex',
			flexWrap: 'wrap',
			maxWidth: 1440,
			marginRight: 'auto',
			marginLeft: 'auto',
			padding: '0 16px',
			marginTop: 32,
		}}
	>
		{menu.map(item => (
			<Link
				key={item.id}
				to={{
					pathname: `${match.url}/${item.id}`,
					state: { from: location },
				}}
				className="menu-item-link"
			>
				<MenuItem {...item} />
			</Link>
		))}
	</div>
);

export default MenuList;
