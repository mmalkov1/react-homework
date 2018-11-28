import React from 'react';

const INITIAL_DEFAULT = {
	login: '',
	password: '',
};

class SignInForm extends React.Component {
	state = { ...INITIAL_DEFAULT };

	heandleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	heandleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		return this.reset();
	};

	reset = () => {
		this.setState({ ...INITIAL_DEFAULT });
	};

	render() {
		const { login, password } = this.state;
		return (
			<form className="form" onSubmit={this.heandleSubmit}>
				<h2>SignIn form</h2>
				<label>
					Login:
					<input
						type="text"
						name="login"
						placeholder="Enter Login"
						value={login}
						onChange={this.heandleChange}
						className="form__input"
					/>
				</label>

				<label>
					Password:
					<input
						type="password"
						name="password"
						placeholder="Enter password"
						value={password}
						onChange={this.heandleChange}
						className="form__input"
					/>
				</label>
				<button type="submit">SignUp</button>
			</form>
		);
	}
}

export default SignInForm;
