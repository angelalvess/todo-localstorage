import { useTodoContext } from "../lib/hooks/useTodoContext";

function Counter() {
  const { completedTasks, totalTasks } = useTodoContext();

  return (
    <p>
      <b>{completedTasks}</b> / {totalTasks}{" "}
      {totalTasks === 1 ? "task" : "tasks"} completed
    </p>
  );
}

export default Counter;
