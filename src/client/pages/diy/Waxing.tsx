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


            
          <h1 className="display-4">DIY Car Wax</h1>
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
How to Wax Your Car</h5>
            <p className="card-text">
             Wax on, wax off! Make sure your car looks fresh and clean so that you can show it off!
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url=" https://www.youtube.com/watch?v=1dc4toCFGFI"
            width="100%"
          />
        </div>
        </div>
        </div> 
    );
  }
}















