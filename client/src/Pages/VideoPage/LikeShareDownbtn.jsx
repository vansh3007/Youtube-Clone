import React, { useEffect, useState } from "react";
import "./Likewatchlatersavebtn.css";
import { useSelector, useDispatch } from "react-redux";
import { likevideo } from "../../Action/Videofile.js";
import { addtolikedvideo, deletelikedvideo } from "../../Action/LikedVideo.js";
import { addtowatchlater, deletewatchlater } from "../../Action/WatchLater.js";

const Likewatchlatersavebtns = ({ vv, vid }) => {
  const dispatch = useDispatch();
  const [savevideo, setsavevideo] = useState(false);
  const [dislikebtn, setdislikebtn] = useState(false);
  const [likebtn, setlikebtn] = useState(false);
  const [displaylike, setdisplaylike] = useState(false);

  const currentuser = useSelector((state) => state.currentuserreducer);
setTimeout(() => {
  setdisplaylike(true);
}, 1000);

  const likedvideolist = useSelector((state) => state.likedvideoreducer);
  const watchlaterlist = useSelector((s) => s.watchlaterreducer);

  // console.log(likedvideolist);
  // console.log(watchlaterlist);

  useEffect(() => {
    likedvideolist?.data?.filter((q) => q.videoid === vid && q.viewer === currentuser.result._id)
      .map((m) => setlikebtn(true));
    
    watchlaterlist?.data?.filter((q) => q.videoid === vid && q.viewer === currentuser.result._id)
      .map((m) => setsavevideo(true));
  }, []);
  const togglesavedvideo = () => {
    if (currentuser) {
      if (savevideo) {
        setsavevideo(false);
        dispatch(
          deletewatchlater({ videoid: vid, viewer: currentuser?.result?._id })
        );
      } else {
        setsavevideo(true);
        dispatch(
          addtowatchlater({ videoid: vid, viewer: currentuser?.result?._id })
        );
      }
    } else {
      alert("please login to save video");
    }
  };
  // console.log(vid,vv.Like)
  const togglelikevideo = (e, lk) => {
    if (currentuser) {
      if (likebtn) {
        setlikebtn(false);

        dispatch(likevideo({ id: vid, Like: lk - 1 }));
        dispatch(
          deletelikedvideo({ videoid: vid, viewer: currentuser?.result?._id })
        );
      } else {
        setlikebtn(true);
        dispatch(likevideo({ id: vid, Like: lk + 1 }));
        dispatch(
          addtolikedvideo({ videoid: vid, viewer: currentuser?.result?._id })
        );
        setdislikebtn(false);
      }
    } else {
      alert("please login");
    }
  };
  const toggledislikevideo = (e, lk) => {
    if (currentuser) {
      if (dislikebtn) {
        setdislikebtn(false);
      } else {
        setdislikebtn(true);
        if (likebtn) {
          dispatch(likevideo({ id: vid, Like: lk - 1 }));
          dispatch(
            deletelikedvideo({ videoid: vid, viewer: currentuser?.result?._id })
          );
        }
        setlikebtn(false);
      }
    } else {
      alert("please login to save video");
    }
  };
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <div
          className="like_videoPage"
          onClick={(e) => togglelikevideo(e, vv.Like)}
        >
          {likebtn ? (
            <i class="fa-solid fa-thumbs-up"></i>
          ) : (
            <i class="fa-regular fa-thumbs-up"></i>
          )}
          <b>{displaylike && vv.Like}</b>
        </div>
        <div
          className="like_videoPage"
          onClick={(e) => toggledislikevideo(e, vv.Like)}
        >
          {dislikebtn ? (
            <i class="fa-solid fa-thumbs-down"></i>
          ) : (
            <i class="fa-regular fa-thumbs-down"></i>
          )}
          <b>DISLIKE</b>
        </div>
        <div className="like_videoPage" onClick={(e) => togglesavedvideo(e)}>
          {savevideo ? (
            <>
              <i class="fa-solid fa-list-check"></i>
              <b>Saved</b>
            </>
          ) : (
            <>
              <i class="fa-solid fa-bars"></i>
              <b>Save</b>
            </>
          )}
        </div>
        <div className="like_videoPage">
          <>
            <i class="fa-solid fa-share"></i>
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
};

export default Likewatchlatersavebtns;
