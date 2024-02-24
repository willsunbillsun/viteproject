import React, { useState } from "react";

const TimeInputExample = () => {
  // State to hold start and end times
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Event handlers for input changes
  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the start and end times
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
  };

  return (
    <div>
      <h2>Time Input Example</h2>

      <form onSubmit={handleSubmit}>
        {/* Start Time input */}
        <label>
          Start:
          <input
            type="time"
            value={startTime}
            onChange={handleStartTimeChange}
          />
        </label>

        {/* End Time input */}
        <label>
          End:
          <input type="time" value={endTime} onChange={handleEndTimeChange} />
        </label>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      <h2>Start Time: {startTime}</h2>
      <h2>End Time: {endTime}</h2>
    </div>
  );
};

export default TimeInputExample;
