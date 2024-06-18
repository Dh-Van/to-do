import React, { useState } from "react";

function ItemComponent({ item, style, updateItem }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editValue, setEditValue] = useState(item);
	const [isChecked, setIsChecked] = useState(false);

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

	const handleCheckChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className="item-container" style={{ ...style }}>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleCheckChange}
				className="item-checkbox"
			/>
			{isEditing ? (
				<form onSubmit={handleEditSubmit} className="item-form">
					<input
						type="text"
						value={editValue}
						onChange={handleEditChange}
						className="item-input"
					/>
				</form>
			) : (
				<div onDoubleClick={handleEdit} className="item-text">
					{item}
				</div>
			)}
		</div>
	);
}

export default ItemComponent;
