import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [newTodo, setNewTodo] = useState([]);
  const [searchTodo, setSearchTodo] = useState([]);
  const [flag, setFlag] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo == "") {
      return;
    }
    setNewTodo([...newTodo, todo]);
    setTodo("");
  }

  const handleTodo = (e) => {
    setTodo(e.target.value);
  }

  const handleDelete = (todo) => {
    setNewTodo(newTodo.filter((oldTodo) => oldTodo !== todo));
  }

  const handleSearchKeyword = (e) => {
    e.preventDefault();
    if (e.target.value == "") {
      setSearchTodo(newTodo);
      setFlag(false);
      return;
    }
    const keyword = e.target.value;
    const searchKeyword = keyword.trim().toLowerCase().match(/[^\s]+/g);
    let result = newTodo.filter((todo) => todo.startsWith(searchKeyword));
    console.log(result);
    setSearchTodo(result);
    setFlag(true);
  }

  return (
    <div className="App">
      <h1>React First Todo</h1>
      <p>Add Todo</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='New Todo' value={todo} onChange={handleTodo}></input>
        <button type="submit">ADD</button>
      </form>
      <input type="text" placeholder='Search Keyword' onChange={handleSearchKeyword}></input>

      <ul>{flag ?
        <> {searchTodo.map((todo, index) => {
          return (
            <div key={todo + index}>
              <li>{todo}</li>
              <button onClick={() => { handleDelete(todo) }}>削除</button>
            </div>
          )
        })}
        </> :
        <>{
          newTodo.map((todo, index) => {
            return (
              <div key={todo + index}>
                <li>{todo}</li>
                <button onClick={() => { handleDelete(todo) }}>削除</button>
              </div>
            )

          })}</>
      }
      </ul>
    </div >
  );
}

export default App;
