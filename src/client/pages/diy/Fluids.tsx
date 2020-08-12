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


            
          <h1 className="display-4">DIY Fluid Maintenance</h1>
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
            <h5 className="card-title">Check Coolant Levels</h5>
            <p className="card-text">
              Air conditioning not as cool as it should be? You might need to check your coolant level. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url=" https://www.youtube.com/watch?v=SLwhD5uXceI"
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
            <h5 className="card-title">Transmission Fluid</h5>
            <p className="card-text">
              One of the worst things that can happen to your car is having the transmission lock up. Make sure it doesn't by checking the transmission fluid level. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=KlFrNZYl9oo"
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
            <h5 className="card-title">Cooling Fluid Exchange</h5>
            <p className="card-text">
              If your engine is running hot, you might need to flush your antifreeze. Check this videe out to learn how. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=g8YZF5cW7-A"
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
            <h5 className="card-title">Transfer Case Fluid</h5>
            <p className="card-text">
              If your car is having problems switching gears, you may need to change your transfer case fluid. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=4Mz3nZ85ihQ"
            width="100%"
          />
        </div>

        </div> 

          </div>
          
          


      
    );
  }
}




