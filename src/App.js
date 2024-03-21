// App.js
import React, { useState } from "react";
// import "./App.css";
import "./App.css";
import InputForm from "./inputForm";
import CountdownTimer from "./CountDownTimer";

export default function App() {
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [targetDateTime, setTargetDateTime] = useState("");

  const handleStart = (dateTime) => {
    setTargetDateTime(dateTime);
    setCountdownStarted(true);
  };

  const handleCancel = () => {
    setCountdownStarted(false);
    setTargetDateTime("");
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {!countdownStarted ? (
        <InputForm onStart={handleStart} />
      ) : (
        <CountdownTimer
          targetDateTime={targetDateTime}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
