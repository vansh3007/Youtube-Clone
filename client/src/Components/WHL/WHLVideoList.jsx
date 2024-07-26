import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WHLVideoList({ CurrentUser, videoList, page }) {
  // console.log(CurrentUser, videoList, page);
  
  return (
    <>
      {CurrentUser ? (
        videoList?.data
          ?.filter((q) => q?.viewer === CurrentUser?.result?._id)
          .reverse()
          .map((m) => (
            
            <ShowVideoList videoId={m?.videoid}  vids={videoList} />
          ))
      ) : (
        <h2 style={{ color: "white" }}>Plz Login To Watch Your {page}</h2>
      )}
    </>
  );
}

export default WHLVideoList;
