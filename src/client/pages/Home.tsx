import React from "react";
import Header from "../components/Header";
import SimpleImageSlider from "react-simple-image-slider";
import { ReactPhotoCollage } from "react-photo-collage";

export default class Home extends React.Component<IHomeProps> {
  render() {
    const images = [
      { url: "images/HomeHead1.jpg" },
      { url: "images/HomeHead2.jpg" },
      { url: "images/HomeHead3.jpg" },
      { url: "images/HomeHead4.jpg" },
      { url: "images/HomeHead5.jpg" },
    ];
    return (
      <div>
        <Header
          subtitle=""
          hasLogin={false}
          title="Under the Hood"
          hasMenu
          hasProfile
          hasSearch
        />
        <SimpleImageSlider
          width="100vw"
          height="85vh"
          images={images}
        />
        <div style={{ textAlign: "center" }}>


          <div className=" d-flex justify-content-center" >
          <div style={{ color: "#ffffffbd", position: "absolute", bottom: "8vh", textAlign: "center", fontSize: 70, fontWeight: "bold", height: "25vh" }}>Know how to properly care for your car</div>
          </div>
        </div>
        <div style={{ borderStyle: "solid", height: "5vh", display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "50px", height: "100%", backgroundColor: "#fafafa", textAlign: "center",   lineHeight: "200%" }}>Airbag Recall</div>
          <div style={{ marginLeft: "125px", marginRight: "150px", lineHeight: "200%" }}>Learn More Information</div>
          <a style= {{ lineHeight: "200%", width: "0%", textAlign: "center"}} target="_blank" href="http://www.google.com">{"MORE>"}</a>
        </div>
        <ReactPhotoCollage width="100vw" height={["40vh", "40vh"]} layout={[3, 3]} photos={[{ src: "images/Home1.jpg" }, { src: "images/Home2.jpg" }, { src: "images/Home3.jpg" }, { src: "images/Home5.jpg" }, { src: "images/Home6.jpg" }, { src: "images/Home11.jpg" }]} showNumOfRemainingPhotos={false} />

        <div style={{ textAlign: "center", fontSize: 40, borderStyle: "solid", padding: "15px" }}>SAFETY COMES FIRST

        <div style={{ padding: "30px" }}>
          <div style={{ fontSize: 30, fontWeight: "bold" }}>Under The Hood's Mission:</div>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>To provide safe travels to family through car maintenance you can depend on.</div>
        </div></div>

        <ReactPhotoCollage width="100vw" height={["40vh", "40vh"]} layout={[3, 3]} photos={[{ src: "images/Home7.jpg" }, { src: "images/Home8.jpg" }, { src: "images/Home9.jpg" }, { src: "images/Home12.jpg" }, { src: "images/Home13.jpg" }, { src: "images/Home10.jpg" }]} showNumOfRemainingPhotos={false} />


      </div>
    );
  }
}










interface IHomeProps {}

