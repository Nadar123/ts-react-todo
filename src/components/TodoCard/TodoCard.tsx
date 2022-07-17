import { useDispatch } from "react-redux";
import { removeToDo } from "../../features/todoSlice";
import { SingleTodo, Remove } from "./StyleTodoCard";
interface TodoTypes {
  todo: string;
  index: number;
}

const TodoCard = ({ todo, index }: TodoTypes) => {
  const dispatch = useDispatch();
  return (
    <SingleTodo>
      {todo}
      <Remove
        className=""
        onClick={() => {
          dispatch(removeToDo(index));
        }}
      >
        x
      </Remove>
    </SingleTodo>
  );
};

export default TodoCard;
