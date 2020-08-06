import React from "react";
import Container from 'react-bootstrap';
import jumbotron from 'react-bootstrap';
import ReactPlayer from 'react-player'





export default class OilAndFilter extends React.Component {
  render() {
    return (
      <div className= "container">
          <div className= "jumbotron row justify-content-center">
          <h1>DIY Oil and Filter Maintenance</h1>
          </div>        
           
           <div className= "d-flex justify-content-left row ">
           <h3>Oil Levels</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=H9-YT9RiM84'
             width='100%'
            />   
          </div>


          <div className= "d-flex justify-content-left row ">
           <h3>Oil Change</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=O1hF25Cowv8'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Check Oil Filter</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=E0sKPe0c_h4'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Replace Oil Filter</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=pUggWs26Tzc'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Check Air Filter</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=AOJycowF96w'
             width='100%'
            />   
          </div>

          <div className= "d-flex justify-content-left row ">
           <h3>Replace Air Filter</h3></div>
           <div className= "justify-content-left row 'player-wrapper' " >
           <ReactPlayer
            className='react-player'
             url='https://www.youtube.com/watch?v=RdXVxbd59es'
             width='100%'
            />   
          </div>



          </div>
          
          


      
    );
  }
}


