export const addTimer = name => ({
  type: "ADD_TIMER",
  name
});

export const handleResume = name => ({
  type: "RESUME_TIMER",
  name
});

export const handlePause = name => ({
  type: "PAUSE_TIMER",
  name
});

export const handleFinish = name => ({
  type: "FINISH_TIMER",
  name
});

export const handleCancel = name => ({
  type: "CANCEL_TIMER",
  name
});