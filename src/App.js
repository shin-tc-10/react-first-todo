import './App.css';
import useTodo from './hooks/useTodo';

function App() {
  const { handleSubmit, handleTodo, handleDelete, handleSearchKeyword, flag, todo, searchTodo, newTodo } = useTodo();

  return (
    <div className="App">
      <h1>React Todoリスト</h1>
      <p>今日のやること</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='New Todo' value={todo} onChange={handleTodo}></input>
          <button type="submit">ADD</button>
        </form>
        <div className="input">
          <input type="text" placeholder='Search Keyword' className="input" onChange={handleSearchKeyword}></input>
        </div>
      </div>
      <ul>
        {flag ?
          searchTodo.map((todo, index) => (
            <div key={todo + index}>
              <li>{todo}</li>
              <button onClick={() => { handleDelete(todo) }} className="delete-button">削除</button>
            </div>
          ))
          :
          newTodo.map((todo, index) => (
            <div key={index} className="todo-item">
              <li>{todo}</li>
              <button onClick={() => { handleDelete(todo) }} className="delete-button">削除</button>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
