import React from "react";
import Header from "../components/Header";

export default class Symptoms extends React.Component<
  ISymptomsProps,
  ISymptomsState
> {
  render() {
    return (
      <div>
        <Header
          hasLogin
          subtitle="subtitle"
          title="Symptoms Diagnosis"
          hasMenu
          hasProfile
          hasSearch
        />
      </div>
    );
  }
}

interface ISymptomsProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface ISymptomsState {
  userInfo: {
    name: string;
  };
}
