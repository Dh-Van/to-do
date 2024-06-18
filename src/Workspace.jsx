import React, { useState } from "react";
import PropTypes from "prop-types";
import InputComponent from "./InputComponent";
import ItemComponent from "./ItemComponent";

// Workspace is the main component where all the tasks are displayed and managed.
// It maintains the state of all tasks and provides functions to manipulate them.
function Workspace() {
	// items hold the list of tasks
	const [items, setItems] = useState([]);

	// updateItem is used to replace an old task with a new one
	const updateItem = (oldItem, newItem) => {
		setItems(
			items.map((item) =>
				item.content === oldItem ? { ...item, content: newItem } : item
			)
		);
	};

	// addItem is used to add a new task
	const addItem = (item) => {
		setItems((prevItems) => [
			...prevItems,
			{ id: Date.now(), content: item },
		]);
	};

	return (
		<div className="workspace">
			{items.map((item) => (
				<ItemComponent
					key={item.id}
					item={item.content}
					updateItem={updateItem}
				/>
			))}
			<InputComponent addItem={addItem} />
		</div>
	);
}

// Workspace.propTypes = {
// 	items: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			content: PropTypes.string.isRequired,
// 		})
// 	),
// 	setItems: PropTypes.func.isRequired,
// };

export default Workspace;
