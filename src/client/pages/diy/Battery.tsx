import React from "react";
import Container, { Jumbotron } from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class Battery extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron ">
          <h1 className="card-title mb-4 mt-0">DIY Battery Maintenance</h1>
          </div>        
           
           <div className= "jumbotron">
           <h3 className="card-title mb-4 mt-0">Check Battery</h3>
           
           <ReactPlayer
            className='react-player' 
             url='https://www.youtube.com/watch?v=dfwhGd148DM'
             width='100%' />
          </div> 


         <div className= "jumbotron  ">
           <h3 className="card-title mb-4">Battery Replacement</h3>
          
           <ReactPlayer
            className='react-player' 
             url='https://youtu.be/qz3upAdRuZs'
             width='100%' />   
          </div>



          </div>
          
          


      
    );
  }
}


