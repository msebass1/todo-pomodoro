import { ToDoProvider } from "../../context";
import { AppUI } from "./AppUI";

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
