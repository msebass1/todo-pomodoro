import { TodoContext } from "../../context/context";
import { useContext, useState } from "react";
const Form = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [error, setError] = useState(false);
  const { setOpenModal, addTask } = useContext(TodoContext);
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length > 0) {
      addTask(newTodoValue);
      setOpenModal();
    } else {
      setError(true);
    }
  };

  const onChangeValue = (event) => {
    setNewTodoValue(String(event.target.value));
  };

  return (
    <div className="bg-[#1e2736] rounded-lg shadow-lg w-full max-w-md">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Nueva tarea</h2>
          <button
            onClick={setOpenModal}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <textarea
            type="text"
            value={newTodoValue}
            onChange={onChangeValue}
            placeholder="Ingrese nueva tarea"
            className={`w-full px-3 py-2 bg-[#2b3648] border ${error ? "border-red-500" : "border-[#3d4b63]"}  rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {error && <p className="text-red-500 text-sm">Completalo porfa :3</p>}
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 bg-[#3b82f6] text-white rounded-md hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Agregar tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Form };
