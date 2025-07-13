import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

function TodoWithTimeout() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const timersRef = useRef({}); // store interval IDs for each item

  const onInputHandleChange = (e) => {
    setValue(e.target.value);
  };

  const onClickAddButton = () => {
    if (!value.trim()) return;
    const newItem = {
      text: value,
      time: 0,
      isRunning: false
    };
    setItems((prev) => [...prev, newItem]);
    setValue("");
  };

  const startTimer = (index) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isRunning: true } : item
      )
    );

    timersRef.current[index] = setInterval(() => {
      setItems((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, time: item.time + 1 } : item
        )
      );
    }, 1000);
  };

  const resetTimer = (index) => {
    clearInterval(timersRef.current[index]);
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, time: 0, isRunning: false } : item
      )
    );
  };

  const stopTimer = (index) => {
    clearInterval(timersRef.current[index]);
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isRunning: false } : item
      )
    );
  };

  const deleteItem = (index) => {
    clearInterval(timersRef.current[index]);
    delete timersRef.current[index];
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Clear all timers on unmount
  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(clearInterval);
    };
  }, []);

  return (
    <div className="todo-container">
      <h2>Todo with Timer</h2>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter todo"
          value={value}
          onChange={onInputHandleChange}
          data-testid="todo-input"
        />
        <button
          className="add-button"
          onClick={onClickAddButton}
          data-testid="add-button"
        >
          Add
        </button>
      </div>
      <ul className="todo-list">
        {items.map((item, index) => (
          <li key={index} className="todo-item" data-testid="todo-item">
            <span className="todo-text">{item.text}</span>
            <div className="timer">⏱️ {item.time}s</div>
            <div className="button-group">
              <button
                className="timer-button start"
                onClick={() =>
                  item.isRunning ? stopTimer(index) : startTimer(index)
                }
              >
                {item.isRunning ? "Pause" : "Start"}
              </button>
              <button
                className="timer-button reset"
                onClick={() => resetTimer(index)}
              >
                Reset
              </button>
              <button
                className="delete-button"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoWithTimeout;
