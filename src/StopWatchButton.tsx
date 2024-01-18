/** @format */

import React from "react";
import "./stopwatchButton.css";

interface StopWatchButton {
  time: number;
  isRunning: boolean;
  startStopwatch: () => void;
  resetStopwatch: () => void;
  addLap: () => void;
  laps: number[];
}

const StopWatchButton: React.FC<StopWatchButton> = ({
  time,
  isRunning,
  startStopwatch,
  resetStopwatch,
  addLap,
  laps,
}) => {
  const formatLapTime = (time: number): string => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
  };

  return (
    <div>
      <div>Lap Time: {formatLapTime(time)}</div>
      <button onClick={startStopwatch}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetStopwatch}>Reset</button>
      <button onClick={addLap}>Lap</button>
      <ul>
        {laps.map((lapTime, index) => (
          <li key={index}>
            Lap {index + 1}: {formatLapTime(lapTime)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StopWatchButton;
