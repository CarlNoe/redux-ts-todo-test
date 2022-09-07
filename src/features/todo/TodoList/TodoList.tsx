import "./TodoList.css";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

//@ts-ignore
function TodoList(props) {
  console.log(props.todos);
  const createTodoItems = () => {
    const todosData: [] = props.todos;
    return (
      <>
        {todosData.map((todoData: any) => (
          <TodoItem id={todoData.id} content={todoData.content} />
        ))}
      </>
    );
  };
  return <div className="TodoList">{createTodoItems()}</div>;
}

//@ts-ignore
const mapStateToProps = (state) => {
  return {
    todos: state.todo.todoList,
  };
};

export default connect(mapStateToProps)(TodoList);
