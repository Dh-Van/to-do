import React, { useEffect, useRef } from "react";

function InputComponent({
	inputValue,
	setInputValue,
	isEditing,
	setIsEditing,
	setItems,
}) {
	const inputRef = useRef(null);

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
		<input
			ref={inputRef}
			value={inputValue}
			onChange={handleInputChange}
			onBlur={handleInputBlur}
			onKeyPress={handleInputKeyPress}
		/>
	);
}

export default InputComponent;
