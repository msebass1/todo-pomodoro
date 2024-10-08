import { defaultTodos, localStorageId } from "../assets/constans";

const setStorage = (newTodos = null) => {
  const stringifiedDefaultTodos = JSON.stringify(
    newTodos ? newTodos : defaultTodos,
  );
  localStorage.setItem(localStorageId, stringifiedDefaultTodos);
};

const getStorage = (isFirstTry = false) => {
  try {
    const localStorageTodos = localStorage.getItem(localStorageId);
    const parsedToDos = JSON.parse(localStorageTodos);
    if (parsedToDos == null) throw new Error("No storage saved");
    return parsedToDos || [];
  } catch (error) {
    console.error(error);
    if (!isFirstTry) {
      setStorage();
      return getStorage(true);
    }
    return "error";
  }
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : String(time);
};

export { getStorage, setStorage, formatTime };
