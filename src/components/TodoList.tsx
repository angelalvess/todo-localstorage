import useTodosStore from "../lib/store/useTodosStore";
import Task from "./Task";
import WithoutTasks from "./WithoutTasks";

const TodoList = () => {
  const todos = useTodosStore((state) => state.todos);

  return (
    <ul>
      {todos.length === 0 && <WithoutTasks />}

      {todos?.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default TodoList;
