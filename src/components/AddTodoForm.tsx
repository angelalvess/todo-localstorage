import { useState } from "react";
import { useTodoContext } from "../lib/hooks/useTodoContext";
import Button from "./Button";
import InputTodo from "./InputTodo";
import useTodosStore from "../lib/store/useTodosStore";

function AddTodoForm() {
  // const { handleSubmit } = useTodoContext();

  const addTodo = useTodosStore((state) => state.addTodo);
  const updateInputText = useTodosStore((state) => state.updateInputText);
  const inputText = useTodosStore((state) => state.inputText);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputText);
    if (inputText.trim()) {
      updateInputText(""); // Limpa o input após adicionar a tarefa
    }
  };

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
      <button type="submit" onClick={() => addTodo(inputText)}>
        Add to list
      </button>
      <Button type="submit">Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
