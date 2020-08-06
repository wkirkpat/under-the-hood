import React from "react";
import Container from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class ShocksAndStruts extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron row justify-content-center">
          <h1>DIY Shock and Strut Maintenance</h1>
          </div>        
           
           <div className= "d-flex justify-content-left row ">
           <h3>Check Shock and Struts</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=uPh75zckPWE'
             width='100%'
            />   
          </div>


          <div className= "d-flex justify-content-left row ">
           <h3>Shocks and Struts Replacement</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=cI3EDqzOghcs'
             width='100%'
            />   
          </div>



          </div>
          
          


      
    );
  }
}


