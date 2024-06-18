import React, { useEffect, useRef, useState } from "react";

function InputComponent({ inputValue, setInputValue, setItems }) {
	const inputRef = useRef(null);
	const [isEditing, setIsEditing] = useState(false);

	const handleButtonClick = () => {
		setIsEditing(true);
	};

	const handleInputBlur = () => {
		setIsEditing(false);
		if (inputValue.trim() !== "") {
			setItems((prevItems) => [...prevItems, inputValue]);
			setInputValue("");
		}
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleInputKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			if (inputValue.trim() !== "") {
				setItems((prevItems) => [...prevItems, inputValue]);
				setInputValue("");
			}
		}
	};

	useEffect(() => {
		if (isEditing) {
			inputRef.current.focus();
		}
	}, [isEditing]);

	return (
		<>
			{isEditing ? (
				<input
					ref={inputRef}
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
					onKeyPress={handleInputKeyPress}
				/>
			) : (
				<button onClick={handleButtonClick}>Add Task</button>
			)}
		</>
	);
}

export default InputComponent;
