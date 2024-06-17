import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ItemComponent from "./ItemComponent";

function Workspace() {
	const [items, setItems] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const styleConfig = {
		"[1]": { color: "red" },
		"[2]": { color: "orange" },
		"[3]": { color: "yellow" },
		"[4]": { color: "green" },
	};

	const updateItem = (oldItem, newItem) => {
		setItems(items.map((item) => (item === oldItem ? newItem : item)));
	};

	const getStyle = (item) => {
		for (let key in styleConfig) {
			if (item.includes(key)) {
				return styleConfig[key];
			}
		}
		return {};
	};

	return (
		<div className="workspace">
			{items.map((item, index) => (
				<ItemComponent
					key={index}
					item={item}
					style={getStyle(item)}
					updateItem={updateItem}
				/>
			))}
			<InputComponent
				inputValue={inputValue}
				setInputValue={setInputValue}
				isEditing={isEditing}
				setIsEditing={setIsEditing}
				setItems={setItems}
			/>
		</div>
	);
}

export default Workspace;
