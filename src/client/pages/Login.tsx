import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Header
          hasMenu
          hasProfile
          hasSearch
          hasLogin
          title="Under the Hood"
          subtitle="Login"
        />
        <div style={{ top: "75%", left: "50%", position: "absolute" }}>
          <button>
            <Link to="/home">Sign In</Link>
          </button>
        </div>
      </div>
    );
  }
}

interface ILoginProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface ILoginState {
  userInfo: {
    name: string;
  };
}
