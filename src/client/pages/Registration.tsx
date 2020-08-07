import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Header from "../components/Header";
import { FormGroup, FormControl} from "react-bootstrap";

function handleSubmit(event:any) {
  event.preventDefault();
}

export default class Registration extends React.Component<
  IRegistrationProps,
  IRegistrationState
  > {
  render() {
    return (
      <div>
        <Header
          hasLogin={false}
          hasSearch={false}
          hasProfile={false}
          hasMenu={false}
          title="Under the Hood"
          subtitle="Who's Under the Hood?"
        />
        
        <div className="container d-flex justify-content-center mx-auto align-middle" style={{
        flexDirection:"column",
        width:"300px",
       height:"800px"
       }}>
        <div className="Login">
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label>First Name</label>
              <FormControl
              />
              <label>Last Name</label>
              <FormControl
              />
              <label>Email</label>
              <FormControl
                type="email"
              />
              <label>Password</label>
              <FormControl
                type="password"
              />
              <label>Confirm Password</label>
              <FormControl
                type="password"
              />
            </FormGroup>
            <button>
              <a href="/profile" style={{color:"black"}}>Register</a>
              {/* <Link to="/home">Register</Link> */}
            </button>
          </form>
          </div>
        </div>

        
      </div>
    );
  }
}

interface IRegistrationProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IRegistrationState {
  userInfo: {
    name: string;
  };
}
