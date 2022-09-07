import "./App.css";
import TodoList from "../features/todo/TodoList/TodoList";
import TodoActionBar from "../features/todo/TodoActionBar/TodoActionBar";
import Header from "../common/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <TodoActionBar />
    </div>
  );
};

export default App;
