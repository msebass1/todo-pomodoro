import { add } from "date-fns";
import { useState } from "react";

import { defaultPomodoroTime } from "../assets/constans";

// add(new Date(),{minutes: defaultPomodoroTime.minutes})

const usePomodoro = (defatulValue = defaultPomodoroTime) => {
  const [timer, setTimer] = useState(defatulValue);

  return [timer, setTimer];
};

export { usePomodoro };
