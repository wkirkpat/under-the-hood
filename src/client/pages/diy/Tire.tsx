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


            
          <h1 className="display-4">DIY Tire Maintenance</h1>
        
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
            <h5 className="card-title">Change Your Tire</h5>
            <p className="card-text">
              Don't sit in your car in the heat or cold waiting for someone to come change your tire for you. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url=" https://www.youtube.com/watch?v=joBmbh0AGSQ"
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
            <h5 className="card-title">Check Pressure</h5>
            <p className="card-text">
              This isn't as complicated as it seems. All you need is a pressure guage. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=QTst6ZdlVtg"
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
            <h5 className="card-title">Rotate Tire</h5>
            <p className="card-text">
              Tires need to be rotated regularly to get the best wear and longevity. Save money and extend your tires' life by doing it yourself!
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=u3x6PxFYTK8"
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
            <h5 className="card-title">Check Thread</h5>
            <p className="card-text">
             Avoid dangerous blowouts by making sure your tire thread is thick enough to be safe. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=Vh45TJ0oM_Q"
            width="100%"
          />
        </div>
        </div>     
         </div>
          
          


      
    );
  }
}


