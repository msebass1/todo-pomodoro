import { TimerButton } from "./TimerButton";

function Timer() {
  return (
    <div className="flex bg-gray-700 p-8  m-4 rounded-xl  flex-col">
      <p className=" flex-1 text-center text-5xl font-bold">42:30</p>
      <TimerButton />
    </div>
  );
}
export { Timer };
