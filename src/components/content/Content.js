import React, { Component } from "react";
import "./Content.css";
import Search from "../image/search.svg";
import Microphone from "../image/microphone.svg";
import Keyboard from "../image/keyboard.svg";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  componentDidMount() {
    this.inputElement.current.focus();
  }
  render() {
    const ggImg = "https://media.giphy.com/media/PCya6Lr0RYHM4/giphy.gif";
    return (
      <div className="container">
        <div className="logo-gg">
          <img src={ggImg} alt="google-img" />
        </div>
        <div className="wrapper">
          <a
            className="sreach-logo"
            href="s"
            style={{ textDecoration: "none" }}
          >
            <img src={Search} alt="sreach-logo" width={20} />
          </a>

          <input type="text" ref={this.inputElement} />
          <a className="type-text" href="s" style={{ textDecoration: "none" }}>
            <img src={Keyboard} alt="sreach-logo" width={20} />
          </a>
          <a className="microphone" href="s" style={{ textDecoration: "none" }}>
            <img src={Microphone} alt="sreach-logo" width={20} />
          </a>
        </div>
        <div className="small-container">
          <a className="gg-search" href="s" style={{ textDecoration: "none" }}>
            google search
          </a>

          <a className="gg-search" href="s" style={{ textDecoration: "none" }}>
            I'm feeling lucky
          </a>
        </div>
        <div className="text">
          Google offered in:
          <a href="s"> Tiếng việt</a>
          <a href="s"> Français</a>
          <a href="s"> 中文（繁體）</a>
        </div>
      </div>
    );
  }
}
