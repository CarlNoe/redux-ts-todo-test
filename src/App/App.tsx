import "./App.css";
import TodoList from "../features/TodoList/TodoList";
import TodoActionBar from "../features/TodoActionBar/TodoActionBar";
import TodoHeader from "../features/TodoHeader/TodoHeader";

const App = () => {
  return (
    <div className="App">
      <TodoHeader />
      <TodoList />
      <TodoActionBar />
    </div>
  );
};

export default App;
