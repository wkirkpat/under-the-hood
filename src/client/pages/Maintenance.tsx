import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Maintenance extends React.Component<
  IMaintenanceProps,
  IMaintenanceState
> {
  render() {
    return (
      <div>
        <Header
          hasLogin
          subtitle="subtitle"
          title="Maintenance"
          hasMenu
          hasProfile
          hasSearch
        />
      </div>
    );
  }
}

interface IMaintenanceProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IMaintenanceState {
  userInfo: {
    name: string;
  };
}
