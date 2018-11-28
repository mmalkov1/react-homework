import React from 'react';

const HeaderNavMenu = ({ items }) =>
	items.map((el, index) => (
		<ul key={index}>
			<li>
				<a href="/">{el}</a>
			</li>
		</ul>
	));

export default HeaderNavMenu;
