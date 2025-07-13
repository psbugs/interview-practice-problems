import  { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isStart, setStart] = useState(false);
  const stopWatchRef = useRef(null);
  useEffect(() => {
    if (isStart) {
      stopWatchRef.current = setInterval(() => {
        setSeconds(prev=> prev + 1);
      }, 1000);
    } else {
        clearInterval(stopWatchRef.current)
    } 
    return () => clearInterval(stopWatchRef.current);  
  },[isStart]);
  
  const startHandler = () => {
    setStart(true);
  };

  const stopHandler = () => {
    setStart(false);
  };

  const resetHandler = () => {
    setStart(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Time: {seconds}s</h1>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default Stopwatch;