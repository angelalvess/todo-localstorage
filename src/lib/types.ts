export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type TTodoContext = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  handleDelete: (id: string) => void;
  handleToggleTask: (id: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  completedTasks: number;
  totalTasks: number;
};
