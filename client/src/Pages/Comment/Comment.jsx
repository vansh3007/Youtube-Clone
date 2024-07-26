import React, { useState } from "react";
import "./Comment.css";
import DisplayComment from "./DisplayComment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postcomment } from "../../Action/Comment";
function Comment({ vi }) {
   const dispatch = useDispatch()
    const [commentText, setCommentText] = useState("");
    const [displayBtn, setDisplayBtn] = useState(false);
   const currUser = useSelector((state) => state.currentuserreducer);
  const commentList = useSelector((state) => state.commentreducer);
   const handleonsubmit = (e) => {
     e.preventDefault();
     if (currUser) {
       if (!commentText) {
         alert("please type your comment!!");
       } else {
         dispatch(
           postcomment({
             videoid: vi._id,
             userid: currUser?.result._id,
             commentbody: commentText,
             usercommented: currUser.result.name,
           })
         );
         setCommentText("");
       }
     } else {
       alert("Please login to comment");
     }
  };
  // console.log(vi);

  return (
    <>
      <div className="commentFormBox">
        <p className="chennelLogo">{vi?.uploader.charAt(0).toUpperCase()}</p>
        <form className="commentForm">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="commentInput"
            onClick={() => setDisplayBtn(true)}
          />
          {displayBtn && (
            <>
              <button
                type="submit"
                className="commentPostBtn likeShareDownloadBtn"
                onClick={handleonsubmit}
              >
                <b>Post</b>
              </button>
              <button
                className="commentCancelBtn likeShareDownloadBtn"
                onClick={() => setDisplayBtn(false)}
              >
                <b>Cancel</b>
              </button>{" "}
            </>
          )}
        </form>
      </div>

      <div className="commentContainer">
        {commentList?.data
          ?.filter((q) => vi._id === q?.videoid)
          .reverse()
          .map((cmt) => {
            // console.log(cmt);
            return (
              <DisplayComment
                cid={cmt._id}
                commentText={cmt.commentbody}
                currUser={currUser}
                userCommented={cmt.usercommented}
                userid={cmt.userid}
                commentedon={cmt.commentedon}
              />
            );
          })}
      </div>
    </>
  );
}

export default Comment;
