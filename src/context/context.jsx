import {
  createContext,
  //useEffect,
  useState,
} from "react";
import { useStorage } from "../hooks/useStorage";
import { usePomodoro } from "../hooks/usePomodoro";
//import { statusIds } from "../assets/constans";

const TodoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [openModal, setModal] = useState(false);
  const { ToDos, setToDos, loading, error } = useStorage();
  const time = usePomodoro();
  //const timeStatus = time.status.id;

  const setOpenModal = () => setModal(!openModal);

  const completedToDos = ToDos.filter((value) => !!value.completed).length;
  const searchedToDos = ToDos.filter((value) =>
    value.description.toLowerCase().includes(search.toLowerCase()),
  );
  const toShowToDos = search.length > 0 ? searchedToDos : ToDos;

  const onCompleteTask = (key) => {
    const temporalToDos = ToDos.map((task, index) => {
      if (index === key) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setToDos(temporalToDos);
  };
  /*
  useEffect(() => {
    console.log({ timeStatus, a: statusIds.rest });
    if (timeStatus === statusIds.rest) {
      console.log("A");
      const firstIncompletedTask = ToDos.findIndex((task) => !task.completed);
      if (firstIncompletedTask < 0) return;
      const temporalToDos = ToDos.map((task, index) => {
        if (index === firstIncompletedTask) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      setToDos(temporalToDos);
    }
  }, [timeStatus, ToDos, setToDos]);
  */

  const onDeleteTask = (description) => {
    const modifiedToDos = ToDos.filter(
      (task) => task.description !== description,
    );
    setToDos(modifiedToDos);
  };
  const numberOfToDos = ToDos.length;

  const addTask = (description) => {
    const temporalNewToDos = [
      ...ToDos,
      {
        description,
        completed: false,
      },
    ];
    if (description) setToDos(temporalNewToDos);
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        search,
        setSearch,
        onDelete: onDeleteTask,
        onComplete: onCompleteTask,
        toShowToDos,
        numberOfToDos,
        completedToDos,
        openModal,
        setOpenModal,
        addTask,
        time,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { ToDoProvider, TodoContext };
