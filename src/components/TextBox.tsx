import { SetStateAction, useState } from "react";

const TextBoxExample = () => {
  // State to hold the value of the text box
  const [textBoxValue, setTextBoxValue] = useState("");

  // Event handler to update the state when the text box value changes
  const handleTextBoxChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTextBoxValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="textBox">Enter Text:</label>
      {/* Text box with an event handler */}
      <input
        type="text"
        id="textBox"
        value={textBoxValue}
        onChange={handleTextBoxChange}
      />
      {/* Display the entered text */}
      <p>You entered: {textBoxValue}</p>
    </div>
  );
};

export default TextBoxExample;
