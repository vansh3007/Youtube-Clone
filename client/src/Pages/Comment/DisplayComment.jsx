import React, { useState } from "react";
import "./Comment.css"
import { editcomment, deletecomment } from "../../Action/Comment";
import { useDispatch } from "react-redux";
function DisplayComment({
  cid,
  commentText,
  userCommented,
  currUser,
  userid,
  commentedon,
}) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [cmtText, setcmtText] = useState(commentText);
  const [cmtid, setcmntid] = useState("");

  const commentedondate = commentedon.slice(0, 10);
  const handleEdit = (cid) => {
    setEdit(!edit);
    setcmntid(cid);
  };

  const haneleonsubmit = (e) => {
    // e.preventDefault();
    if (!cmtText) {
      alert("type your comment");
    } else {
      dispatch(editcomment({ id: cmtid, commentbody: cmtText }));
      setcommentbdy("");
    }
    setEdit(false);
  };
  const handledel = (id) => {
    dispatch(deletecomment(id));
  };
  // console.log(username);

  return (
    <div className="DisplayComment">
      <div className="commentFormBox">
        <p className="chennelLogo">
          {userCommented && userCommented.charAt(0).toUpperCase()}
        </p>
        {edit ? (
          <form className="editForm">
            <input
              type="text"
              value={cmtText}
              placeholder="Comment"
              className="commentInput"
              onChange={(e) => setcmtText(e.target.value)}
            />
            <input
              type="submit"
              value="add"
              className="comment_add_btn_comments"
              onClick={haneleonsubmit}
            />
          </form>
        ) : (
          <div className="commentBox">
            <p >
              @{userCommented}&nbsp;<p>{commentedondate}</p>
            </p >
            <p className="commentboxtext">{commentText}</p>
          </div>
        )}
      </div>
      {currUser?.result?._id === userid && (
        <p className="EditDel_DisplayCommendt">
          <p onClick={() => handleEdit(cid, commentText)}>Edit</p>
          <p onClick={() => handledel(cid)}>Delete</p>
        </p>
      )}
    </div>
  );
}

export default DisplayComment;
