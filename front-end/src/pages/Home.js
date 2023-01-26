import React, { Component } from "react";
import futsalheader from "./../assets/futsalheader.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div>
          <img src={futsalheader} className="futsalheader" alt="futsal logo" />
        </div>
        <div>
          <h2 className="newcourt">New Court Open in central Stockholm</h2>
          <h1 className="hometext"> >PLAY FUTSAL</h1>
        </div>
        <Link to="/booking-app/front-end/src/pages/Courts.js">
          <button className="button" type="button">BOOK NOW!</button>
        </Link>
      </div>
    );
  }
}

export default Home;
