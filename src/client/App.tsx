import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Details from "./pages/Details";
import FuncDIY from "./pages/FuncDIY";
import EWL from "./pages/EWL";
import Maintenance from "./pages/Maintenance";
import Symptoms from "./pages/Symptoms";
import Profile from "./pages/Profile";

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/diy">
              <FuncDIY/>
            </Route>
            <Route path="/ewl">
              <EWL />
            </Route>
            <Route path="/maintenance">
              <Maintenance />
            </Route>
            <Route path="/diagnosis">
              <Symptoms />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export interface IAppProps {}

export interface IAppState {}

export default App;
