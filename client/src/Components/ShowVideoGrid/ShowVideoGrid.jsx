import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo';
import "./ShowVideoGrid.css"


function ShowVideoGrid({vids}) {

    return (
      <div className="ShowVideoGrid">
        {vids?.reverse().map((vi) => (
          <div key={vi._id} className="video_box_app">
            <ShowVideo vi={vi} />
          </div>
        ))}
      </div>
    )
}

export default ShowVideoGrid


