import React from 'react';

const OrderHistoryTable = ({ history, heandleShowMoreInfo }) => (
	<>
		<h2>Order History</h2>
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
							<button type="button" onClick={() => heandleShowMoreInfo(id)}>
								Детальнее
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</>
);

export default OrderHistoryTable;
