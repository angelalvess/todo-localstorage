import useTodosStore from "../store/useTodosStore";
import { TASKLIMIT } from "../utils";

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const inputText = useTodosStore.getState().inputText;
  const addTodo = useTodosStore.getState().addTodo;
  const totalTasks = useTodosStore.getState().totalTasks;

  if (TASKLIMIT === totalTasks) {
    alert(` You can only add ${TASKLIMIT} tasks at a time`);
    return;
  }
  if (inputText.trim()) {
    addTodo(inputText);
  }
};
