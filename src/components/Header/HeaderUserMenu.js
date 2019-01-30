import React, { Component, createRef } from 'react';

import HeaderDropdown from './HeaderDropdown';

class UserMenu extends Component {
	containerRef = createRef();

	state = {
		isDropdownOpen: false,
	};

	componentDidMount() {
		window.addEventListener('click', this.heandleWindowClick);
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.handleWindowClick);
	}

	openDropdown = () => {
		this.setState({
			isDropdownOpen: true,
		});
	};

	closeDropdown = () => {
		this.setState({
			isDropdownOpen: false,
		});
	};

	heandleWindowClick = e => {
		const { isDropdownOpen } = this.state;

		const isTargetInContainer = this.containerRef.current.contains(e.target);

		if (isDropdownOpen && !isTargetInContainer) {
			this.closeDropdown();
		}
	};

	render() {
		const { isDropdownOpen } = this.state;

		const { userLogo, userName } = this.props;

		return (
			<div
				className="usermenu"
				ref={this.containerRef}
				onClick={this.openDropdown}
			>
				<img
					className="usermenu__avatar"
					src={userLogo}
					alt={userName}
					width="60"
					height="60"
				/>

				<span className="usermenu__name">{userName}</span>

				{isDropdownOpen && <HeaderDropdown />}
			</div>
		);
	}
}

export default UserMenu;
