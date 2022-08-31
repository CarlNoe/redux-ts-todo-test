import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  return (
  <div className="TodoList">
    <TodoItem />
    <TodoItem />
  </div>
  );
}

export default TodoList;
