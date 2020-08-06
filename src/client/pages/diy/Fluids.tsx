import React from "react";
import Container from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class Fluids extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron row justify-content-center">
          <h1>DIY Fluid Maintenance</h1>
          </div>        
           
           <div className= "d-flex justify-content-left row ">
           <h3>Check Coolant Levels</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=SLwhD5uXceI'
             width='100%'
            />   
          </div>


          <div className= "d-flex justify-content-left row ">
           <h3>Transmission Fluid</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=KlFrNZYl9oo'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Cooling Fluid Exchange</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=g8YZF5cW7-A'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Transfer Case Fluid</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=4Mz3nZ85ihQ'
             width='100%'
            />   
          </div>



          </div>
          
          


      
    );
  }
}


