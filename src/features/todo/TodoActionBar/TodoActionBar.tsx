import "./TodoActionBar.css";
import { useState } from "react";
import { connect } from "react-redux";
import { add } from "../todoSlice";

function TodoActionBar(props: any) {
  const [textFieldValue, setTextFieldValue] = useState("");

  const createNewTodo = () => {
    props.add(textFieldValue);
    setTextFieldValue("");
  };

  return (
    <div className="TodoActionBar">
      <input
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
        type="text"
      />
      <button onClick={() => createNewTodo()}>ADD</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: (text: string) => dispatch(add(text)),
  };
};

export default connect(null, mapDispatchToProps)(TodoActionBar);
