import React from "react";
import Container from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class Tires extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron row justify-content-center">
          <h1>DIY Tire Maintenance</h1>
          </div>        
           
           <div className= "d-flex justify-content-left row ">
           <h3>Change Tire</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=joBmbh0AGSQ'
             width='100%'
            />   
          </div>


          <div className= "d-flex justify-content-left row ">
           <h3>Check Pressure</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=QTst6ZdlVtg'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Rotate Tire</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=u3x6PxFYTK8'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Check Tread</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=Vh45TJ0oM_Q'
             width='100%'
            />   
          </div>



          </div>
          
          


      
    );
  }
}


