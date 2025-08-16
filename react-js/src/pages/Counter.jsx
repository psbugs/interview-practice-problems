// Counter.js
import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = (delta) => {
        setCounter(prev => Math.max(0, (Math.min(prev + delta))))
    };

    const handleReset = () => {
        setCounter(0);
    }
    return (
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={() => handleCounter(+1)}>Increment</button>
            <button onClick={() => handleCounter(-1)}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;