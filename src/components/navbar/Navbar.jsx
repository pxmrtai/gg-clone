import React, { Component } from "react";
import menuNav from "../image/menu-nav.svg";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
<div className="container-small">
        <div className="gmail">Gmail</div>
        <div className="photo">Photos</div>
        <div className="logo-menu">
          <img src={menuNav} alt="menu-nav" width={20} />
        </div>
        <div className="avatar">
          <img
            src="https://lh3.googleusercontent.com/ogw/ADGmqu8Pslo3vPoMH0AS_E50pcYcZI9fuPH9HMdB0Vu6=s32-c-mo"
            alt="avatar"
            width={32}
            className='img'
          />
        </div>
</div>
      </div>
    );
  }
}
