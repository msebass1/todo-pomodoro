import { useContext } from "react";
import { TodoContext } from "../../context";

function Counter() {
  const { completedToDos: value, numberOfToDos: endValue } =
    useContext(TodoContext);
  return (
    <h1 className="text-3xl font-bold mt-5 mb-5">
      Completado: <span className="text-blue-500">{value}</span> / {endValue}
    </h1>
  );
}

export { Counter };
