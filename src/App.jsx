import React, { useState } from "react";
import "../src/App.css";
import { MdPlaylistAdd, MdDelete } from "react-icons/md";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="main-box">
      <h1 className="enter-text">To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add new to-do"
          className="inner-text"
        />
        <button type="submit" className="add-btn">
          <MdPlaylistAdd />
        </button>
      </form>
      <ul className="adding-part">
        {todos.map((todo, index) => (
          <div key={index}>
            <span onClick={() => toggleTodo(index)} className="adding-text">
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)} className="del-btn">
              <MdDelete />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
