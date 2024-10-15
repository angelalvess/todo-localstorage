import { v4 } from "uuid";
import { TASKLIMIT } from "./utils";
import { Todo } from "./types";
import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type SetTodos = React.Dispatch<React.SetStateAction<Todo[]>>;
type SetInputText = React.Dispatch<React.SetStateAction<string>>;

export const handleToggleTask = (setTodos: SetTodos) => (id: string) => {
  setTodos((prevTodos) =>
    prevTodos.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    )
  );
};

export const handleDelete = (setTodos: SetTodos) => (id: string) => {
  setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
};

export const handleSubmit =
  (
    setTodos: SetTodos,
    inputText: string,
    setInputText: SetInputText,
    todos: Todo[],
    isAuthenticated: boolean
  ) =>
  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputText.trim()) return;
    if (todos.length >= TASKLIMIT && !isAuthenticated) {
      alert(`You can only have ${TASKLIMIT} tasks at a time.`);
      return;
    }
    const newTask = {
      id: v4(),
      text: inputText,
      isCompleted: false,
      addedWhile: isAuthenticated,
    };
    setTodos((prevTodos) => [...prevTodos, newTask]);
    setInputText("");
  };

export const removeAuthenticatedTasks = (setTodos: SetTodos) => {
  setTodos((prevTodos) => prevTodos.filter((task) => !task.addedWhile));
};

// Função de logout
export const handleLogout = (setTodos: SetTodos) => {
  removeAuthenticatedTasks(setTodos);
};
