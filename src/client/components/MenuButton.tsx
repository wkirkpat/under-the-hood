import * as React from "react";
import {Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class MenuButton extends React.Component<
  IMenuButtonProps,
  IMenuButtonState
> {
  render() {
    return (
      <>
      <Dropdown className="m-4">
    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
   <img style={{width:"30px"}} src="images/menu.png"/>
     </Dropdown.Toggle>
      
       <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/diy">Do It Yourself</Link>
          </Dropdown.Item>
            <Dropdown.Item>
           <Link to="/diagnosis">Symptoms Diagnosis</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link to="/ewl">Dashboard Warning Light</Link>
          </Dropdown.Item>
       </Dropdown.Menu>
      </Dropdown>
      </>
    );
  }
}

interface IMenuButtonProps {}

interface IMenuButtonState {}
