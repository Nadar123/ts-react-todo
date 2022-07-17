import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../features/todoSlice";
import { RootState } from "../../app/store";

const NewTodo: React.FC = () => {
  const [todoInput, setTodoInput] = useState("");
  const [errorInput, setErorrInput] = useState("");

  const todos = useSelector((state: RootState) => state.todo.value);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!todoInput) {
      return setErorrInput("plz file the your input with task");
    }
    dispatch(addToDo(todoInput));
    setTodoInput("");
    setErorrInput("");
  };

  return (
    <div className="reservation-input-container">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      {errorInput && <p>{errorInput}</p>}
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default NewTodo;
