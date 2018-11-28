import React, { Component } from 'react';
import JsonData from '../data/order-history.json';

class OrderHistory extends Component {
	state = {
		history: [...JsonData],
	};

	render() {
		const { history } = this.state;
		return (
			<div>
				<h2>Order History</h2>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Price</th>
							<th>Delivery address</th>
							<th>Rating</th>
						</tr>
					</thead>
					<tbody>
						{history.map(({ id, date, price, address, rating }) => (
							<tr key={id}>
								<td>{date}</td>
								<td>{price}</td>
								<td>{address}</td>
								<td>{rating}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default OrderHistory;
