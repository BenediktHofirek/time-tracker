import React from "react";
import AddTimer from "../containers/addTimer";
import Timers from "../containers/timers";


const Home = () => {
  return (
    <div className="body-content">
      <h1>Welcome to Time-Tracker!</h1>
      <AddTimer />
      <Timers />
    </div>
  );
};

export default Home;
