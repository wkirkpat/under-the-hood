import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Menu
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
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

// return (
//   <Dropdown>
//     <Dropdown.Toggle variant="success" id="dropdown-basic">
//       Menu
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//       <Dropdown.Item>
//         <Link to="/diy">Do It Yourself</Link>
//       </Dropdown.Item>
//       <Dropdown.Item>
//         <Link to="/symptoms">Symptoms Diagnosis</Link>
//       </Dropdown.Item>
//       <Dropdown.Item>
//         <Link to="/ewl">Engine Warning Light</Link>
//       </Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
// );
