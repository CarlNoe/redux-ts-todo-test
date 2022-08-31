import "./App.css";
import TodoList from "../features/TodoList/TodoList";
import TodoActionBar from "../features/TodoActionBar/TodoActionBar";
import Header from "../features/Header/Header";

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
