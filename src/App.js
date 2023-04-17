import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">new item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn btn-add">Add</button>
      </form>
      <h1 className="title">Todo List</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            item 1
          </label>
          <button className="btn btn-delet">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
