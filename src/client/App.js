import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Details from './pages/Details'
import DIY from './pages/DIY'
import EWL from './pages/EWL'
import Maintenance from './pages/Maintenance'
import Symptoms from './pages/Symptoms'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/diy">
            <DIY />
          </Route>
          <Route path="/ewl">
            <EWL />
          </Route>
          <Route path="/maintenance">
            <Maintenance />
          </Route>
          <Route path="/symptoms">
            <Symptoms />
          </Route>
          <Route path="/home">
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
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
