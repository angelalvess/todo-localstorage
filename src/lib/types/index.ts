export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type TodoStore = {
  todos: Todo[];
  inputText: string;
  totalTasks: number;
  completedTasks: number;
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateInputText: (text: string) => void;
};
