import { TodoItem } from "./TodoItem";

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.length === 0 && <p>No todos</p>}
      {todos.map((todo) => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </ul>
  );
}
