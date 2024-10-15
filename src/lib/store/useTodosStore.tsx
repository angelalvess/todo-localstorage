import { create } from "zustand";

import { v4 } from "uuid";
import { TodoStore } from "../types";

const initialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const useTodosStore = create<TodoStore>((set) => ({
  todos: initialTodos(),
  completedTasks: 0,
  totalTasks: 0,
  inputText: "",

  addTodo: (text) =>
    set((state) => {
      const newTodo = { id: v4(), text, isCompleted: false };
      const newTodos = [...state.todos, newTodo];
      return {
        todos: newTodos,
        inputText: "",
        completedTasks: newTodos.filter((todo) => todo.isCompleted).length,
        totalTasks: newTodos.length,
      };
    }),

  removeTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      return {
        todos: newTodos,
        completedTasks: newTodos.filter((todo) => todo.isCompleted).length,
        totalTasks: newTodos.length,
      };
    }),

  toggleTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      return {
        todos: newTodos,
        completedTasks: newTodos.filter((todo) => todo.isCompleted).length,
        totalTasks: newTodos.length,
      };
    }),

  updateInputText: (text) => set({ inputText: text }),
}));

export default useTodosStore;
