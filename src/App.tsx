import TodoList from "./components/TodoList/TodoList";
import NewTodo from "./components/NewTodo/NewTodo";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <TodoList />
          <NewTodo />
        </div>
      </div>
    </div>
  );
};

export default App;
