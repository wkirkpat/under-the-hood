import * as React from "react";
import {Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class MenuButton extends React.Component<
  IMenuButtonProps,
  IMenuButtonState
> {
  render() {
    return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
   Menu
     </Dropdown.Toggle>
      
       <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/diy">Do It Yourself</Link>
          </Dropdown.Item>
            <Dropdown.Item>
           <Link to="/symptoms">Symptoms Diagnosis</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link to="/ewl">Engine Warning Light</Link>
          </Dropdown.Item>
       </Dropdown.Menu>
      </Dropdown>
    );
  }
}

interface IMenuButtonProps {}

interface IMenuButtonState {}
