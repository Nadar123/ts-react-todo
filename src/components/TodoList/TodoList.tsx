import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import TodoCard from "../TodoCard/TodoCard";
import { ListTodo } from "./StyleTodoList";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.value);

  return (
    <ListTodo>
      {todos &&
        todos.map((todo, index) => (
          <TodoCard todo={todo} key={todo} index={index} />
        ))}
    </ListTodo>
  );
};

export default TodoList;
