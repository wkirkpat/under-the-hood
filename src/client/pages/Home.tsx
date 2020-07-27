import React from "react";
import Header from "../components/Header";

export default class Home extends React.Component<IHomeProps, IHomeState> {
  render() {
    return (
      <div>
        <Header
          subtitle="subtitle"
          hasLogin
          title="Under the Hood"
          hasMenu
          hasProfile
          hasSearch
        />
      </div>
    );
  }
}

interface IHomeProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IHomeState {
  userInfo: {
    name: string;
  };
}
