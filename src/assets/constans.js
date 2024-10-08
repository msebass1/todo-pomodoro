const defaultTodos = [];

const localStorageId = "TODOS";

const statusIds = {
  pomodoro: "pomodoro",
  rest: "rest",
};
const defaultPomodoroTime = {
  seconds: 1500,
};
const defaultRestTime = {
  seconds: 300,
};

const statuses = {
  [statusIds.pomodoro]: {
    id: statusIds.pomodoro,
    ended: false,
    next: statusIds.rest,
    seconds: defaultPomodoroTime.seconds,
  },
  [statusIds.rest]: {
    id: statusIds.rest,
    ended: false,
    next: statusIds.pomodoro,
    seconds: defaultPomodoroTime.seconds,
  },
};

const okSvg =
  "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z";

export {
  defaultTodos,
  localStorageId,
  okSvg,
  defaultRestTime,
  defaultPomodoroTime,
  statuses,
  statusIds,
};
