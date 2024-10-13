import { useTodoContext } from "../lib/hooks/useTodoContext";
import Task from "./Task";
import WithoutTasks from "./WithoutTasks";

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <ul>
      {todos.length === 0 && <WithoutTasks />}

      {todos.map((task) => (
        <Task task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
