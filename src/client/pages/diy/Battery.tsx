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
          }}
        >
          <h1 className="display-4">DIY Battery Maintenance</h1>
          <hr className="my-5" ></hr>

        <div className="card">
          <div
            className="card-body"
            style={{
              borderColor: "#42f5b9",
              color: "#ffffff",
              backgroundColor: "#474b52",
            }}
          >
            <h5 className="card-title">Check Battery</h5>
            <p className="card-text">
              Having problems starting your engine? Watch the video below to find out if there is anything wrong with your battery. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=o_HzL6eKeHk"
            width="100%"
          />
        </div>




        <div className="card mt-5">
          <div
            className="card-body "
            style={{
              borderColor: "#42f5b9",
              color: "#ffffff",
              backgroundColor: "#474b52",
            }}
          >
            <h5 className="card-title">Battery Replacement</h5>
            <p className="card-text">
              If you checked your battery and found out it's on your last leg, you can change it yourself with this video!
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/qz3upAdRuZs"
            width="100%"
          />
        </div>
        </div>
      </div>
    );
  }
}
