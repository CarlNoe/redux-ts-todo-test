import "./TodoActionBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../todoSlice";

import { store } from "../../../app/store";

function TodoActionBar() {
  const dispatch = useDispatch();

  const [textFieldValue, setTextFieldValue] = useState("");

  const createNewTodo = () => {
    dispatch(add(textFieldValue));
    console.log(store.getState());
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

export default TodoActionBar;
