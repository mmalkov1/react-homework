import React from 'react';
import HeaderLogo from './HeaderLogo';
import Logo from '../data/logo.png';
import HeaderNavMenu from './HeaderNavMenu';
import HeaderUserMenu from './HeaderUserMenu';
import avatar from '../data/avatar.jpg';
import '../css/index.css';

const INITIAL_MENU = ['menu', 'about', 'contacts', 'delivery'];
const INITIAL_USER = [{ name: 'Bob Ross' }];

class Header extends React.Component {
	state = {
		headerMenu: [...INITIAL_MENU],
		user: [...INITIAL_USER],
	};

	render() {
		const { headerMenu, user } = this.state;
		return (
			<div className="header">
				<HeaderLogo logo={Logo} width={100} height={100} />
				<HeaderNavMenu items={headerMenu} />
				<HeaderUserMenu userName={user[0].name} userLogo={avatar} />
			</div>
		);
	}
}

export default Header;
