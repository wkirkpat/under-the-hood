import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuButton from "./MenuButton";

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      userInfo: {
        name: "Will",
      },
    };
  }
  render() {
    return (
      <div style={{ height: "10vh", backgroundColor: "#42f5b9" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {this.props.hasMenu || this.props.hasProfile ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              {this.props.hasMenu ? <MenuButton /> : null}
              {this.props.hasProfile ? (
                <Link to="/profile">
                  <div
                    style={{
                      display: "block",
                      height: "50px",
                      width: "50px",
                      backgroundColor: "#a3a3a3",
                    }}
                    className="mt-3"
                  />
                  <span>{this.state.userInfo.name}</span>
                </Link>
              ) : null}
            </div>
          ) : (
            <div />
          )}
          <h3 className="mt-4">{this.props.title}</h3>
          {this.props.hasSearch ? (
            <input className="h-25 m-4" placeholder="Search..." />
          ) : null}
          {this.props.hasLogin ? (
            <div className="mt-3 mr-3">
              <button className="btn btn-primary btn-sm border border-dark mr-2">
                <Link className="text-dark" to="/login">
                  Login
                </Link>
              </button>
              <button className="btn btn-primary btn-sm border border-dark">
                <Link className="text-dark" to="/register">
                  Register
                </Link>
              </button>
            </div>
          ) : null}
          {!this.props.hasSearch && !this.props.hasLogin ? <div /> : null}
        </div>
        <div style={{ textAlign: "center" }}>{this.props.subtitle}</div>
      </div>
    );
  }
}

interface IHeaderProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IHeaderState {
  userInfo: {
    name: string;
  };
}
