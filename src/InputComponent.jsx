import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// InputComponent is responsible for capturing user input.
// It uses a controlled component for the input field to directly control its value and respond to changes.
function InputComponent({ addItem }) {
	const inputRef = useRef(null);
	const [inputValue, setInputValue] = useState("");

	// handleInputChange is used to update the inputValue state whenever the user types in the input field
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	// handleInputSubmit is used to add a new task when the user presses Enter or blurs the input field
	const handleInputSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim() !== "") {
			addItem(inputValue);
			setInputValue("");
		}
	};

	// useEffect is used to focus the input field whenever it is rendered
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form onSubmit={handleInputSubmit}>
			<input
				ref={inputRef}
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
}

// InputComponent.propTypes = {
// 	addItem: PropTypes.func.isRequired,
// };

export default InputComponent;
