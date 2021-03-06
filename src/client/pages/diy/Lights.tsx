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


            
          <h1 className="display-4">DIY Light Replacement</h1>
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
            <h5 className="card-title">Head Lights </h5>
            <p className="card-text">
              Police will pull you over if your head lights aren't working properly. Avoid that issue by changing them yourself.
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url=" https://www.youtube.com/watch?v=HO3IXM3XkUU"
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
            <h5 className="card-title">Turn Signal</h5>
            <p className="card-text">
              Don't get caught in a dangerous situation. Make sure your turn signals are functioning properly. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=ZO25fucJ3uo
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
            <h5 className="card-title">Brake Signal</h5>
            <p className="card-text">
              Malfunctioning brake lights are even more dangerous. You don't have to depend on someone else to change them. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=kRoLfzkmYak
            "
            width="100%"
          />
        </div>

        
        </div> 



          </div>
          
          


      
    );
  }
}




