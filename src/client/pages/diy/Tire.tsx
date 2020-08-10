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
            <h5 className="card-title">Change Your Tire</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=Vh45TJ0oM_Q"
            width="100%"
          />
        </div>



          </div>
          
          


      
    );
  }
}


