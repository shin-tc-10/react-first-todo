import React, { useState } from "react";

const useTodo = () => {
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

  const handleDelete = (index) => {
    setNewTodo(newTodo.filter((oldTodo) => oldTodo !== newTodo[index]));
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


  return {handleSubmit: handleSubmit, handleTodo: handleTodo, handleDelete: handleDelete, handleSearchKeyword: handleSearchKeyword, todo: todo, newTodo: newTodo, searchTodo: searchTodo, flag: flag};
}

export default useTodo
