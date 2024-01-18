/** @format */

import React from "react";
import "./stopwatch.css";

interface StopWatch {
  time: number;
}

const StopWatch: React.FC<StopWatch> = ({ time }) => {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
  };

  return (
    <div className="stopwatch">
      <h1>StopWatch</h1>
      <div className="time">{formatTime(time)}</div>
    </div>
  );
};

export default StopWatch;
