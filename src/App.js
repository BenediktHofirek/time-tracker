import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faSave, faTimes);

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;
