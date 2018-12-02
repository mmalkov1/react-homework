import React, { Component } from 'react';

class Filter extends Component {
	state = {};

	render() {
		const { heandleFilter } = this.props;
		return <input type="text" onInput={heandleFilter} />;
	}
}

export default Filter;
