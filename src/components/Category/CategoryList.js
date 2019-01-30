import React from 'react';

const CategoryList = ({ category, onChange, value }) => (
	<div>
		<select value={value} onChange={e => onChange(e.target.value)}>
			<option>all</option>
			{category.map(o => (
				<option key={o.id}>{o.name}</option>
			))}
		</select>
	</div>
);

export default CategoryList;
