import useTodosStore from "../lib/store/useTodosStore";

function Counter() {
  const completedTasks = useTodosStore((state) => state.completedTasks);
  const totalTasks = useTodosStore((state) => state.totalTasks);

  return (
    <p>
      <b>{completedTasks}</b> / {totalTasks}{" "}
      {totalTasks === 1 ? "task" : "tasks"} completed
    </p>
  );
}

export default Counter;
