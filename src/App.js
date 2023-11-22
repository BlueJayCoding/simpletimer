import React, { useState, useRef } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'; 
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); 
  const intervalRef = useRef();

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const pad = (value) => (value < 10 ? `0${value}` : value);

    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  const handleToggle = () => {
    if (isRunning) {
      clearInterval(intervalRef.current); 
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0); 
    setIsRunning(false);
  };

  return (
    <div className="App">
      <header className="App-header"> 
        <div className="Timer">{formatTime(time)}</div> 
         <ButtonGroup aria-label="Basic example">
            <Button variant={isRunning ? 'warning' : 'success'} onClick={handleToggle}>{isRunning ? 'Pause' : 'Start'}</Button>
            <Button variant="danger" onClick={handleReset} >Reset</Button> 
         </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
