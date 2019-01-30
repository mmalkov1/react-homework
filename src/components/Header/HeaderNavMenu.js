import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavMenu = ({ items }) =>
	items.map(el => (
		<ul key={el}>
			<li className="link-item">
				<NavLink to={`/${el}`} className="link" activeClassName="active">
					{el}
				</NavLink>
			</li>
		</ul>
	));

export default HeaderNavMenu;
