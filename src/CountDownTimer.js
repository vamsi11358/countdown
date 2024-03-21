// CountdownTimer.js
import React, { useState, useEffect } from "react";
// import "./styles.css";
function CountdownTimer({ targetDateTime, onCancel }) {
  const [remainingTime, setRemainingTime] = useState("");
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const targetDate = new Date(targetDateTime);
      const now = new Date();
      let difference = targetDate - now;

      if (difference <= 0) {
        setExpired(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      difference -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(difference / (1000 * 60 * 60));
      difference -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(difference / (1000 * 60));
      difference -= minutes * (1000 * 60);

      const seconds = Math.floor(difference / 1000);

      setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const intervalId = setInterval(() => {
      calculateRemainingTime();
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval
  }, [targetDateTime]);

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="countdown-timer">
      <h2>Countdown Timer</h2>
      {expired ? (
        <div className="expired">Countdown expired!</div>
      ) : (
        <div>{remainingTime}</div>
      )}
      <button onClick={handleCancel}>Cancel Countdown</button>
    </div>
  );
}

export default CountdownTimer;
