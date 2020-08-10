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
            <Route path="/details" component={Details} />
            <Route path="/diy" component={DIY} />
            <Route path="/ewl" component={EWL} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/diagnosis" component={Symptoms} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export interface IAppProps { }

export interface IAppState { }

export default App;
