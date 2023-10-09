import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [newTodo, setNewTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo == "") {
      return;
    }
    setNewTodo([...newTodo, todo]);
    console.log(newTodo);
    setTodo("");
  }

  const handleTodo = (e) => {
    setTodo(e.target.value);
  }

  const handleDelete = (todo) => {
    console.log(todo);
    setNewTodo(newTodo.filter((oldTodo) => oldTodo !== todo));
  }

  return (
    <div className="App">
      <h1>React First Todo</h1>
      <p>Add Todo</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='New Todo' value={todo} onChange={handleTodo}></input>
        <button type="submit">ADD</button>
      </form>
      <input type="text" placeholder='Search Keyword'></input>
      <ul>{newTodo.map((todo) => {
        return (
          <div key={todo}>
            <li>{todo}</li>
            <button onClick={() => { handleDelete(todo) }}>削除</button>
          </div>
        )

      })}
      </ul>
    </div>
  );
}

export default App;
