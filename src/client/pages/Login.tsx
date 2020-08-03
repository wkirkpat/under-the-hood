import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";

export default class Login extends React.Component<ILoginProps, ILoginState> {
  render() {
    return (
      <div>
        <Header
          hasMenu={false}
          hasProfile={false}
          hasSearch={false}
          hasLogin={false}
          title="Under the Hood"
          subtitle="Who's Under the Hood"
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
