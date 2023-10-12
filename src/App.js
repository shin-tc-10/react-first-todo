import './App.css';
import useTodo from './hooks/useTodo';

function App() {
  const { handleSubmit, handleTodo, handleDelete, handleSearchKeyword, flag, todo, searchTodo, newTodo } = useTodo();

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
