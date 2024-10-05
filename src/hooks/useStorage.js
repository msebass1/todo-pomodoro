import { useEffect, useState } from "react";
import { getStorage, setStorage } from "./utils";

const useStorage = (initialValue = []) => {
  const [ToDos, setStateToDos] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const localStorageTodos = getStorage();
      setLoading(false);
      if (localStorageTodos === "error") setError(true);
      setStateToDos(localStorageTodos);
    }, 100);
  }, []);

  const setToDos = (newTodos) => {
    setStateToDos(newTodos);
    setStorage(newTodos);
  };

  return { ToDos, setToDos, loading, error };
};

export { useStorage };
