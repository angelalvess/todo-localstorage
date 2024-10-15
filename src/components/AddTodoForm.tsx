import Button from "./Button";
import useTodosStore from "../lib/store/useTodosStore";
import { handleSubmit } from "../lib/actions";

function AddTodoForm() {
  // const { handleSubmit } = useTodoContext();

  const updateInputText = useTodosStore((state) => state.updateInputText);
  const inputText = useTodosStore((state) => state.inputText);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        value={inputText}
        onChange={(e) => updateInputText(e.target.value)}
        placeholder="E.g. Buy groceries"
        type="text"
        className="border h-[45px] border-black/[12%] rounded-[5px]  my-[9px] text-[14px] block w-full px-[16px]"
      />
      {/* <InputTodo /> */}
      <Button type="submit">Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
