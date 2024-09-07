import { Circle, CircleCheck, Trash2 } from "lucide-react";

interface TaskProps {
  taskText: string;
  taskIndex: number;
  isCompleted: boolean;
  onDeleteTask: (task: string) => void;
  onCompletedTask: (index: number) => void;
}

export function Task({
  taskText,
  onDeleteTask,
  onCompletedTask,
  isCompleted,
  taskIndex,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(taskText);
  }

  function handleIsCompletedTask() {
    onCompletedTask(taskIndex);
  }

  return (
    <div className="bg-gray_400 rounded-md p-2 h-16 flex justify-between items-center">
      <div className="flex gap-3">
        <button onClick={handleIsCompletedTask}>
          {isCompleted ? (
            <CircleCheck className="text-purple_dark line-through" />
          ) : (
            <Circle className="text-blue" />
          )}
        </button>
        {isCompleted ? (
          <p className=" text-gray-100 line-through ">{taskText}</p>
        ) : (
          <p className=" text-gray-100 ">{taskText}</p>
        )}
      </div>
      <button onClick={handleDeleteTask}>
        <Trash2 className="text-gray_300" />
      </button>
    </div>
  );
}
