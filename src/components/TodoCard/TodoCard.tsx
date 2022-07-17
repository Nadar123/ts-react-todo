import { useDispatch } from "react-redux";
import { removeToDo } from "../../features/todoSlice";

interface TodoTypes {
  todo: string;
  index: number;
}

const TodoCard = ({ todo, index }: TodoTypes) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          dispatch(removeToDo(index));
        }}
        className="reservation-card-container"
      >
        {todo}
      </div>
    </>
  );
};

export default TodoCard;
