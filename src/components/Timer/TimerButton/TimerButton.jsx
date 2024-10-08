import { useContext } from "react";
import { TodoContext } from "../../../context";

const TimerButton = () => {
  const { time } = useContext(TodoContext);
  const { isRunning, onTimer, pause, status, resetTimer } = time;

  const onClick = status.ended
    ? resetTimer
    : isRunning
      ? pause
      : onTimer.next().value;

  return (
    <button
      type="button"
      className="flex-1 flex:col md:flex-row self-center mt-8 text-gray-200 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg px-5 py-2.5 me-2 mb-2"
      onClick={onClick}
    >
      <div className="flex justify-around">
        <div className="flex-none justify-center">
          {isRunning ? (
            <svg fill="none" viewBox="0 0 24 24" className="w-10 h-10">
              <path fill="currentColor" d="M11 7H8v10h3V7zM13 17h3V7h-3v10z" />
            </svg>
          ) : (
            <svg
              className="w-10 h-10"
              viewBox="0 0 500 1000"
              fill="currentColor"
            >
              <path d="M486 474c9.333 6.667 14 15.333 14 26 0 9.333-4.667 17.333-14 24L58 790c-16 10.667-29.667 12.667-41 6-11.333-6.667-17-20-17-40V242c0-20 5.667-33.333 17-40 11.333-6.667 25-4.667 41 6l428 266" />
            </svg>
          )}
        </div>

        <div className="flex items-center mr-1">
          <h1 className="font-bold text-lg md:text-xl">
            {isRunning ? "Pausar" : "Iniciar"}
          </h1>
        </div>
      </div>
    </button>
  );
};

export { TimerButton };
