import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import Description from "./Description";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import { useParams } from "react-router-dom";
import "./Description.css"
import { useSelector } from "react-redux";
function Chennal(
  {toggleDrawer,
  toggleSideDrawerBar,
  setVidUploadPage,
  seteditcreatechanelbtn,
  editcreatechanelbtn}
) {
  const { cid } = useParams();
   const vid = useSelector((state) => state.videoreducer)
     ?.data?.filter((q) => q?.videochanel === cid)
     .reverse();

  return (
    <div className="chennelContainer">
      <LeftSideBar
        toggleDrawer={toggleDrawer}
        toggleSideDrawerBar={toggleSideDrawerBar}
      />
      <div className="chennelConatiner2">
        <Description
          cid={cid}
          setVidUploadPage={setVidUploadPage}
          seteditcreatechanelbtn={seteditcreatechanelbtn}
          editcreatechanelbtn={editcreatechanelbtn}
        />
        <ShowVideoGrid vids={vid} />
      </div>
    </div>
  );
}

export default Chennal;
