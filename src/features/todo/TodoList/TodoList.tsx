import "./TodoList.css";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props: any) {
  const createTodoItems = () => {
    const todosData: [] = props.todos;
    return (
      <>
        {todosData.map((todoData: any) => (
          <TodoItem
            id={todoData.id}
            content={todoData.content}
            completed={todoData.completed}
          />
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
