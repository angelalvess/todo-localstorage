import { useTodoContext } from "../lib/hooks/useTodoContext";

function InputTodo() {
  const { inputText, setInputText } = useTodoContext();
  return (
    <input
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="E.g. Buy groceries"
      type="text"
      className="border h-[45px] border-black/[12%] rounded-[5px]  my-[9px] text-[14px] block w-full px-[16px]"
    />
  );
}

export default InputTodo;
