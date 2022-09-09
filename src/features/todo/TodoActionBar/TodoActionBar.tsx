import "./TodoActionBar.css";
import { useState } from "react";
import { connect } from "react-redux";
import { createNewTodo } from "../todoSlice";
import { Todo } from "../../../types/Todo";

const mapStateToProps = (state: any) => {
  return {
    todos: state.todo.allTodos,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    createNewTodo: (id: number, content: string) =>
      dispatch(createNewTodo({ id, content })),
  };
};

function TodoActionBar(props: any) {
  const [textFieldValue, setTextFieldValue] = useState("");

  const generateUniqueId = (): number => {
    let id: number;
    const todos: Todo[] = props.todos;
    if (todos.length === 0) {
      id = 0;
    } else {
      const todosId = todos.map((todos: Todo) => todos.id);
      const biggestId = Math.max(...todosId);
      id = biggestId + 1;
    }
    return id;
  };

  const handleTextFieldChange = (event: any) => {
    setTextFieldValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    props.createNewTodo(generateUniqueId(), textFieldValue);
    setTextFieldValue("");
  };

  return (
    <div className="TodoActionBar">
      <input
        value={textFieldValue}
        onChange={(e) => handleTextFieldChange(e)}
        type="text"
      />
      <button onClick={() => handleAddButtonClick()}>ADD</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoActionBar);
