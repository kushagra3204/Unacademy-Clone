import "./App.css";
import React from "react";
import BeforeHomePage from "./pages/BeforeHomePage";
import { Route, Switch } from "react-router-dom";
import { Goal } from "./pages/GoalPage";
import { CrackPage } from "./pages/CrackProblemPage";
import { CoursePage } from "./pages/CoursePage";

function App() {
  const env = process.env.NODE_ENV;
  const dev = process.env.REACT_APP_DEV;
  const sec = process.env.REACT_APP_SECRECT;
  console.log(env, dev, sec)

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <BeforeHomePage />
        </Route>
        <Route path="/goal">
          <Goal />
        </Route>
        <Route path="/courses">
          <CoursePage />
        </Route>
        <Route path="/crack/:cat/:id" exact>
          <CrackPage />
        </Route>
        <Route>404</Route>
      </Switch>
    </div>
  );
}

export default App;
