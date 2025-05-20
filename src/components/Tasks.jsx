import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`w-full bg-slate-400 flex items-center gap-2 p-4 rounded-md text-white text-left ${
              task.isCompleted && "line-through"
            }`}
            onClick={() => props.onTaskClick(task.id)}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => props.onDeleteTask(task.id)}>
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
