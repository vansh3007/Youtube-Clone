import React from 'react'
import LeftSidebar from '../../Components/LeftSideBar/LeftSideBar'
import './WatchLater.css'
import WHL from "../../Components/WHL/WHL";
import { useSelector } from 'react-redux';
function WatchLater({ toggleDrawer, toggleSideDrawerBar }) {
  const videoList = useSelector((state) => state.watchlaterreducer);
  return (
    <WHL
      page="Watch Later"
      videoList={videoList}
      toggleDrawer={toggleDrawer}
      toggleSideDrawerBar={toggleSideDrawerBar}
    ></WHL>
  );
}

export default WatchLater
