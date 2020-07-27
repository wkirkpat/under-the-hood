import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Details from "./pages/Details";
import DIY from "./pages/DIY";
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
              <Details
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/diy">
              <DIY
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/ewl">
              <EWL
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/maintenance">
              <Maintenance
                title="title"
				hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/symptoms">
              <Symptoms
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/home">
              <Home
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/login">
              <Login
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/register">
              <Registration
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/profile">
              <Profile
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
            </Route>
            <Route path="/">
              <Landing
                title="title"
                hasMenu
                hasLogin
                hasProfile
                hasSearch
                subtitle="subtitle"
              />
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
