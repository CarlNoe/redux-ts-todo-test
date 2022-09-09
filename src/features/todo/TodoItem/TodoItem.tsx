import "./TodoItem.css";
import { Todo } from "../../../types/Todo";
import { useState } from "react";
import { connect } from "react-redux";
import { removeTodoById } from "../todoSlice";

const mapDispatchToProps = (dispatch: any, ownProps: Todo) => {
  return {
    removeTodoById: (id: number) => dispatch(removeTodoById(id)),
  };
};

function TodoItem(props: any) {
  const [check, setCheck] = useState(props.completed);

  const handleDeleteButtonClick = (): void => {
    props.removeTodoById(props.id);
  };

  return (
    <div className="TodoItem">
      <div>
        <input
          type="checkbox"
          checked={check}
          onChange={() => {
            setCheck(!check);
          }}
        />
        <span>{props.content}</span>
      </div>
      <button onClick={() => handleDeleteButtonClick()}>Delete</button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(TodoItem);
