import { useContext } from "react";
import { TodoContext } from "../../context";

function Input() {
  const { searh: value, setSearch: onChange } = useContext(TodoContext);
  return (
    <input
      className="w-full px-3 py-2 bg-[#2b3648] border border-[#3d4b63] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      placeholder="Buscar"
      onChange={(e) => onChange(String(e.target.value))}
    />
  );
}

export { Input };
