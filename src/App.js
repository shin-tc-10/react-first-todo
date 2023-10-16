import './App.css';
import useTodo from './hooks/useTodo';

function App() {
  const { handleSubmit, handleTodo, handleDelete, handleSearchKeyword, flag, todo, searchTodo, newTodo } = useTodo();

  return (
    <div className="App">
      <h1>React Todoリスト</h1>
      <div className='search-form'>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='New Todo' value={todo} onChange={handleTodo}></input>
        </form>
        <input type="text" placeholder='Search Keyword' onChange={handleSearchKeyword}></input>
      </div>
      <p>今日のやること</p>

      <ul>
        {flag ?
          searchTodo.map((todo, index) => (
            <div key={index} className='todo-item'>
              <li>{todo}</li>
              <button onClick={() => { handleDelete(index) }} >削除</button>
            </div>
          ))
          :
          newTodo.map((todo, index) => (
            <div key={index} className='todo-item'>
              <li>{todo}</li>
              <button onClick={() => { handleDelete(index) }} >削除</button>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
