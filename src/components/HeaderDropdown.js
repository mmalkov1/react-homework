import React from 'react';

const HeaderDropdown = () => (
	<div className="usermenu__dropdown">
		<ul>
			<li>
				<a href="/">account</a>
			</li>
			<li>
				<a href="/">order history</a>
			</li>
			<li>
				<a href="/">meal planner</a>
			</li>
		</ul>
		<button type="button">Logout</button>
	</div>
);

export default HeaderDropdown;
