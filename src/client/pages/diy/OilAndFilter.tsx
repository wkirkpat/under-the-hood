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


            
          <h1 className="display-4">DIY Oil and Filter Maintenance</h1>
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
            <h5 className="card-title">Oil Levels</h5>
            <p className="card-text">
              Make sure that your oil levels are where they need to be.
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url=" https://www.youtube.com/watch?v=H9-YT9RiM84"
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
            <h5 className="card-title">Oil Change</h5>
            <p className="card-text">
              You don't have to take your care to a mechanic to get an oil change.  You can do it yourself- check it out!
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=O1hF25Cowv8"
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
            <h5 className="card-title">Check Oil Filter</h5>
            <p className="card-text">
              Make sure your oil filter isn't old!
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=E0sKPe0c_h4"
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
            <h5 className="card-title">Replace Oil Filter</h5>
            <p className="card-text">
             Learn how to replace the oil filter below. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=pUggWs26Tzc"
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
            <h5 className="card-title">Check Air Filter</h5>
            <p className="card-text">
              If your air filter was ever important, it is definitely right now. A cleaner, more efficient air filter will help prevent air born viruses. 
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=AOJycowF96w"
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
            <h5 className="card-title">Replace Air Filter</h5>
            <p className="card-text">
              Replace your filter if it isn't up to par!
            </p>
          </div>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=RdXVxbd59es"
            width="100%"
          />
        </div>
        </div> 
          </div>
          
          


      
    );
  }
}



