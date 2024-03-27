import React, { useState } from "react";
import "../src/App.css";
import { MdPlaylistAdd, MdDelete, MdEdit } from "react-icons/md";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

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

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const saveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = editValue;
    setTodos(newTodos);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
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
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(event) => setEditValue(event.target.value)}
                  className="edit-inner-text"
                />
                <button onClick={() => saveEdit(index)} className="save-btn">
                  Save
                </button>
                <button onClick={cancelEdit} className="cancel-btn">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => toggleTodo(index)}
                  className={`adding-text ${todo.completed ? "completed" : ""}`}
                >
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(index)} className="del-btn">
                  <MdDelete />
                </button>
                <button onClick={() => handleEdit(index)} className="edit-btn">
                  <MdEdit />
                </button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
