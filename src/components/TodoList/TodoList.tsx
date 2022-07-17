import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import TodoCard from "../TodoCard/TodoCard";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.value);
  //   const dispatch = useDispatch();

  return (
    <div>
      <h5 className="reservation-header">Todo List</h5>
      <div className="reservation-cards-container">
        {todos &&
          todos.map((todo, index) => (
            <TodoCard todo={todo} key={todo} index={index} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
