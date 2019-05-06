import React from "react";
import Timer from "./timer";

const Timers = ({ timers, handlePause, handleResume, handleFinish, handleCancel }) => {
  return (
    <React.Fragment>
    <h2>Timers</h2>
    <table>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Time</th>
          <th scope="col">Resume</th>
          <th scope="col">Pause</th>
          <th scope="col">Save</th>
          <th scope="col">Cancel</th>
        </tr>
      </thead>
      <tbody>
        {timers.map((t, index) => (
            <Timer
              key={index}
              name={t.name}
              index={index+1}
              duration={t.duration}
              active={t.active}
              startTime={t.startTime}
              handlePause={handlePause}
              handleResume={handleResume}
              handleFinish={handleFinish}
              handleCancel={handleCancel}
            />
        ))}
      </tbody>
    </table>
    </React.Fragment>
  );
};

export default Timers;
