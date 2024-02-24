import React, { useState, ChangeEvent, MouseEvent } from "react";

const InputListExample = () => {
  // State to hold the list of items
  const [itemList, setItemList] = useState([]);

  // State to hold the current input value
  const [inputValue, setInputValue] = useState("");

  // Event handler to update the input value as the user types
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Event handler to add the current input value to the list
  const handleAddItem = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setItemList((prevList) => [...prevList, inputValue.trim()]);
      setInputValue(""); // Clear the input field after adding an item
    }
  };

  return (
    <div>
      <h2>Input Items Here:</h2>

      {/* Text input with an event handler */}
      <input type="text" value={inputValue} onChange={handleInputChange} />

      {/* Button to add the input value to the list */}
      <button onClick={handleAddItem}>Add Item</button>

      {/* Display the list of items */}
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputListExample;
