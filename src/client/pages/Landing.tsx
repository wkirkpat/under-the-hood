import React from "react";
import Header from "../components/Header";
import { ReactPhotoCollage } from "react-photo-collage";

export default class Landing extends React.Component<
  ILandingProps,
  ILandingState
  > {
  render() {
    return (
      <div>
        <Header
          hasLogin
          subtitle=""
          title="Under the Hood"
          hasSearch={false}
          hasMenu={false}
          hasProfile={false}
        />
        <div>
          <ReactPhotoCollage width="100vw" height={["60vh"]} layout={[4]} photos={[{ src: "images/Home1.jpg" }, { src: "images/Home2.jpg" }, { src: "images/Home3.jpg" }, { src: "images/Home5.jpg" }]} showNumOfRemainingPhotos={false} />
          <div style={{height:"20vh", fontSize:"xxx-large", fontWeight:"bold", position:"relative", paddingTop:"20px"}}>
            <div style={{ color: "#35b0c6", textAlign:"center", marginTop:"30px"}}>Doing it right before your car breaks down!</div>
          </div>
          <div style={{height:"10vh", textAlign:"center", fontSize:"x-large"}}>System Decoder * VIN Enable Search * Do It Yourself Guides</div>
          <div style={{fontSize:"x-large", textAlign:"center"}}>We’re here to help you save time and money on your car. You can browse our multiple services that will help pin down that pesky problem!</div>
          <div style={{ borderRadius: "25px", backgroundColor: "#35b0c6", margin: "10vw" }}>
            <div style={{padding:"5vh 5vw"}}>
              <div style={{padding:"30px"}}>
                <img src="images/profilePic1.png" style={{ borderRadius: "50px", width: "90px" }} />
                <span style={{ marginLeft: "30px", fontSize:"larger" }}>"I never knew changing my oil was this easy!" - Garrett</span>
              </div>
              <div style={{padding:"30px"}}>
                <img src="images/profilePic2.png" style={{ borderRadius: "50px", width: "90px" }} />
                <span style={{ marginLeft: "30px", fontSize:"larger" }}>"Getting reminders to change my tires is a great feature!" - Issac</span>
              </div>
              <div style={{padding:"30px"}}>
                <img src="images/profilePic3.png" style={{ borderRadius: "50px", width: "90px" }} />
                <span style={{ marginLeft: "30px", fontSize:"larger" }}>"I am now a car guru. Thank you Under My Hood!" - Hafeeza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface ILandingProps {}

interface ILandingState {
  userInfo: {
    name: string;
  };
}
