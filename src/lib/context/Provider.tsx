import { ReactNode, useEffect, useState } from "react";

import { TodoContext } from "./TodosContext";
import {
  handleDelete,
  handleLogout,
  handleSubmit,
  handleToggleTask,
} from "../actions";
import { Todo } from "../types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type ProviderProps = {
  children: ReactNode;
};

const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const Provider = ({ children }: ProviderProps) => {
  const { isAuthenticated } = useKindeAuth();
  const [todos, setTodos] = useState<Todo[]>(loadTodos());

  const [inputText, setInputText] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const totalTasks = todos.length;
  const completedTasks = todos.filter((task) => task.isCompleted).length;

  const submit = handleSubmit(
    setTodos,
    inputText,
    setInputText,
    todos,
    isAuthenticated
  );
  const deleteBtn = handleDelete(setTodos);
  const toggle = handleToggleTask(setTodos);
  const logout = () => handleLogout(setTodos);

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
        handleLogout: logout,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
