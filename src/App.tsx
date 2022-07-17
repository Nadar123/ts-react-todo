import TodoList from "./components/TodoList/TodoList";
import NewTodo from "./components/NewTodo/NewTodo";
import Header from "./components/Header/Header";
import { AppWrapper } from "./StyleApp";
const App: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <NewTodo />
      <TodoList />
    </AppWrapper>
  );
};

export default App;
