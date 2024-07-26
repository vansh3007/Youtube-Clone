import React from 'react'
import LeftSidebar from '../../Components/LeftSideBar/LeftSideBar'
import './LikedVideo.css'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';
function LikedVideo({ toggleDrawer, toggleSideDrawerBar }) {
  const videoList = useSelector((state) => state.likedvideoreducer);
  // console.log(videoList);
  return (
    <WHL
      page="Liked Video"
      videoList={videoList}
      toggleDrawer={toggleDrawer}
      toggleSideDrawerBar={toggleSideDrawerBar}
    ></WHL>
  );
}

export default LikedVideo
