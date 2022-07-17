import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../features/todoSlice";
import { RootState } from "../../app/store";
import { InputContainer, Input, SubmitButton, ErrorMsg } from "./StyleNewTodo";

const NewTodo: React.FC = () => {
  const [todoInput, setTodoInput] = useState("");
  const [errorInput, setErorrInput] = useState("");

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
    <InputContainer>
      <Input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <SubmitButton onClick={handleAddTodo}>Add</SubmitButton>
      {errorInput && <ErrorMsg>{errorInput}</ErrorMsg>}
    </InputContainer>
  );
};

export default NewTodo;
