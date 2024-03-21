// InputForm.js
import React, { useState } from "react";

function InputForm({ onStart }) {
  const [targetDateTime, setTargetDateTime] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTargetDateTime(value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    const isValid = validateInput(targetDateTime);
    if (!isValid) {
      setError("Please enter a valid future date and time.");
      return;
    }

    // Start countdown
    onStart(targetDateTime);
  };

  const validateInput = (dateTime) => {
    const targetDate = new Date(dateTime);
    const now = new Date();
    return targetDate > now;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="datetime-local"
        value={targetDateTime}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Start Countdown</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default InputForm;
