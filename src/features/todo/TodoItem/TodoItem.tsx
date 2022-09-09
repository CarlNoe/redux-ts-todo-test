import "./TodoItem.css";
import { Todo } from "../../../types/Todo";
import { connect } from "react-redux";
import { removeTodoById, setTodoCompletionById } from "../todoSlice";

const mapDispatchToProps = (dispatch: any, ownProps: Todo) => {
  return {
    removeTodoById: (id: number) => dispatch(removeTodoById(id)),
    setTodoCompletionById: (id: number, completed: boolean) =>
      dispatch(setTodoCompletionById({ id, completed })),
  };
};

function TodoItem(props: any) {
  const handleCheckChange = () => {
    props.setTodoCompletionById(props.id, !props.completed);
  };

  const handleDeleteButtonClick = (): void => {
    props.removeTodoById(props.id);
  };

  return (
    <div className="TodoItem">
      <div>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={() => {
            handleCheckChange();
          }}
        />
        <span
          style={
            props.completed
              ? { textDecoration: "line-through", color:"gray" }
              : { textDecoration: "none", color:"black"}
          }
        >
          {props.content}
        </span>
      </div>
      <button onClick={() => handleDeleteButtonClick()}>Delete</button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(TodoItem);
