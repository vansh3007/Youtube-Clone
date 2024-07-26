import React from 'react'
import "./NavLogo.css";
import logo from "../youtube_nav_logo.svg";
function NavLogo({ toggleDrawer }) {
  return (
    <div className="navLogoContainer">
      <div className="navToggle" onClick={toggleDrawer}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="navLogo">
        <img src={logo} alt="" />
        <p>YouTube</p>
      </div>
    </div>
  );
}

export default NavLogo
