import { CalendarDotsIcon} from "@phosphor-icons/react";



export const Header = () => { 
  return (
    <>
        <header className="pl-4 pr-8 flex justify-between h-18 bg-gradient-to-br from-fuchsia-900 via-fuchsia-500 to-fuchsia-400 text-center">
          <div className="w-20">
            <img src="/task.png" alt="Logo" />
          </div>
          <div className="py-6 text-purple-950 font-bold ">My Task Manager</div>
          <div className="py-7 text-purple-950">
            <CalendarDotsIcon size={20} />
          </div>
        </header>
 </>
  );
};

export const Footer = () => {
  return (
        <footer className="flex justify-between px-4 py-4 h-12 bg-fuchsia-900 text-xs">
          <p className="text-black">
            &copy;{new Date().getFullYear()} Gerenciador de Tarefas{" "}
          </p>
          <p className="text-black">Criado por Esperança Munlela</p>
        </footer>
  );
};