import DeleteButton from "./DeleteButton";
import { Todo } from "../lib/types";

import TaskText from "./TaskText";

import useTodosStore from "../lib/store/useTodosStore";

type TaskProps = {
  task: Todo;
};

function Task({ task }: TaskProps) {
  const handleToggle = useTodosStore((state) => state.toggleTodo);

  return (
    <li
      key={task.id}
      className="font-medium flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]
  "
      onClick={() => handleToggle(task.id)}
    >
      <TaskText task={task} />
      <DeleteButton id={task.id} />
    </li>
  );
}

export default Task;
