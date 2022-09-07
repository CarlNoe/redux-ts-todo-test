import "./TodoItem.css";

interface todoProps {
  id: number;
  content: string;
}

function TodoItem(props: todoProps) {
  return (
    <div className="TodoItem">
      <div>
        <input type="checkbox" />
        <span>{props.content}</span>
      </div>
      <button>Delete</button>
    </div>
  );
}

export default TodoItem;
