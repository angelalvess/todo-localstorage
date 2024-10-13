import { Todo } from "../lib/types";

type TaskTextProps = {
  task: Todo;
};

function TaskText({ task }: TaskTextProps) {
  return (
    <span className={`${task.isCompleted ? "line-through text-gray-400" : ""}`}>
      {task.text}
    </span>
  );
}

export default TaskText;
