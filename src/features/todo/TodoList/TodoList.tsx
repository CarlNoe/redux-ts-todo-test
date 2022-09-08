import "./TodoList.css";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props : any) {
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

const mapStateToProps = (state: any) => {
  return {
    todos: state.todo.allTodos,
  };
};

export default connect(mapStateToProps)(TodoList);
