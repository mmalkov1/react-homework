import React from 'react';

const CategoryList = ({ options, value, onChange }) => (
	<select value={value} onChange={e => onChange(e.target.value)}>
		<option>all</option>
		{options.map(o => (
			<option key={o.id}>{o.name}</option>
		))}
	</select>
);

export default CategoryList;
