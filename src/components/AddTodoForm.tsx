import { useTodoContext } from "../lib/hooks/useTodoContext";
import Button from "./Button";
import InputTodo from "./InputTodo";

function AddTodoForm() {
  const { handleSubmit } = useTodoContext();

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <InputTodo />
      <Button type="submit">Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
