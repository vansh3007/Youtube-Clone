import React from 'react'
import './ShowVideo.css'
import { NavLink } from 'react-router-dom';

function ShowVideo({ vi }) {
  return (
    <NavLink to={`/videopage/${vi?._id}`} className="showVideoNavLink">
      <div className="showVideo">
        <video
          src={`http://localhost:5000/${vi?.filepath}`}
          className="videoBox"
        ></video>
        <div className="videoBox">
          {/* <p className="chennelLogo">{vi?.uploader.charAt(0).toUpperCase()}</p> */}
          <div className="videoDiscription">
            <p className="videoTitle">{vi?.videotitle}</p>
            <p className="videochennel">{vi?.uploader}</p>
            <p>Likes : {vi?.Like}</p>
            <pre>Views : {vi?.views}</pre>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ShowVideo

