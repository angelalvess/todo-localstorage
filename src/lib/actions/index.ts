import useTodosStore from "../store/useTodosStore";
import { TASKLIMIT } from "../utils";

export const handleSubmit =
  (isAuthenticated: boolean) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputText = useTodosStore.getState().inputText;
    const addTodo = useTodosStore.getState().addTodo;
    const totalTasks = useTodosStore.getState().totalTasks;

    if (!inputText.trim()) return;

    if (totalTasks === TASKLIMIT && !isAuthenticated) {
      alert(` You can only add ${TASKLIMIT} tasks at a time`);
      return;
    }
    addTodo(inputText);
  };
