import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import AllRoute from "./Components/AllRoutes/AllRoute";
import "./index.css";
import CreateEditChennal from "./Pages/Channel/CreateEditChennal";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { useDispatch, useSelector } from "react-redux";
import { fetchallchannel } from "./Action/ChennelUser";
import { getallvideo } from "./Action/Videofile";
import { getallcomment } from "./Action/Comment";
import { getallhistory } from "./Action/History";
import { getalllikedvideo } from "./Action/LikedVideo";
import { getallwatchlater } from "./Action/WatchLater";
import { fetchUserProfile } from "./Action/Profile";

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
  // const CurrUser = useSelector((state) => state.currentuserreducer);
  // console.log(CurrUser?.result?._id)

  const value = JSON.parse(localStorage.getItem("profile"));
  // console.log(value);
  
  useEffect(() => {
    if (value?.result) {
      // console.log(value);
      dispatch(fetchUserProfile(value.result._id));
    } else {
      console.log("User ID is undefined");
    }
    
    dispatch(fetchallchannel());
    dispatch(getallvideo());
    dispatch(getallcomment());
    dispatch(getallhistory());
    dispatch(getalllikedvideo());
    dispatch(getallwatchlater());
  }, [dispatch,value]);

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
