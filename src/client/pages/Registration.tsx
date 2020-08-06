import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";


export default class Registration extends React.Component<
  IRegistrationProps,
  IRegistrationState
  > {
  render() {
    return (
      <div>
        <Header
          hasLogin={false}
          hasSearch={false}
          hasProfile={false}
          hasMenu={false}
          title="Under the Hood"
          subtitle="Who's Under the Hood?"
        />
        <div style={{ top: "75%", left: "50%", position: "absolute" }}>
          <div style={{}} />

        </div>

   
        

        <button>
          <Link to="/profile">Sign Up</Link>
        </button>
      </div>
    );
  }
}

interface IRegistrationProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IRegistrationState {
  userInfo: {
    name: string;
  };
}
