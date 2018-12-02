import React, { Component } from 'react';

const INITIAL_DEFAULT = {
	address: '',
	date: '',
	price: '',
	rating: '',
};

class ModalAddHistory extends Component {
	state = { ...INITIAL_DEFAULT };

	heandleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { handleAddHistoryItem } = this.props;
		return handleAddHistoryItem(this.state);
	};

	render() {
		const { address, date, price, rating } = this.state;
		return (
			<div>
				<h2>Add history modal</h2>
				<form className="addform" onSubmit={this.handleSubmit}>
					<div className="addform__group">
						<label htmlFor="">Address</label>
						<input
							type="text"
							name="address"
							onChange={this.heandleChange}
							value={address}
						/>
					</div>
					<div className="addform__group">
						<label htmlFor="">Date</label>
						<input
							type="text"
							name="date"
							onChange={this.heandleChange}
							value={date}
						/>
					</div>
					<div className="addform__group">
						<label htmlFor="">Price</label>
						<input
							type="text"
							name="price"
							onChange={this.heandleChange}
							value={price}
						/>
					</div>
					<div className="addform__group">
						<label htmlFor="">Rating</label>
						<input
							type="text"
							name="rating"
							onChange={this.heandleChange}
							value={rating}
						/>
					</div>
					<button type="submit">Добавить</button>
				</form>
			</div>
		);
	}
}

export default ModalAddHistory;
