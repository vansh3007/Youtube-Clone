import React, { useEffect, useRef, useState } from "react";
import "./VideoPage.css";
import LeftSidebar from "../../Components/LeftSideBar/LeftSideBar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { viewvideo } from "../../Action/Videofile.js";
import { addtohistory } from "../../Action/History.js";
import { setcurrentuser } from "../../Action/CurrUser.js";
import { updatepointsdata } from "../../Action/ChennelUser.js";
import { useNavigate } from "react-router-dom";

function VideoPage({ toggleDrawer, toggleSideDrawerBar }) {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currUser = useSelector((state) => state.currentuserreducer);

  const vid = useSelector((state) => state.videoreducer);
  const vi = vid?.data?.find((q) => q._id === _id);

  const currentuser = useSelector((state) => state.currentuserreducer);

  const videoRef = useRef(null);
  const notificationRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wasLongPress, setWasLongPress] = useState(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  let tapCount = 0;
  let tapTimeout;
  let longPressTimeout;

  useEffect(() => {
    if (currentuser) {
      dispatch(addtohistory({ videoid: _id, viewer: currentuser?.result._id }));
    }
    dispatch(viewvideo({ id: _id }));
  }, [currentuser, dispatch, _id]);

  const handleSingleTap = (clientX, clientY) => {
    const video = videoRef.current;
    const rect = video.getBoundingClientRect();

    if (
      clientY > rect.top + rect.height * 0.4 &&
      clientY < rect.top + rect.height * 0.6 &&
      clientX > rect.left + rect.width * 0.2 &&
      clientX < rect.left + rect.width * 0.8
    ) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }

    if (
      clientX > rect.left + rect.width * 0.8 &&
      clientY < rect.top + rect.height * 0.2
    ) {
      showLocation();
    }
  };

  const handleDoubleTap = (clientX) => {
    
    const video = videoRef.current;
    const rect = video.getBoundingClientRect();

    if (clientX > rect.left + rect.width / 2) {
      document.exitFullscreen();
      video.currentTime += 10;
    } else {
      document.exitFullscreen();
      video.currentTime -= 10;
    }
  };

  const handleTripleTap = (clientX) => {
    const rect = videoRef.current.getBoundingClientRect();

    if (
      clientX > rect.left + rect.width * 0.2 &&
      clientX < rect.left + rect.width * 0.8
    ) {
      for (let i = 0; i < vid?.data?.length; i++) {
        if (vid?.data[i]._id === vi._id) {
          let vidId = vid?.data[i - 1]?._id;
          if (vidId) {
            navigate(`/videopage/${vidId}`);
            document.exitFullscreen();
          }
          break;
        }
      }
    } else if (clientX > rect.left + rect.width * 0.8) {
      window.history.back();
      document.exitFullscreen();
    } else {
      alert("Please add a comment")
      document.exitFullscreen();
    }
  };

  const handleLongPress = (clientX) => {
    const video = videoRef.current;
    const rect = video.getBoundingClientRect();

    if (!isPlaying) {
      video.play();
      setIsPlaying(true);
    }

    if (clientX > rect.left + rect.width / 2) {
      video.playbackRate = 2;
    } else {
      video.playbackRate = 0.5;
    }

    setWasLongPress(true);
  };

  const resetTapCount = () => {
    tapCount = 0;
  };

  const resetPlaybackSpeed = () => {
    const video = videoRef.current;
    if (video.playbackRate !== 1) {
      video.playbackRate = 1;
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleTouchStart = (event) => {
      startXRef.current = event.changedTouches[0].clientX;
      startYRef.current = event.changedTouches[0].clientY;

      clearTimeout(tapTimeout);
      tapCount++;
      longPressTimeout = setTimeout(() => {
        handleLongPress(startXRef.current);
        resetTapCount();
      }, 500);
    };

    const handleTouchEnd = () => {
      clearTimeout(longPressTimeout);

      if (tapCount === 1) {
        handleSingleTap(startXRef.current, startYRef.current);
      } else if (tapCount === 2) {
        handleDoubleTap(startXRef.current);
      } else if (tapCount === 3) {
        handleTripleTap(startXRef.current);
      }

      tapTimeout = setTimeout(() => {
        resetTapCount();
        if (wasLongPress) {
          resetPlaybackSpeed();
          setWasLongPress(false);
        }
      }, 300);
    };

    const handleMouseDown = (event) => {
      startXRef.current = event.clientX;
      startYRef.current = event.clientY;

      clearTimeout(tapTimeout);
      tapCount++;
      longPressTimeout = setTimeout(() => {
        handleLongPress(startXRef.current);
        resetTapCount();
      }, 500);
    };

    const handleMouseUp = () => {
      clearTimeout(longPressTimeout);

      if (tapCount === 1) {
        handleSingleTap(startXRef.current, startYRef.current);
      } else if (tapCount === 2) {
        
        handleDoubleTap(startXRef.current);
      } else if (tapCount === 3) {
        handleTripleTap(startXRef.current);
      }

      tapTimeout = setTimeout(() => {
        resetTapCount();
        if (wasLongPress) {
          resetPlaybackSpeed();
          setWasLongPress(false);
        }
      }, 300);
    };

    video.addEventListener("touchstart", handleTouchStart);
    video.addEventListener("touchend", handleTouchEnd);
    video.addEventListener("mousedown", handleMouseDown);
    video.addEventListener("mouseup", handleMouseUp);
    function preventFullscreen(event) {
      if (document.fullscreenElement) {
        console.log("preventing fullscreen");
        document.exitFullscreen();
      }
    }

    // Add an event listener for the double click on the video
    video.addEventListener("dblclick", (event) => {
      event.preventDefault();
      preventFullscreen();
    });
    video.addEventListener("fullscreenchange", () => {
      console.log("Fullscreen change detected");
    });
    video.addEventListener("ended", () => {
      video.playbackRate = 1;
      setIsPlaying(false);
      dispatch(updatepointsdata(currUser?.result._id));
      window.location.reload();
    });

    return () => {
      video.removeEventListener("touchstart", handleTouchStart);
      video.removeEventListener("touchend", handleTouchEnd);
      video.removeEventListener("mousedown", handleMouseDown);
      video.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isPlaying, wasLongPress]);

  return (
    <div className="OuterVideoPageContainer">
      <LeftSidebar
        toggleDrawer={toggleDrawer}
        toggleSideDrawerBar={toggleSideDrawerBar}
      />
      <div className="innerVideoPageContainer">
        <div className="showVideoPage">
          <video
            ref={videoRef}
            src={` https://youtube-clone-tvym.onrender.com/${vi?.filepath}`}
            controls
            className="videoPlay"
          />
          <div id="notification" ref={notificationRef}></div>

          <p className="videoTitleVideoPage">{vi?.videotitle}</p>
          <div className="videoInfo">
            <div className="videoBoxDetailsVideoPage">
              <div className="chennelInfoVideoPage">
                <p className="chennelLogo">
                  {vi?.uploader.charAt(0).toUpperCase()}
                </p>
                <p className="videochennelVideoPage">
                  <p className="chennelName">{vi?.uploader}</p>
                  <p className="chennelSubscribers"></p>
                </p>
                <p className="subscibeBtn">Subscribe</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="videoComments">
            <p className="videoCommentsTitle">Comments</p>
            <div className="VideoCommentBox">
              {/* Add Comment component here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
