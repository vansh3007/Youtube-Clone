import React from 'react'
import ShowVideo from "../ShowVideo/ShowVideo";
import { useSelector } from 'react-redux';
function ShowVideoListDisplay({ video }) {
      const vids = useSelector((state) => state.videoreducer)
        ?.data?.filter((q) => q)
        .reverse();
    
    // console.log(vids);
    // console.log(video);
  return (
    <div className="Container_ShowVideoGrid">
      {vids
        ?.filter((q) => q._id === video.videoid)
        .map((vi) => {
          return (
            <div key={vi} className="video_box_app">
              <ShowVideo vi={vi} />
            </div>
          );
        })}
    </div>
  );
}

export default ShowVideoListDisplay
