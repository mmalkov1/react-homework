import React from 'react';

const INITIAL_DEFAULT = {
	login: '',
	email: '',
	phone: '',
	password: '',
	passwordConfirm: '',
	error: '',
};

class SignUpForm extends React.Component {
	state = { ...INITIAL_DEFAULT };

	heandleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	heandleSubmit = e => {
		const { password, passwordConfirm } = this.state;
		e.preventDefault();
		if (password !== passwordConfirm) {
			return this.setState({ error: 'Пароли не совпадают!' });
		}
		return this.reset();
	};

	reset = () => {
		this.setState({ ...INITIAL_DEFAULT });
	};

	render() {
		const { login, email, phone, password, passwordConfirm, error } = this.state;
		return (
			<form className="form" onSubmit={this.heandleSubmit}>
				<span>{error}</span>
				<h2>SignUp form</h2>
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
				<label htmlFor="email">
					E-mail:
					<input
						type="text"
						name="email"
						placeholder="Enter e-mail"
						value={email}
						onChange={this.heandleChange}
						className="form__input"
					/>
				</label>
				<label htmlFor="phone">
					Phone:
					<input
						type="text"
						name="phone"
						placeholder="Enter phone number"
						value={phone}
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
				<label>
					Confirm password:
					<input
						type="password"
						name="passwordConfirm"
						placeholder="Confirm password"
						value={passwordConfirm}
						onChange={this.heandleChange}
						className="form__input"
					/>
				</label>
				<button type="submit">SignUp</button>
			</form>
		);
	}
}

export default SignUpForm;
