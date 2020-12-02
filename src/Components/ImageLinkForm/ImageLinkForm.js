import React, { useState} from "react";
import "./ImageLinkForm.css";
import Clarifai from "clarifai";

// const app = new Clarifai.App({
//   apiKey: "93e6efbde41c47f6b42487c40bd1cd35",
// });

const ImageLinkForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [inputChange, OnInputChange] = useState("");
  // const [imageUrl] = useState("");

  const buttonClick = () => {
    console.log("click");
    // app.models
    // // .predict(Clarifai.COLOR_MODEL,{imageUrl})
    // .then(
    //   function(resp){
    //     console.log(resp)
    //   },
    //   function(err){
    //     console.log(err)
    //   }
    // )
  };
  return (
    <div>
      <p className="f3">
        {"This Magic brain will detect faces in your Images! Give it a spin!"}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={(event) => {
              OnInputChange(event.target.value);
              console.log(event.target.value)
            }}
          />
          <button
            onClick={buttonClick}
            className="w-30 grow f4 link ph3 pv2 white dib bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;


// "d02b4508df58432fbb84e800597b8959", 

// this.setState({
              //   input:event.target.value
              // });
              