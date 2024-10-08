import { useState } from "react";
import { defaultPomodoroTime, statuses } from "../assets/constans";
import { useTimer } from "react-timer-hook";

const getNewTimeStamp = (seconds = defaultPomodoroTime.seconds) => {
  const timeStamp = new Date();
  timeStamp.setSeconds(timeStamp.getSeconds() + seconds);
  return timeStamp;
};

const usePomodoro = () => {
  const [status, setStatus] = useState(statuses.pomodoro);
  const expiryTimestamp = getNewTimeStamp(status.seconds);

  const timer = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      setStatus({ ...status, ended: true });
    },
  });

  function* timerGenerator() {
    while (true) {
      yield timer.start;
      yield timer.resume;
    }
  }

  const onTimer = timerGenerator();

  const resetTimer = () => {
    if (status.ended) {
      setStatus(statuses[status.next]);
      const timeStamp = getNewTimeStamp(statuses[status.next].seconds);
      timer.restart(timeStamp);
    }
  };

  return { ...timer, onTimer, status, resetTimer };
};

export { usePomodoro };
