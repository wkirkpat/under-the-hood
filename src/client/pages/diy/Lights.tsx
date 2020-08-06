import React from "react";
import Container from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class Lights extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron row justify-content-center">
          <h1>DIY Light Replacement</h1>
          </div>        
           
           <div className= "d-flex justify-content-left row ">
           <h3>Head Lights</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=HO3IXM3XkUU'
             width='100%'
            />   
          </div>


          <div className= "d-flex justify-content-left row ">
           <h3>Turn Signal</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=ZO25fucJ3uo'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Brake Signal</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=kRoLfzkmYak'
             width='100%'
            />   
          </div>




          </div>
          
          


      
    );
  }
}


