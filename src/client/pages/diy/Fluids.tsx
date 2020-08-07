import React from "react";
import Container from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class Fluids extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron ">
          <h1 className="card-title mb-4 mt-0">DIY Fluid Maintenance</h1>
          </div>        
           
           <div className= "jumbotron ">
           <h3 className="card-title mb-4 mt-0">Check Coolant Levels</h3>
           
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=SLwhD5uXceI'
             width='100%'
            />   
          </div>


          <div className= "jumbotron ">
          <h3 className="card-title mb-4">Transmission Fluid</h3>
           
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=KlFrNZYl9oo'
             width='100%'
            />   
          </div>

          <div className= "jumbotron  ">
           <h3 className="card-title mb-4">Cooling Fluid Exchange</h3>
           
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=g8YZF5cW7-A'
             width='100%'
            />   
          </div>

          <div className= "jumbotron">
          <h3 className="card-title mb-4">Transfer Case Fluid</h3>
           
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=4Mz3nZ85ihQ'
             width='100%'
            />   
                  </div></div>
          
          


      
    );
  }
}


