import React from "react";
import Container from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class WindshilWipers extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron row justify-content-center">
          <h1>DIY Windshield Wiper Care</h1>
          </div>        
           
           <div className= "d-flex justify-content-left row ">
           <h3>How to Replace Winshield Wiper</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=oeezwXQC-mc'
             width='100%'
            />   
          </div>


        


          </div>
          
          


      
    );
  }
}


