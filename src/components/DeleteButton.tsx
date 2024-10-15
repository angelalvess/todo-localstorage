import { useTodoContext } from "../lib/hooks/useTodoContext";
import useTodosStore from "../lib/store/useTodosStore";

type DeleteButtonProps = {
  id: string;
};

function DeleteButton({ id }: DeleteButtonProps) {
  const handleDelete = useTodosStore((state) => state.removeTodo);

  return <button onClick={() => handleDelete(id)}>❌</button>;
}

export default DeleteButton;
