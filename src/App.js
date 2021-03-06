import React, { Component } from "react";
import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import Rank from "./component/Rank/Rank";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: { value: 200, density: { enable: true, color: "#3ca9d1, blur: 6" } }
  }
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* 
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
