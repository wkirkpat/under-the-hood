import React from "react";
import Header from "../components/Header";

export default class Landing extends React.Component<
  ILandingProps,
  ILandingState
> {
  render() {
    return (
      <div>
        <Header
          hasLogin
          subtitle="subtitle"
          title="Under the Hood"
          hasSearch
          hasMenu
          hasProfile
        />
      </div>
    );
  }
}

interface ILandingProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface ILandingState {
  userInfo: {
    name: string;
  };
}
