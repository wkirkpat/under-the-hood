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
      <div style={{ height: "100px", backgroundColor: "#42f5b9" }}>
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
                  />
                  <span>{this.state.userInfo.name}</span>
                </Link>
              ) : null}
            </div>
          ) : (
            <div />
          )}
          <span>{this.props.title}</span>
          {this.props.hasSearch ? <input placeholder="Search..." /> : null}
          {this.props.hasLogin ? (
            <div>
              <button>
                <Link to="/login">Login</Link>
              </button>
              <button>
                <Link to="/register">Register</Link>
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

// class MenuButton extends React.Component<IMenuButtonProps, IMenuButtonState> {
//   render() {
//     return (
//       <Dropdown>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//           Menu
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item>
//             <Link to="/diy">Do It Yourself</Link>
//           </Dropdown.Item>
//           <Dropdown.Item>
//             <Link to="/symptoms">Symptoms Diagnosis</Link>
//           </Dropdown.Item>
//           <Dropdown.Item>
//             <Link to="/ewl">Engine Warning Light</Link>
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     );
//   }
// }

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

