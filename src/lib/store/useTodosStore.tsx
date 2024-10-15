import { create } from "zustand";

import { v4 } from "uuid";
import { TodoStore } from "../types";

const initialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const useTodosStore = create<TodoStore>((set) => ({
  todos: initialTodos(),
  inputText: "",

  addTodo: (text) =>
    set((state) => {
      const newTodo = { id: v4(), text: text, isCompleted: false };
      const newTodos = [...state.todos, newTodo];
      return {
        todos: newTodos,
        inputText: "",
      };
    }),

  removeTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      return {
        todos: newTodos,
      };
    }),

  toggleTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        todos: newTodos,
      };
    }),

  updateInputText: (text) => set({ inputText: text }),
}));

export default useTodosStore;
