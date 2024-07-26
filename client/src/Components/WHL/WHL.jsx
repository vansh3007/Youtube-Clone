import React from 'react'
import WHLVideoList from "./WHLVideoList";
import "./WHL.css"
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import { useSelector, useDispatch } from "react-redux";
import { clearhistory } from "../../Action/History.js";
function WHL({ page, videoList, toggleDrawer, toggleSideDrawerBar }) {
  const CurrUser = useSelector((state) => state.currentuserreducer);
   const dispatch = useDispatch();
   const handleclearhistory = () => {
     if (CurrUser) {
       dispatch(
         clearhistory({
           userid: CurrUser?.result._id,
         })
       );
     }
   };

  return (
    <div className="container_Pages_App">
      <LeftSideBar
        toggleDrawer={toggleDrawer}
        toggleSideDrawerBar={toggleSideDrawerBar}
      />
      <div className="container2_Pages_App">
        <p className="conatiner_whl">
          <div className="box_WHL leftside_whl">
            <b>Your {page} Shown Here </b>
            {page === "Video History" && (
              <div className="clear_History_btn" onClick={() => handleclearhistory()}>Clear History</div>
            )}
          </div>
          <div className="rightSide_whl">
            <h1>{page}</h1>
            <div className="whl_list">
              <WHLVideoList
                page={page}
                CurrentUser={CurrUser}
                videoList={videoList}
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default WHL;

