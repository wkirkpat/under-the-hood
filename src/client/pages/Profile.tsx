import * as React from "react";
import Header from "../components/Header";

export default class Profile extends React.Component<
  IProfileProps,
  IProfileState
> {
  render() {
    return (
      <div>
        <Header
          hasLogin={false}
          subtitle=""
          title="Your Profile"
          hasMenu
          hasProfile
          hasSearch
        />
        <p>This is a profile</p>
      </div>
    );
  }
}

interface IProfileProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IProfileState {
  userInfo: {
    name: string;
  };
}
