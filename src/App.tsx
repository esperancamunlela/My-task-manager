import { PlusCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Footer, Header } from "./headAndFooter";



export const App = () => {

const [addTask, setaddTask] = useState("");
  const [listTasks, setListTasks] = useState<string[]>([]);

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();
    if (addTask.trim() === "") {return}else{
    setListTasks([...listTasks, addTask]);
    setaddTask("");
  }}
  return (
    <>
      <div className="flex flex-col p-auto h-screen">
        <Header/>

        <main className="flex flex-col flex-1 pl-12 pr-4 py-2 bg-fuchsia-200 items-center">
                <p className="text-purple-950">
              Que tarefa temos a cumprir?
            </p>
          <form onSubmit={handleAddTask}  className="flex ">
            <input
              type="text"
             value={addTask}
            onChange={(e) => setaddTask(e.target.value)}
              placeholder="Adicione aqui uma task..."
              className=" h-5 w-50 border rounded-sm text-purple-950 bg-fuchsia-50 text-xs"
            />
            <button type="submit" >
            <PlusCircleIcon size={20} weight="duotone" className="-ml-5 text-purple-950 cursor-pointer" />
            </button>
          </form>

          <div className="w-75 max-w-md flex flex-col gap-1 mt-3">
          {listTasks.map((task, indice) => (
            <div key={indice} className="bg-fuchsia-100 text-purple-950 text-xs p-2 rounded">
              {task}
            </div>
          ))}
        </div>
        </main>
        
 <Footer/>
      </div>
    </>
  );
};
