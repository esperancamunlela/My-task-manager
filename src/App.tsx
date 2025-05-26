import { PlusCircleIcon, TrashSimpleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Footer, Header } from "./headAndFooter";

export const App = () => {
  const [addTask, setaddTask] = useState("");
  const [listTasks, setListTasks] = useState<string[]>([]);

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();
    if (addTask.trim() === "") {
      return;
    } else {
      setListTasks([...listTasks, addTask]);
      setaddTask("");
    }
  }

  function deleteTask(indice: number) {
    const novaLista = listTasks.filter((task, i) => i !== indice);
    setListTasks(novaLista);
  }

  return (
    <>
      <div className="flex flex-col p-auto h-screen">
        <Header />

        <main className="flex flex-col flex-1 pl-12 pr-4 py-2 bg-fuchsia-200 items-center">
          <p className="text-purple-950">Que tarefa temos a cumprir?</p>
          <form onSubmit={handleAddTask} className="flex ">
            <input
              type="text"
              value={addTask}
              onChange={(e) => setaddTask(e.target.value)}
              placeholder="Adicione aqui uma task..."
              className=" h-5 w-50 pl-1 border rounded-sm text-purple-950 bg-fuchsia-50 text-xs "
            />
            <button type="submit">
              <PlusCircleIcon
                size={20}
                weight="duotone"
                className="-ml-5 text-purple-950 cursor-pointer"
              />
            </button>
          </form>
          <div className="w-75 max-w-md flex flex-col gap-1 mt-3 ">
            {listTasks.map((task, indice) => (
              <div
                key={indice}
                className="bg-fuchsia-100 text-purple-950 text-xs p-2 rounded hover:bg-fuchsia-400 flex justify-between"
              >
                <div className="flex flex-col">
                  {task}
                <div className="text-[6px] flex flex-col">{new Date().toLocaleDateString("pt-pt")}{new Date().toLocaleTimeString("pt-mz")}</div>
                </div>

                <button
                  className="cursor-pointer hover:text-red-800 font-bold"
                  onClick={() => deleteTask(indice)}
                >
                  <TrashSimpleIcon size={16} weight="bold" />
                </button>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
