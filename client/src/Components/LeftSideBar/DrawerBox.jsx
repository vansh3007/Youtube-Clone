import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DrawerBox = ({ toggleDrawer, toggleSideDrawerBar }) => {
  const user = useSelector((state) => state.currentuserreducer);
  return (
    <div className="DrawerBox" style={toggleSideDrawerBar}>
      <div className="innerBox">
        <NavLink to={"/"} className="DrawerIcon NavLink">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </NavLink>

        <p className="DrawerIcon ">
          <i class="fa-regular fa-compass"></i>
          <p>Explore</p>
        </p>

        <p className="DrawerIcon">
          <i class="fa-solid fa-money-bill-wheat"></i>
          <p>Subscriptions</p>
        </p>

        <NavLink to={"/library"} className="DrawerIcon NavLink">
          <i class="fa-solid fa-book-open"></i>
          <p>Library</p>
        </NavLink>
        <hr></hr>
        <NavLink to={"/history"} className="DrawerIcon NavLink">
          <i class="fa-solid fa-history"></i>
          <p>History</p>
        </NavLink>
        <NavLink
          to={`/yourVideos/${user?.result?._id}`}
          className="DrawerIcon NavLink"
        >
          <i class="fa-solid fa-camera"></i>
          <p>Your Videos</p>
        </NavLink>

        <NavLink to={"/watchLater"} className="DrawerIcon NavLink">
          <i class="fa-solid fa-clock"></i>
          <p>Watch later</p>
        </NavLink>

        <NavLink to={"/likedvideo"} className="DrawerIcon NavLink">
          <i class="fa-solid fa-thumbs-up"></i>
          <p>Liked Videos</p>
        </NavLink>
        <hr></hr>
        <div className="chennelSubscribe">
          <h2>Your Subsciptions</h2>
          <div className="chennel">
            <p className="chennelLogo">C</p>
            <p className="chennelName">Chennel Name</p>
          </div>
          <div className="chennel">
            <p className="chennelLogo">C</p>
            <p className="chennelName">Chennel Name</p>
          </div>
          <div className="chennel">
            <p className="chennelLogo">C</p>
            <p className="chennelName">Chennel Name</p>
          </div>
          <div className="chennel">
            <p className="chennelLogo">C</p>
            <p className="chennelName">Chennel Name</p>
          </div>
        </div>
      </div>

      <div
        className="container3_DrawaerLeftSidebar"
        onClick={toggleDrawer}
      ></div>
    </div>
  );
};

export default DrawerBox

