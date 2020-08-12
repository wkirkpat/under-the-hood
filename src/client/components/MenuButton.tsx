import * as React from "react";
import {Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class MenuButton extends React.Component<
  IMenuButtonProps,
  IMenuButtonState
> {
  render() {
    return (
      <div style={{display:"inline-block"}}>
      <Dropdown className="mt-4 ml-2">
    <Dropdown.Toggle variant="link" id="dropdown-basic" className="shadow-sm">
   <img style={{width:"30px"}} src="images/menu.png"/>
     </Dropdown.Toggle>
      
       <Dropdown.Menu>
         <Dropdown.Item>
           <Link to="/home">Home</Link>
         </Dropdown.Item>
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
      </div>
    );
  }
}

interface IMenuButtonProps {}

interface IMenuButtonState {}
