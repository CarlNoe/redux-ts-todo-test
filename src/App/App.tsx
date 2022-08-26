import "./App.css";
import TodoList from "../Components/TodoList/TodoList";
import TodoActionBar from "../Components/TodoActionBar/TodoActionBar";
import TodoHeader from "../Components/TodoHeader/TodoHeader";

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
