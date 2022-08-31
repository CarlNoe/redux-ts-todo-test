import "./TodoItem.css";

function TodoItem() {
  return (
    <div className="TodoItem">
      <div>
        <input type="checkbox" />
        <span>Todo Item</span>
      </div>
      <button>Delete</button>
    </div>
  );
}

export default TodoItem;
