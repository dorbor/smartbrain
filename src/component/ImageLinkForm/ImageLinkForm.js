import React, { Component } from "react";
import "./imageForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 ">
        {"This Magic Brain will detect faces in your Pictures. Give it a try"}
      </p>
      <div className="center pa4 br3 shadow-5">
        <div className="form ">
          <input className="f4 pa2 w-70 center input" type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
