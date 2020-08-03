import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Details extends React.Component<
  IDetailsProps,
  IDetailsState
> {
  render() {
    return (
      <div>
        <Header
          title="Details"
          subtitle=""
          hasLogin={false}
          hasMenu
          hasProfile
          hasSearch
        />
        <button>
          <Link to="/maintenance">Maintenance</Link>
        </button>
      </div>
    );
  }
}

interface IDetailsProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IDetailsState {
  userInfo: {
    name: string;
  };
}
