import { TodoItem } from "./TodoItem";

export function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="form-list">
      {todos.length === 0 && <p className="title-empty">No todos</p>}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
