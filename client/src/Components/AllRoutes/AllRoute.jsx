import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Library from '../../Pages/Library/Library';
import History from "../../Pages/History/History";
import YourVideo from "../../Pages/Your Video/YourVideo";
import WatchLater from "../../Pages/Watch Later/WatchLater";
import LikedVideo from "../../Pages/Liked Video/LikedVideo";
import VideoPage from "../../Pages/VideoPage/VideoPage";
import Chennal from '../../Pages/Channel/Chennal';

function AllRoute({
  toggleDrawer,
  toggleSideDrawerBar,
  setVidUploadPage,
  seteditcreatechanelbtn,
  editcreatechanelbtn
}) {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            toggleDrawer={toggleDrawer}
            toggleSideDrawerBar={toggleSideDrawerBar}
          />
        }
      />

      <Route
        path="/history"
        element={
          <History
            toggleDrawer={toggleDrawer}
            toggleSideDrawerBar={toggleSideDrawerBar}
          />
        }
      />
      <Route
        path="/yourvideos/:cid"
        element={
          <YourVideo
            toggleDrawer={toggleDrawer}
            toggleSideDrawerBar={toggleSideDrawerBar}
          />
        }
      />
      <Route
        path="/watchlater"
        element={
          <WatchLater
            toggleDrawer={toggleDrawer}
            toggleSideDrawerBar={toggleSideDrawerBar}
          />
        }
      />
      <Route
        path="/library"
        element={
          <Library
            toggleDrawer={toggleDrawer}
            toggleSideDrawerBar={toggleSideDrawerBar}
          />
        }
      />
      <Route
        path="/likedvideo"
        element={
          <LikedVideo
            toggleDrawer={toggleDrawer}
            toggleSideDrawerBar={toggleSideDrawerBar}
          />
        }
      />
      <Route
        path="/videopage/:_id"
        element={
          <VideoPage
            toggleDrawer={toggleDrawer}
            toggleSideDrawerBar={toggleSideDrawerBar}
          />
        }
      />
      <Route
        path="/chennal/:cid"
        element={
          <Chennal
            setVidUploadPage={setVidUploadPage}
            toggleDrawer={toggleDrawer}
            toggleSideDrawerBar={toggleSideDrawerBar}
            seteditcreatechanelbtn={seteditcreatechanelbtn}
          />
        }
      />
    </Routes>
  );
}

export default AllRoute;
