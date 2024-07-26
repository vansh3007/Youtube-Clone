import React, { useEffect } from 'react';
import './VideoPage.css';
import LeftSidebar from "../../Components/LeftSideBar/LeftSideBar";
import { useParams } from 'react-router-dom';
import LikeShareDownbtn from './LikeShareDownbtn.jsx';
import Comment from '../Comment/Comment.jsx';
import { useSelector, useDispatch } from "react-redux";
import { viewvideo } from "../../Action/Videofile.js";
import { addtohistory } from '../../Action/History.js';

function VideoPage({ toggleDrawer, toggleSideDrawerBar }) {
  const { _id } = useParams();
  
  const vid = useSelector((state) => state.videoreducer);
   const vi = vid?.data?.filter((q) => q._id === _id)[0];
  const dispatch = useDispatch();

   const currentuser = useSelector((state) => state.currentuserreducer);
   const handleviews = () => {
     dispatch(viewvideo({ id: _id }));
   };
  const handlehistory = () => {
      dispatch(
        addtohistory({
          videoid: _id,
          viewer: currentuser?.result._id,
        })
      ); 
    };
    useEffect(() => {
      if (currentuser) {
        handlehistory();
      }
      handleviews();
    }, []);
  return (
    <div className="OuterVideoPageContainer">
      <LeftSidebar
        toggleDrawer={toggleDrawer}
        toggleSideDrawerBar={toggleSideDrawerBar}
      />
      <div className="innerVideoPageContainer">
        <div className="showVideoPage">
          <video
            src={`http://localhost:5000/${vi?.filepath}`}
            controls
            className="videoPlay"
          />

          <p className="videoTitleVideoPage">{vi?.videotitle}</p>
          <div className="videoInfo">
            <div className="videoBoxDetailsVideoPage">
              <div className="chennelInfoVideoPage">
                <p className="chennelLogo">
                  {vi?.uploader.charAt(0).toUpperCase()}
                </p>
                <p className="videochennelVideoPage">
                  <p className="chennelName">{vi?.uploader}</p>
                  <p className="chennelSubscribers">
                    {/* {vi?.subscribers} subscribers */}
                  </p>
                </p>
                <p className="subscibeBtn">Subscribe</p>
              </div>
            </div>
            <div className="likeShareDownload">
              <LikeShareDownbtn vv={vi} vid={_id} />
            </div>
          </div>
          <br></br>
          <hr></hr>
          <div className="videoComments">
            <p className="videoCommentsTitle">Comments</p>
            <div className="VideoCommentBox">
              <Comment vi={vi} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;



