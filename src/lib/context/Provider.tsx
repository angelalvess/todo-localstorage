import { ReactNode, useEffect, useState } from "react";

import { TodoContext } from "./TodosContext";
import { handleDelete, handleSubmit, handleToggleTask } from "../actions";
import { Todo } from "../types";

type ProviderProps = {
  children: ReactNode;
};

const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const Provider = ({ children }: ProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(loadTodos());

  const [inputText, setInputText] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const totalTasks = todos.length;
  const completedTasks = todos.filter((task) => task.isCompleted).length;

  const submit = handleSubmit(setTodos, inputText, setInputText, todos);
  const deleteBtn = handleDelete(setTodos);
  const toggle = handleToggleTask(setTodos);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        completedTasks,
        totalTasks,
        inputText,
        setInputText,
        handleDelete: deleteBtn,
        handleToggleTask: toggle,
        handleSubmit: submit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
