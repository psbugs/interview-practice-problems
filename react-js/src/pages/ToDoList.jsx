// ZEVO 360 Product Based company

// Started with a short description
// Have you worked on next js framework?
// Difference between react js and nextjs ?
// How do you approach for a task if figma is provided how effectively you will managed it from your end?
// What are the ways to use state without using state variable ? answer is using useRef
// Controlled component vs uncontrolled component
// Why do we need key attribute while listing various toDoItems
// What is useState internal working
// What is useRef hook , describe like a story
// Useeffect hook does it executes before rendering or after and mess was created
// Are you aware of typescript with next js -> they are highly looking for a candidate who is masters in typescript
// Does we can use hoisting in a react js component like i have declared a variable in a react js component
// Difference between var and let
// Lifecycle methods of a react js component

import { useState } from "react";

const ToDoList = () => {
    const [toDo, setToDo] = useState("");
    const [toDoItems, setToDoItems] = useState([]);

    const addToDoHandler = () => {
        let newTodos = [...toDoItems, toDo];
        setToDoItems(newTodos);
        setToDo("");
    };

    const handleDelete = (index) => {
        setToDoItems(toDoItems.filter((item, ind) => index !== ind));
    };

    const handleUpdate = (index, value) => {
        let newToDoItems = [...toDoItems];
        newToDoItems[index] = value;
        setToDoItems(newToDoItems);
    };

    const handleListItemChange = (e, index) => {
        let value = e.target.value;
        setToDoItems(toDoItems.map((item, ind) => (index == ind ? value : item)));
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    name="todo"
                    value={toDo}
                    onChange={(e) => setToDo(e.target.value)}
                />
                <button onClick={addToDoHandler}>Add</button>

                {toDoItems.map((item, index) => (
                    <>
                        <div className="list-wrap" key={index}>
                            <input type="checkbox" />
                            <input
                                type="text"
                                value={item || ""}
                                onChange={(e) => handleListItemChange(e, index)}
                            />
                            <button onClick={() => handleUpdate(index, item)}>
                                {" "}
                                Update{" "}
                            </button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default ToDoList;