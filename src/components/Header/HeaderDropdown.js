import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDropdown = () => (
	<div className="usermenu__dropdown">
		<ul>
			<li>
				<Link to="/account">Account</Link>
			</li>
			<li>
				<Link to="/orderhistory">order history</Link>
			</li>
			<li>
				<a href="/">meal planner</a>
			</li>
		</ul>
		<button type="button">Logout</button>
	</div>
);

export default HeaderDropdown;
