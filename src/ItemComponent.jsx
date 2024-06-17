import React, { useState } from "react";

function ItemComponent({ item, style, updateItem }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editValue, setEditValue] = useState(item);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleEditChange = (event) => {
		setEditValue(event.target.value);
	};

	const handleEditSubmit = (event) => {
		event.preventDefault();
		if (editValue.trim() !== "") {
			updateItem(item, editValue);
			setIsEditing(false);
		}
	};

	return (
		<div style={style}>
			{isEditing ? (
				<form onSubmit={handleEditSubmit}>
					<input
						type="text"
						value={editValue}
						onChange={handleEditChange}
					/>
				</form>
			) : (
				<div onDoubleClick={handleEdit}>{item}</div>
			)}
		</div>
	);
}

export default ItemComponent;
