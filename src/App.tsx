/** @format */

import React, { useState, useRef, useEffect } from "react";
import StopWatch from "./StopWatch";
import StopWatchButton from "./StopWatchButton";
import "./app.css"; // Make sure to create and import App.css

function App() {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [lapStartTime, setLapStartTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startStopwatch = () => {
    if (isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - totalTime;
      intervalRef.current = setInterval(() => {
        setTotalTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTotalTime(0);
    setLapStartTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const addLap = () => {
    const lapTime = totalTime - lapStartTime;
    setLaps([...laps, lapTime]);
    setLapStartTime(totalTime);
  };

  const lapTimeForDisplay = totalTime - lapStartTime;

  return (
    <div className="app-container">
      <StopWatch time={totalTime} />
      <StopWatchButton
        time={lapTimeForDisplay}
        isRunning={isRunning}
        startStopwatch={startStopwatch}
        resetStopwatch={resetStopwatch}
        addLap={addLap}
        laps={laps}
      />
    </div>
  );
}

export default App;
