import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import AllRoute from "./Components/AllRoutes/AllRoute";
import "./index.css";
import CreateEditChennal from "./Pages/Channel/CreateEditChennal";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { useDispatch } from "react-redux";
import { fetchallchannel } from "./Action/ChennelUser";
import { getallvideo } from "./Action/Videofile";
import { getallcomment } from "./Action/Comment";
import { getallhistory } from "./Action/History";
import { getalllikedvideo } from "./Action/LikedVideo";
import { getallwatchlater } from "./Action/WatchLater";

const App = () => {
  const [toggleSideDrawerBar, settoggleSideDrawerBar] = useState({
    display: "none",
  });
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    if (toggleSideDrawerBar.display === "none") {
      settoggleSideDrawerBar({
        display: "flex",
      });
    } else {
      settoggleSideDrawerBar({
        display: "none",
      });
    }
  };

  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  const [vidUploadPage, setVidUploadPage] = useState(false);


  useEffect(() => {
    dispatch(fetchallchannel());
    dispatch(getallvideo());
    dispatch(getallcomment());
    dispatch(getallhistory());
     dispatch(getalllikedvideo());
     dispatch(getallwatchlater());
  }, [dispatch]);

  return (
    <Router>
      {editcreatechanelbtn && (
        <CreateEditChennal seteditcreatechanelbtn={seteditcreatechanelbtn} />
      )}

      {vidUploadPage && <VideoUpload vidUploadPage={setVidUploadPage} />}
      <Navbar
        toggleDrawer={toggleDrawer}
        seteditcreatechanelbtn={seteditcreatechanelbtn}
        setVidUploadPage={setVidUploadPage}
      />
      <AllRoute
        toggleDrawer={toggleDrawer}
        toggleSideDrawerBar={toggleSideDrawerBar}
        setVidUploadPage={setVidUploadPage}
        seteditcreatechanelbtn={seteditcreatechanelbtn}
        editcreatechanelbtn={editcreatechanelbtn}
      />
    </Router>
  );
};

export default App;
