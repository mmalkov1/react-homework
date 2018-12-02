import React, { Component } from 'react';
import * as API from '../services/history-api';
import Modal from './Modal';
import Loading from './Loading';
import ModalInfoHistory from './ModalInfoHistory';
import ModalAddHistory from './ModalAdd';

class OrderHistory extends Component {
	state = {
		history: [],
		isModalOpen: false,
		itemShowDetails: {},
		showLoading: false,
		typeModalInfo: 'add',
	};

	componentDidMount() {
		API.getAllHistory().then(history => this.setState({ history }));
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
			showLoading: true,
			typeModalInfo: 'info',
		});

		API.getHistoryById(id)
			.then(item =>
				this.setState({
					itemShowDetails: item,
				}),
			)
			.then(() => {
				this.setState({
					showLoading: false,
				});
			})
			.then(() => this.heandleOpenModal());
	};

	handleAddHistoryItem = item => {
		API.addHistoryItem(item).then(newitem => {
			this.setState(prevState => ({
				history: [...prevState.history, newitem],
			}));
		});
		this.heandleCloseModal();
	};

	handleDeleteItem = id => {
		API.deleteHistoryById(id).then(success => {
			if (!success) return;
			this.setState(prevState => ({
				history: prevState.history.filter(item => item.id !== id),
			}));
		});
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
				{showLoading && <Loading />}
				{isModalOpen && !showLoading && (
					<Modal closeModal={this.heandleCloseModal} isModalOpen={isModalOpen}>
						{typeModalInfo === 'info' && <ModalInfoHistory info={itemShowDetails} />}
						{typeModalInfo === 'add' && (
							<ModalAddHistory handleAddHistoryItem={this.handleAddHistoryItem} />
						)}
					</Modal>
				)}

				<h2>Order History</h2>
				<button type="button" onClick={this.heandleAddOrderHistory}>
					Добавить
				</button>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Price</th>
							<th>Delivery address</th>
							<th>Rating</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>
						{history.map(({ id, date, price, address, rating }) => (
							<tr key={id}>
								<td>{date}</td>
								<td>{price}</td>
								<td>{address}</td>
								<td>{rating}</td>
								<td>
									<button type="button" onClick={() => this.heandleShowMoreInfo(id)}>
										Детальнее
									</button>
									<button type="button" onClick={() => this.handleDeleteItem(id)}>
										Удалить
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default OrderHistory;
