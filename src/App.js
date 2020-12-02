import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
const particlesOptions = {
  particles:{
    number:{
      value:100,
      density:{
        enable:true,
        value_area:1000
      }

    },
    line_linked:{
      enable:true,
      color: "#FFFFFF",
      blur:5
    }
  }
};
function App() {
  // const [{title,setTitle}] = useState('')  
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm/>
      <FaceRecognition/>
    </div>
  );
}

export default App;
