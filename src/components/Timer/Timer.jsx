import { useContext } from "react";
import { TimerButton } from "./TimerButton";
import { TodoContext } from "../../context";
import { formatTime } from "../../hooks/utils";
import { statusIds } from "../../assets/constans";

function Timer() {
  const { time } = useContext(TodoContext);
  return (
    <div className="flex bg-gray-700 p-8  m-4 rounded-xl  flex-col">
      <p className=" flex-1 text-center text-2xl font-bold mb-3">
        {time.status.id === statusIds.pomodoro ? "Pomodoro" : "Descanso"}
      </p>
      <p className=" flex-1 text-center text-5xl font-bold">
        {formatTime(time.minutes)}:{formatTime(time.seconds)}
      </p>
      <TimerButton />
    </div>
  );
}
export { Timer };
