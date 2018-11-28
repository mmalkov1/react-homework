import React from 'react';
import SignUpForm from './signUpForm';
import SignInForm from './SignInForm';
import OrderHistory from './OrderHistory';
import Menu from './Menu';
import Header from './Header';
import '../css/index.css';

class App extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<h1>Foody</h1>
				<Header />
				<SignUpForm />
				<SignInForm />
				<OrderHistory />
				<Menu />
			</div>
		);
	}
}

export default App;
