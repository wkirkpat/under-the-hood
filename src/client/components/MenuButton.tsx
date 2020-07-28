import * as React from "react";
import { Link } from "react-router-dom";

export default class MenuButton extends React.Component<
  IMenuButtonProps,
  IMenuButtonState
> {
  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-success dropdown-toggle"
          type="button"
          id="menuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Menu
        </button>
        <div className="dropdown-menu" aria-labelledby="menuButton">
         <Link to="/diy"> <button className="dropdown-item" type="button">
            Do It Yourself
          </button></Link>
          <Link to="/symptoms"><button className="dropdown-item" type="button">
            Symptoms Diagnosis
          </button></Link>
          <Link to="/ewl"><button className="dropdown-item" type="button">
            Engine Warning Light
          </button></Link>
        </div>
      </div>
    );
  }
}

interface IMenuButtonProps {}

interface IMenuButtonState {}
