import React from 'react';

const HeaderNavMenu = ({ items }) =>
	items.map(el => (
		<ul key={el}>
			<li>
				<a href="/">{el}</a>
			</li>
		</ul>
	));

export default HeaderNavMenu;
