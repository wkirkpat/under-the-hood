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


            
          <h1 className="display-4">DIY Windshield Wiper Care</h1>
       
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
            
How to Replace Windshield Wiper</h5>
            <p className="card-text">
              This a quick and simple fix to avoid being caught in the rain and unable to see because the windshield wipers don't work. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=oeezwXQC-mc"
            width="100%"
          />
        </div>
        </div>
        </div> 
    );
  }
}















