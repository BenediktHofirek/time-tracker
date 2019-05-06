import createReducer from "../services/createReducer";
import getTimeWithoutMiliseconds from "../services/getTimeWithoutMiliseconds";

export default createReducer([], {
  ADD_TIMER: addTimer,
  RESUME_TIMER: resumeTimer,
  PAUSE_TIMER: pauseTimer,
  CANCEL_TIMER: cancelTimer,
  REMOVE_TIMER: removeTimer,
});

function addTimer(state = [], action) {
  switch (action.type) {
    case "ADD_TIMER":
      if (state.find(e => e.name === action.name)) return state;

      let newState = [...state];
      const timerToPause = state.findIndex(e => e.active);

      if (newState && timerToPause !== -1) {
        newState = handleTimerPause(newState, timerToPause);
      }
      
      return [
        ...newState,
        {
          name: action.name,
          duration: 0,
          active: true,
          startTime: Date.now()
        }
      ];

    default:
      return state;
  }
}

function resumeTimer(state = [], action) {
  switch (action.type) {
    case "RESUME_TIMER":
      let newState = [...state];
      const timerToPause = state.findIndex(e => e.active);

      if (newState && timerToPause !== -1) {
        newState = handleTimerPause(newState, timerToPause);
      }

      const timerToResume = state.findIndex(e => e.name === action.name);
      newState[timerToResume].active = true;
      newState[timerToResume].startTime = Date.now();

      return newState;

    default:
      return state;
  }
}

function pauseTimer(state = [], action) {
  switch (action.type) {
    case "PAUSE_TIMER":
      let newState = [...state];
      const timerToPause = state.findIndex(e => e.active);

      newState = handleTimerPause(newState, timerToPause);

      return newState;

    default:
      return state;
  }
}

function cancelTimer(state = [], action) {
  switch (action.type) {
    case "CANCEL_TIMER":
      let newState = [...state];
      const timerToCancel = state.findIndex(e => e.name === action.name);

      newState.splice(timerToCancel, 1);

      return newState;

    default:
      return state;
  }
}

function removeTimer(state = [], action) {
  switch (action.type) {
    case "REMOVE_TIMER":
      let newState = [...state];
      const timerToCancel = state.findIndex(e => e.name === action.name);

      newState.splice(timerToCancel, 1);

      return newState;

    default:
      return state;
  }
}

function handleTimerPause(state, index) {
  state[index] = {
    name: state[index].name,
    duration: state[index].duration + getTimeWithoutMiliseconds(Date.now() - state[index].startTime),
    active: false,
    startTime: ""
  };

  return state;
}
