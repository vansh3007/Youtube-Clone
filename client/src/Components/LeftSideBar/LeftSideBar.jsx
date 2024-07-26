import React from 'react'
import './LeftSideBar.css'
import DrawerBox from './DrawerBox';
import { NavLink } from "react-router-dom";
function LeftSideBar({ toggleDrawer, toggleSideDrawerBar }) {
  return (
    <>
      <DrawerBox
        toggleDrawer={toggleDrawer}
        toggleSideDrawerBar={toggleSideDrawerBar}
      />
      <div className="LeftSideBarContainer">
        <NavLink to={"/"} className="icon NavLink">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>

       <NavLink to={"/"} className="icon NavLink">
          <i class="fa-regular fa-compass"></i>
          <span>Explore</span>
       </NavLink>

       <NavLink to={"/"} className="icon NavLink">
          <i class="fa-solid fa-money-bill-wheat"></i>
          <span>Subscriptions</span>
       </NavLink>

        <NavLink to={"/library"} className="icon NavLink">
          <i class="fa-solid fa-book-open"></i>
          <span>Library</span>
        </NavLink>
      </div>
    </>
  );
}

export default LeftSideBar
