import React from 'react';
import CategoryList from '../category/categoryList';

const AddItemMenu = ({
	options: { name, description, image, categories = [], price },
	handleChange,
	handleChangeCategory,
	handleAddItem,
}) => (
	<div>
		<form onSubmit={handleAddItem}>
			<div>
				<label>Название</label>
				<input type="text" name="name" value={name} onChange={handleChange} />
			</div>
			<div>
				<label>Описание: </label>
				<textarea
					cols="30"
					rows="10"
					name="description"
					value={description}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Фото товара:</label>
				<input type="text" name="image" value={image} onChange={handleChange} />
			</div>
			<div>
				<label>Цена: </label>
				<input type="text" name="price" value={price} onChange={handleChange} />
			</div>
			<div>
				<label>Категория: </label>
				<CategoryList options={categories} onChange={handleChangeCategory} />
			</div>
			<button type="submit">Add</button>
		</form>
	</div>
);

export default AddItemMenu;
