import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { RouteComponentProps } from "react-router";
import { FormGroup, FormControl } from "react-bootstrap";
import { json, setAccessToken, User } from "../utils/api";

const Login: React.FC<ILoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const handleLogin = async (e:React.MouseEvent<HTMLButtonElement>) => {
    try {
      let result = await json("/auth/login", "POST", {
        email: email,
        password: password,
      });

      if (result) {
        setAlert(false);
        setAccessToken(result.token, {
          userid: result.userid,
          role: result.role,
        });
      } else {
        setAlert(true);
      }
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    if(User.userid) {
    }
  }, [])

  return (
    <div>
      <div>
        <Header
          hasMenu={false}
          hasProfile={false}
          hasSearch={false}
          hasLogin={false}
          title="Under the Hood"
          subtitle="Who's Under the Hood"
        />
      </div>

      {
        <React.Fragment>
          <div
            className="container d-flex justify-content-center mx-auto align-middle"
            style={{
              flexDirection: "column",
              width: "300px",
              height: "800px",
            }}
          >
            {(() => {
              if (alert) {
                return (
                  <div className="alert alert-danger" role="alert">
                    Invalid Login
                  </div>
                );
              }
            })()}
            <div><a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"></a>  <a href="https://www.flaticon.com/" title="Flaticon"></a></div>
            <div className="Login">
              <FormGroup controlId="email">
                <label>Email</label>
                <FormControl
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <label>Password</label>
                <FormControl
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>

              <button onClick={handleLogin}>
               Sign In
              </button>
            </div>
          </div>
        </React.Fragment>
      }
    </div>
  );
};

interface ILoginProps extends RouteComponentProps {}

export default Login;
