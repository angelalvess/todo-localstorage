import DeleteButton from "./DeleteButton";
import { Todo } from "../lib/types";
import { handleToggleTask } from "../lib/actions";

import TaskText from "./TaskText";
import { useTodoContext } from "../lib/hooks/useTodoContext";

type TaskProps = {
  task: Todo;
};

function Task({ task }: TaskProps) {
  const { handleToggleTask } = useTodoContext();
  return (
    <li
      key={task.id}
      className="font-medium flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]
  "
      onClick={() => handleToggleTask(task.id)}
    >
      <TaskText task={task} />
      <DeleteButton id={task.id} />
    </li>
  );
}

export default Task;
