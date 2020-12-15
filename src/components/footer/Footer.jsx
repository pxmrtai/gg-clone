import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <div className="viet-nam">
          <p>Vietnam</p>
        </div>
        <div className="ending">
          <div className="ending-left">
            <a href='a' className="link">Advertising</a>
            <a href='a' className="link">Business</a>
            <a href='a' className="link">About</a>
            <a href='a' className="link">How Search works</a>
          </div>

          <div  className="ending-right">
          <a href='a' className="link">Privacy</a>
          <a href='a' className="link">Terms</a>
          <a href='a' className="link">Settings</a>
          </div>
        </div>
      </div>
    );
  }
}
