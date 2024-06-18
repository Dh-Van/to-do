import React, { useState } from "react";
import PropTypes from "prop-types";

const styleConfig = {
	"[]": { color: "black" },
	"[1]": { color: "red" },
	"[2]": { color: "orange" },
	"[3]": { color: "yellow" },
	"[4]": { color: "green" },
};

// ItemComponent represents a single task.
// It allows the user to edit the task and mark it as completed.
function ItemComponent({ item, updateItem }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editValue, setEditValue] = useState(item);

	// Determine the color based on the item content
	let style = styleConfig[0];
	for (const key in styleConfig) {
		if (item.includes(key)) {
			style = styleConfig[key];
			break;
		}
	}

	// handleEdit is used to enable the editing mode
	const handleEdit = () => {
		setIsEditing(true);
	};

	// handleEditChange is used to update the editValue state whenever the user types in the input field
	const handleEditChange = (event) => {
		setEditValue(event.target.value);
	};

	// handleEditSubmit is used to update the task when the user submits the form
	const handleEditSubmit = (event) => {
		event.preventDefault();
		if (editValue.trim() !== "") {
			updateItem(item, editValue);
			setIsEditing(false);
		}
	};

	return (
		<div className="item-container" style={style}>
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

// ItemComponent.propTypes = {
// 	item: PropTypes.string.isRequired,
// 	updateItem: PropTypes.func.isRequired,
// };

export default ItemComponent;
