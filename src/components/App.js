import React, { Component } from 'react';
import SignUpForm from './signUpForm';
import SignInForm from './SignInForm';
import OrderHistory from './OrderHistory';
import Menu from './Menu';
import Header from './Header';
import Modal from './Modal';
import ModalTest from './ModalTest';
import '../css/index.css';

class App extends Component {
	state = {
		isModalOpen: false,
	};

	heandleOpenModal = () => {
		this.setState({
			isModalOpen: true,
		});
	};

	heandleCloseModal = () => {
		this.setState({
			isModalOpen: false,
		});
	};

	render() {
		const { isModalOpen } = this.state;
		return (
			<div>
				{isModalOpen && (
					<Modal closeModal={this.heandleCloseModal} isModalOpen={isModalOpen}>
						<ModalTest />
					</Modal>
				)}
				<h1>Foody</h1>
				<Header />
				<div className="modal__block">
					<h2>Modal Block</h2>
					<button type="button" onClick={this.heandleOpenModal}>
						Open Modal
					</button>
				</div>

				<SignUpForm />
				<SignInForm />
				<OrderHistory />
				<Menu />
			</div>
		);
	}
}

export default App;
