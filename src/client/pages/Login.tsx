import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import {RouteComponentProps} from "react-router";
import { Button, FormGroup, FormControl, Container } from "react-bootstrap";


const Login: React.FC<ILoginProps> = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event:any) {
    event.preventDefault();
  }

  return (
    <div>
      <div style={{  }}>
      <Header
        hasMenu={false}
        hasProfile={false}
        hasSearch={false}
        hasLogin={false}
        title="Under the Hood"
        subtitle="Who's Under the Hood"
      />
  </div>


  { <React.Fragment>
<div className="container d-flex justify-content-center mx-auto align-middle" style={{
        flexDirection:"column",
        width:"300px",
       height:"800px"
       }}>
        <div className="Login">
          <form onSubmit={handleSubmit}>
            <FormGroup controlId="email">
              <label>Email</label>
              <FormControl
              
               
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <label>Password</label>
              <FormControl
             
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>

           

            <button>
              <Link to="/home" >Sign In</Link>
            </button>
          </form>
          </div>
        </div>
       </React.Fragment>
      }
      </div>
  );
}


interface ILoginProps extends RouteComponentProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

export default Login 