import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// compnent that creates overlay elements (slider)
// https://codeburst.io/modals-in-react-f6c3ff9f4701

const Modal = ({ match, history }) => {
  const image = IMAGES[parseInt(match.params.id, 10)];
  if (!image) {
    return null;
  }
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default ModalGallery;