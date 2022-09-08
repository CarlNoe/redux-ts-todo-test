import "./TodoList.css";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { Todo } from "../../../types/Todo";

const mapStateToProps = (state: any) => {
  return {
    todos: state.todo.allTodos,
  };
};

function TodoList(props: any) {
  const createTodoItems = () => {
    const todosData: Todo[] = props.todos;
    return (
      <>
        {todosData.map((todoData: any) => (
          <TodoItem
            key={todoData.id}
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

export default connect(mapStateToProps)(TodoList);
