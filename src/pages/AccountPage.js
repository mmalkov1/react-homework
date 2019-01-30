import React, { Component } from 'react';

import AccountInfo from '../components/Account/AccountInfo';
import AccountEditProfile from '../components/Account/AccountEditProfile';
import Avatar from '../data/avatar.jpg';

class AccountPage extends Component {
	state = {
		user: {
			name: 'Bob Ross',
			phone: '050-123-45-67',
			image: Avatar,
			mail: 'test@test.com',
		},
	};

	render() {
		const { user } = this.state;
		return (
			<>
				<h1>Account Page</h1>
				<div className="account">
					<AccountInfo user={user} />
					<AccountEditProfile />
				</div>
			</>
		);
	}
}

export default AccountPage;
