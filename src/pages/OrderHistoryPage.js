import React, { Component } from 'react';
import axios from 'axios';
import Modal from '../components/Modal/Modal';
import OrderHistoryTable from '../components/OrderHistory/OrderHistoryTable';
import ModalInfoHistory from '../components/Modal/ModalHistoryInfo';

class OrderHistory extends Component {
	state = {
		history: [],
		isModalOpen: false,
		itemShowDetails: {},
		typeModalInfo: 'add',
	};

	componentDidMount() {
		axios
			.get('http://localhost:8080/history')
			.then(({ data }) => this.setState({ history: data }));
	}

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

	heandleAddOrderHistory = () => {
		this.setState({
			typeModalInfo: 'add',
		});
		this.heandleOpenModal();
	};

	heandleShowMoreInfo = id => {
		this.setState({
			typeModalInfo: 'info',
		});

		axios
			.get(`http://localhost:8080/history/${id}`)
			.then(({ data }) =>
				this.setState({
					itemShowDetails: data,
				}),
			)

			.then(() => this.heandleOpenModal());
	};

	render() {
		const {
			history,
			isModalOpen,
			itemShowDetails,
			showLoading,
			typeModalInfo,
		} = this.state;
		return (
			<div className="history">
				{isModalOpen && !showLoading && (
					<Modal closeModal={this.heandleCloseModal} isModalOpen={isModalOpen}>
						{typeModalInfo === 'info' && <ModalInfoHistory info={itemShowDetails} />}
					</Modal>
				)}
				<OrderHistoryTable
					history={history}
					heandleShowMoreInfo={this.heandleShowMoreInfo}
				/>
			</div>
		);
	}
}

export default OrderHistory;
