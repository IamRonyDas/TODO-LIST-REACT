import React, { useState } from "react";

import Task from "./task.jsx";
function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        title,
        description,
      },
    ]);
  };
  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      console.log(index, i);
      return i !== index;
      //returns all array element except i
    });
    setTasks(filteredArr);
  };
  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandle}>
        <input
          type="input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      {tasks.map((item /*value*/, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
}

export default Home;

/*
const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    setInputValue(inputValue + 1);
  };
  const decrement = () => {
    setInputValue(inputValue - 1);
  };

  const btnStyle = {
    padding: 20,
    border: "1px solid blue",
    margin: 10,
    backgroundColor: "#f1f1f1",
  };
  return (
    <div>
      <input
        style={{ padding: 20, border: "1px solid black" }}
        type="number"
        placeholder="Enter Something"
        value={inputValue}
      ></input>
      <button style={btnStyle} onClick={decrement}>
        -
      </button>
      <button style={btnStyle} onClick={increment}>
        +
      </button>
    </div>
  );*/
