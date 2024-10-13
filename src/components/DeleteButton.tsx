import { useTodoContext } from "../lib/hooks/useTodoContext";

type DeleteButtonProps = {
  id: string;
};

function DeleteButton({ id }: DeleteButtonProps) {
  const { handleDelete } = useTodoContext();

  return <button onClick={() => handleDelete(id)}>❌</button>;
}

export default DeleteButton;
