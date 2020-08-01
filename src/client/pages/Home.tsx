import React from "react";
import Header from "../components/Header";
import SimpleImageSlider from "react-simple-image-slider";
import ReactPhotoCollage from "react-photo-collage";

export default class Home extends React.Component<IHomeProps, IHomeState> {
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
          subtitle="subtitle"
          hasLogin
          title="Under the Hood"
          hasMenu
          hasProfile
          hasSearch
        />
        <SimpleImageSlider
          width="100vw"
          height="60vh"
          images={images}
        />

        <div style={{ textAlign: "center", fontSize: 70, fontWeight: "bold", height: "25vh" }}>Know how to properly care for your car</div>

        <div style={{ borderStyle: "solid", height: "5vh", display: "flex", flexDirection: "row" }}>
          <div style={{ height: "100%", backgroundColor: "#fafafa", textAlign: "center", border: ".5px solid black", padding: "0 30px", lineHeight: "200%" }}>Airbag Recall</div>
          <div style={{ marginLeft: "50px", marginRight: "150px", lineHeight: "200%" }}>Learn More Information</div>
          <a style={{ lineHeight: "200%" }} target="_blank" href="http://www.google.com">{"MORE >"}</a>
        </div>
        <ReactPhotoCollage width="100vw" height={["20vh", "20vh"]} layout={[3, 2]} photos={[{ src: "images/Home1" }, { src: "images/Home2" }, { src: "images/Home3" }, { src: "images/Home5" }, { src: "images/Home6" }]} />

        <div style={{ textAlign: "center", fontSize: 40, }}>SAFETY COME FIRST</div>

        <ReactPhotoCollage width="100vw" height={["20vh", "20vh"]} layout={[2, 1]} photos={[{ src: "images/Home7" }, { src: "images/Home8" }, { src: "images/Home9" }]} />
        <div style={{ textAlign: "center", fontSize: 40, borderStyle: "solid" }}>OUR COMPANY</div>
        <div style={{ textAlign: "center", fontSize: 20, }}>MISSION STATEMENT</div>
      </div>
    );
  }
}

<button type="button" class="btn btn-primary btn-block">Full-Width Button</button>










interface IHomeProps {
  subtitle: string;
  hasSearch: boolean;
  hasLogin: boolean;
  hasProfile: boolean;
  hasMenu: boolean;
  title: string;
}

interface IHomeState {
  userInfo: {
    name: string;
  };
}
