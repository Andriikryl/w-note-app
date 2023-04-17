export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="form-item">
      <label className="item-label">
        <input
          className="item-input"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-delet">
        Delete
      </button>
    </li>
  );
}
