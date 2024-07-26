import React from 'react'

import ShowVideoListDisplay from './ShowVideoListDisplay';

function ShowVideoList(videoId, vids) {
  // console.log(videoId.vids);
  
  return (
    <div className="Container_ShowVideoGrid">
      {videoId.vids.data
        ?.filter((q) => q.videoid === videoId.videoId)
        .map((vi) => {
          return (
            <div key={vi} className="video_box_app">
              <ShowVideoListDisplay video={vi} />
            </div>
          );
        })}
    </div>
  );
}

export default ShowVideoList
