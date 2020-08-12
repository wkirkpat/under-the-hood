import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { FormGroup, FormControl } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { json, setAccessToken, User } from "../utils/api";

const Registration: React.FC<IRegistrationProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passMatch, setPassMatch] = useState(true);

  const handleRegister = async () => {
    if (confirmPass != password) {
      setPassMatch(false);
    } else {
      try {
        let results = await json("/auth/register", "POST", {
          email,
          password,
          firstName,
          lastName,
        });
        if (results) {
          setAccessToken(results.token, {
            userid: results.userid,
            role: results.role,
          });
          props.history.replace("/home"); 
        }
      } catch (e) {
        throw e;
      }
    }
  };

  useEffect(() => {
    if(User.userid) {
      props.history.replace("/home"); 
    }
  }, [])


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

      <div
        className="container d-flex justify-content-center mx-auto align-middle"
        style={{
          flexDirection: "column",
          width: "300px",
          height: "800px",
        }}
      >
        <div className="Login">
          {(() => {
            if(!passMatch) {
              return (
                <div className="alert alert-danger" role="alert">
                Passwords Don't Match
              </div>
              )
            }
          })()}
          <FormGroup>
            <label>First Name</label>
            <FormControl onChange={(e) => setFirstName(e.target.value)} />
            <label>Last Name</label>
            <FormControl onChange={(e) => setLastName(e.target.value)} />
            <label>Email</label>
            <FormControl
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <FormControl
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm Password</label>
            <FormControl
              type="password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </FormGroup>
          <button style={{borderRadius:"9px", backgroundColor:"#35b0c6", color:"white", padding:"5px 10px", fontWeight:"bold"}} onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

interface IRegistrationProps extends RouteComponentProps {}


export default Registration;
