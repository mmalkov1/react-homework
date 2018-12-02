import React from 'react';
import HeaderLogo from './HeaderLogo';
import Logo from '../data/logo.png';
import HeaderNavMenu from './HeaderNavMenu';
import HeaderUserMenu from './HeaderUserMenu';
import avatar from '../data/avatar.jpg';
import '../css/index.css';

const INITIAL_USER = [{ name: 'Bob Ross' }];

class Header extends React.Component {
	state = {
		user: [...INITIAL_USER],
	};

	render() {
		const { user } = this.state;
		return (
			<div className="header">
				<HeaderLogo logo={Logo} width={100} height={100} />
				<HeaderNavMenu items={['menu', 'about', 'contacts', 'delivery']} />
				<HeaderUserMenu userName={user[0].name} userLogo={avatar} />
			</div>
		);
	}
}

export default Header;
