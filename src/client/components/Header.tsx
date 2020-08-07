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
          {this.props.hasMenu ? <MenuButton/> : <div style={{flex:"1 2"}}/>}
          <h3 className="mt-4" style={{flex: "8", textAlign:"center"}}>{this.props.title}</h3>
          {this.props.hasProfile ?
            <Link to="/profile" style={{flex: "1 2", margin:"0 20px", textAlign:"center"}}>
              <div
                style={{
                  display: "block",
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#a3a3a3",
                  margin: "auto"
                }}
                className="mt-4"
              />
              <span>{this.state.userInfo.name}</span>
            </Link> : this.props.hasLogin ? (
            <div className="mt-4 mr-3" style={{flex: "1 2"}}>
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
          ) : <div style={{flex: "1 2"}}/>}
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
