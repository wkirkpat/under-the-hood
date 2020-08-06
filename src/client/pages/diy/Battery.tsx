import React from "react";
import Container from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class Battery extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron row justify-content-center">
          <h1>DIY Battery Maintenance</h1>
          </div>        
           
           <div className= "d-flex justify-content-left row ">
           <h3>Check Battery</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=dfwhGd148DM'
             width='100%'
            />   
          </div>


          <div className= "d-flex justify-content-left row ">
           <h3>Battery Replacement</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://youtu.be/qz3upAdRuZs'
             width='100%'
            />   
          </div>



          </div>
          
          


      
    );
  }
}


