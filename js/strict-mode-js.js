// Great practical request 👍 — this is a **classic React + Testing Library exercise** that demonstrates **component structuring, state management, and unit testing**.
I’ll walk you through:

1. **App Structure**
2. **Implementation of Todo App** (React 18/19 + hooks)
3. **Unit Test Cases** (Jest + React Testing Library) covering *all possible scenarios*

---

# 1️⃣ Project Structure

```
/src
  /components
    TodoInput.jsx
    TodoList.jsx
    TodoItem.jsx
    FilterDropdown.jsx
  App.jsx
  index.js
/tests
  TodoApp.test.js
```

---

# 2️⃣ React Implementation

```jsx
// App.jsx
import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterDropdown from "./components/FilterDropdown";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text, status: "progress" }
    ]);
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  const changeStatus = (id, status) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status } : t
      )
    );
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Todo List</h1>
      <TodoInput onAdd={addTask} />
      <FilterDropdown filter={filter} setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        onUpdate={updateTask}
        onStatusChange={changeStatus}
      />
    </div>
  );
}
```

---

```jsx
// components/TodoInput.jsx
import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="task-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter task..."
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        data-testid="add-btn"
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>
    </form>
  );
}
```

---

```jsx
// components/FilterDropdown.jsx
import React from "react";

export default function FilterDropdown({ filter, setFilter }) {
  return (
    <select
      data-testid="filter-dropdown"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="mt-2 border p-2 rounded"
    >
      <option value="all">All</option>
      <option value="progress">In Progress</option>
      <option value="done">Done</option>
      <option value="deleted">Deleted</option>
    </select>
  );
}
```

---

```jsx
// components/TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onUpdate, onStatusChange }) {
  if (tasks.length === 0) return <p data-testid="empty-msg">No tasks</p>;

  return (
    <ul data-testid="task-list">
      {tasks.map((t) => (
        <TodoItem
          key={t.id}
          task={t}
          onUpdate={onUpdate}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  );
}
```

---

```jsx
// components/TodoItem.jsx
import React, { useState } from "react";

export default function TodoItem({ task, onUpdate, onStatusChange }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    onUpdate(task.id, text);
    setEditing(false);
  };

  return (
    <li
      data-testid="task-item"
      className="flex justify-between items-center border p-2 my-1 rounded"
    >
      {editing ? (
        <input
          data-testid="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="flex gap-2">
        {editing ? (
          <button
            data-testid="save-btn"
            onClick={handleSave}
            className="text-green-500"
          >
            Save
          </button>
        ) : (
          <button
            data-testid="edit-btn"
            onClick={() => setEditing(true)}
            className="text-blue-500"
          >
            Edit
          </button>
        )}
        <select
          data-testid="status-dropdown"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          <option value="progress">Progress</option>
          <option value="done">Done</option>
          <option value="deleted">Deleted</option>
        </select>
      </div>
    </li>
  );
}
```

---

# 3️⃣ Unit Test Cases (Jest + React Testing Library)

```jsx
// tests/TodoApp.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

describe("Todo App", () => {
  test("renders input and add button", () => {
    render(<App />);
    expect(screen.getByTestId("task-input")).toBeInTheDocument();
    expect(screen.getByTestId("add-btn")).toBeInTheDocument();
  });

  test("adds a task", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("task-input"), {
      target: { value: "Learn React" },
    });
    fireEvent.click(screen.getByTestId("add-btn"));
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });

  test("does not add empty task", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("add-btn"));
    expect(screen.queryByTestId("task-item")).not.toBeInTheDocument();
  });

  test("edits a task", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("task-input"), {
      target: { value: "Learn Testing" },
    });
    fireEvent.click(screen.getByTestId("add-btn"));

    fireEvent.click(screen.getByTestId("edit-btn"));
    fireEvent.change(screen.getByTestId("edit-input"), {
      target: { value: "Learn Jest" },
    });
    fireEvent.click(screen.getByTestId("save-btn"));

    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
  });

  test("changes task status", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("task-input"), {
      target: { value: "Task 1" },
    });
    fireEvent.click(screen.getByTestId("add-btn"));

    const statusDropdown = screen.getByTestId("status-dropdown");
    fireEvent.change(statusDropdown, { target: { value: "done" } });
    expect(statusDropdown.value).toBe("done");
  });

  test("filters tasks", () => {
    render(<App />);
    // Add task 1
    fireEvent.change(screen.getByTestId("task-input"), {
      target: { value: "Task A" },
    });
    fireEvent.click(screen.getByTestId("add-btn"));

    // Add task 2
    fireEvent.change(screen.getByTestId("task-input"), {
      target: { value: "Task B" },
    });
    fireEvent.click(screen.getByTestId("add-btn"));

    // Mark task A as done
    const statusDropdowns = screen.getAllByTestId("status-dropdown");
    fireEvent.change(statusDropdowns[0], { target: { value: "done" } });

    // Filter to "done"
    fireEvent.change(screen.getByTestId("filter-dropdown"), {
      target: { value: "done" },
    });

    expect(screen.getByText("Task A")).toBeInTheDocument();
    expect(screen.queryByText("Task B")).not.toBeInTheDocument();
  });

  test("shows empty message when no tasks", () => {
    render(<App />);
    expect(screen.getByTestId("empty-msg")).toBeInTheDocument();
  });
});
```

---

# ✅ Test Coverage

These tests cover:

* Rendering input, button, and dropdowns
* Adding tasks
* Preventing empty tasks
* Editing tasks
* Changing task status
* Filtering tasks
* Showing empty state

This gives **full coverage for core CRUD + filter features**.

---

👉 Do you want me to also add a **code coverage report setup** (`jest --coverage`) and show how to check **branch coverage** (so that every condition like empty input is tested)?
