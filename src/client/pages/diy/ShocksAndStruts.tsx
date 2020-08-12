import React from "react";
import Container, { Jumbotron } from "react-bootstrap";
import jumbotron from "react-bootstrap";
import ReactPlayer from "react-player";

export default class Battery extends React.Component {
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron "
          style={{
            backgroundColor: "#ffffff",
          }} >


            
          <h1 className="display-4">DIY Shock and Strut Maintenance</h1>
          <hr className="my-5" ></hr>
           

       



        <div className="card mt-5">
          <div
            className="card-body"
            style={{
              borderColor: "#42f5b9",
              color: "#ffffff",
              backgroundColor: "#474b52",
            }}
          >
            <h5 className="card-title">
            Check Shock and Struts</h5>
            <p className="card-text">
              Bumpy ride? Make sure your shocks and struts are ok. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=uPh75zckPWE
            "
            width="100%"
          />
        </div>


        <div className="card mt-5">
          <div
            className="card-body"
            style={{
              borderColor: "#42f5b9",
              color: "#ffffff",
              backgroundColor: "#474b52",
            }}
          >
            <h5 className="card-title">
            Shocks and Struts Replacement</h5>
            <p className="card-text">
              Save some money and fix your shocks and struts yourself. You got this!
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=cI3EDqzOghcs
            "
            width="100%"
          />
        </div>

        </div> 
        </div>
    );
  }
}















