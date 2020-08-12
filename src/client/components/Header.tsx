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
      <div style={{ height: "10vh", backgroundColor: "#35b0c6" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="ml-2"
        >
          {this.props.hasMenu ? <MenuButton/> : <div style={{flex:"1 2"}}/>}
          <div style={{flex:"8"}}>
             <img style={{height:"200%"}} src="images/logo4.png"/>
             <h3 className="mt-4 headerFont" style={{display:"inline-block", textAlign: "center", color:"#ffffff"}}>{this.props.title}</h3>
           </div>
          {this.props.hasProfile ?
            <Link to="/profile" style={{flex: "1 2", margin:"0 20px", textAlign:"center", }}>
              <img src = "images/pp.png"
                style={{
                  display: "block",
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#d5c8c5",
                  margin: "auto",
                  borderRadius:"12px"
                }}
                className="mt-4"
              />
              <span style = {{color: "white", fontSize: "small"}}>{this.state.userInfo.name}</span>
            </Link> : this.props.hasLogin ? (
            <div className="mt-4 mr-3" style={{flex: "1 2"}}>
              <button className="btn btn-sm border border-dark mr-2 btn-light">
                <Link className="text-dark" to="/login">
                  Login
                </Link>
              </button>
              <button className="btn btn-sm border border-dark btn-light">
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
