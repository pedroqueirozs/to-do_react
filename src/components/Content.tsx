import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./Task";
import { CirclePlus, ClipboardList } from "lucide-react";
import Clipboard from "../assets/Clipboard.svg";

interface TypeTask {
  title: string;
  isCompleted: boolean;
}

export function Content() {
  const [taskInputValue, setTaskInputValue] = useState("");
  const [taskDataBase, setTaskDataBase] = useState<TypeTask[]>([]);
  const numberOfTanksCompleted = taskDataBase.filter(
    (taskIsCompleted) => taskIsCompleted.isCompleted
  ).length;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskInputValue(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    if (taskInputValue == "" || taskInputValue == " ") {
      alert("Digite Uma Tarefa");
      return;
    }
    console.log("Aqui esta o value", taskInputValue);

    event.preventDefault();
    const newTaskDataBase = [
      ...taskDataBase,
      {
        title: taskInputValue,
        isCompleted: false,
      },
    ];

    setTaskDataBase(newTaskDataBase);
  }

  function isCompletedTask(index: number) {
    setTaskDataBase((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function deleteTask(taskToDelete: string) {
    const taskDelete = taskDataBase.filter((task) => {
      return task.title !== taskToDelete;
    });
    setTaskDataBase(taskDelete);
  }

  return (
    <div className=" max-w-5xl m-auto">
      <form className="h-12 flex gap-2 -mt-6 mb-10">
        <input
          onChange={handleNewTaskChange}
          className="bg-gray_400 h-full w-full rounded-md p-2 text-white"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          onClick={handleCreateNewTask}
          className="bg-blue_dark rounded-md w-24 gap-1 flex text-white justify-center items-center"
        >
          Criar <CirclePlus />
        </button>
      </form>

      <div className="">
        <div className="flex justify-between">
          <div className="gap-3 flex b">
            <span className="text-blue font-bold">Tarefas criadas</span>
            <span className="text-white">{taskDataBase.length}</span>
          </div>
          <div className="flex gap-1">
            <span className="text-purple_dark font-bold">Concluidas</span>
            <span className="text-white">
              {numberOfTanksCompleted} de {taskDataBase.length}
            </span>
          </div>
        </div>

        <div className="border-t-indigo-500 rounded-md min-h-72 ">
          <div className="flex-col gap-2 flex">
            {taskDataBase.length == 0 ? (
              <div className="border-t border-gray-600 mt-5 rounded-md text-center justify-center  pt-10 text-gray-400">
                <div className=" flex flex-col items-center justify-center">
                  <div className="mb-5">
                    <img
                      src={Clipboard}
                      alt="Imagem que representa uma lista"
                    />
                  </div>

                  <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <br /> Crie tarefas e organize seus itens a fazer
                  </p>
                </div>
              </div>
            ) : (
              taskDataBase.map((task, index) => {
                return (
                  <Task
                    key={index}
                    taskIndex={index}
                    taskText={task.title}
                    isCompleted={task.isCompleted}
                    onDeleteTask={deleteTask}
                    onCompletedTask={isCompletedTask}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
