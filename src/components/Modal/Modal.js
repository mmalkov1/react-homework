import React, { Component, createRef } from 'react';

class Modal extends Component {
	containerRef = createRef();

	state = {};

	componentDidMount() {
		window.addEventListener('click', this.heandleBackdropClick);
		window.addEventListener('keydown', this.heandleEscKeyPressed);
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.handleBackdropClick);
		window.removeEventListener('keydown', this.heandleEscKeyPressed);
	}

	heandleEscKeyPressed = e => {
		const { closeModal } = this.props;
		if (e.keyCode === 27) {
			return closeModal();
		}
		return false;
	};

	heandleBackdropClick = e => {
		const { isModalOpen, closeModal } = this.props;
		if (isModalOpen && e.target === this.containerRef.current) {
			return closeModal();
		}
		return false;
	};

	render() {
		const { closeModal, children } = this.props;

		return (
			<div className="backdrop" ref={this.containerRef}>
				<div className="modal">
					{children}
					<div className="modal__times" onClick={closeModal}>
						&times;
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
