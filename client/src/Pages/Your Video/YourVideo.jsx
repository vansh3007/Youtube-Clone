import React from 'react'
import './YourVideo.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function YourVideo({ toggleDrawer, toggleSideDrawerBar }) {
   const CurrUser = useSelector((state) => state.currentuserreducer);
   const { cid } = useParams();
   const vid = useSelector((state) => state.videoreducer)
     ?.data?.filter((q) => q?.videochanel === cid)
     .reverse();

  
  return (
    <div className="YourVideoContainer">
      <LeftSideBar
        toggleDrawer={toggleDrawer}
        toggleSideDrawerBar={toggleSideDrawerBar}
      />
      <div className="innerContainer">
        <div className="container_yourvideo">
          <h1>Videos Uploaded by You</h1>
          <br></br>
          {CurrUser ? (
            <>
              <ShowVideoGrid vids={vid} />
            </>
          ) : (
            <>
              <h3>Plz Login to see Your uploded video list</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourVideo
