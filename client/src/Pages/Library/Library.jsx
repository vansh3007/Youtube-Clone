import React from 'react'
import LeftSidebar from '../../Components/LeftSideBar/LeftSideBar'
import './Library.css'
import WHLVideoList from "../../Components/WHL/WHLVideoList";
import { useSelector } from 'react-redux';
function Library({ toggleDrawer, toggleSideDrawerBar }) {
  const CurrentUser = useSelector((state) => state.currentuserreducer);
  const likedvideolist = useSelector((state) => state.likedvideoreducer);
  const watchlaterlist = useSelector((s) => s.watchlaterreducer);

    const videoList = useSelector((state) => state.historyreducer);
    const uniqueData = videoList.data.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.videoid === item.videoid &&
            t.viewer === item.viewer &&
            t.likedon === item.likedon
        )
    );

    if (uniqueData.length == 3) {
      uniqueData.shift();
    } else if (uniqueData.length > 3) {
      uniqueData.shift();
      uniqueData.pop();
    } else {
    }

    const unique = { data: uniqueData };
  return (
    <div className="LibraryContainer">
      <LeftSidebar
        toggleDrawer={toggleDrawer}
        toggleSideDrawerBar={toggleSideDrawerBar}
      />
      <div className="innerContainer">
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <i class="fa-solid fa-history"></i>
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList
              page={"History"}
              CurrentUser={CurrentUser}
              videoList={unique}
            />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <i class="fa-solid fa-clock"></i>
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList
              page={"Watch Later"}
              CurrentUser={CurrentUser}
              videoList={watchlaterlist}
            />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <i class="fa-solid fa-thumbs-up"></i>
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList
              page={"Liked Videos"}
              CurrentUser={CurrentUser}
              videoList={likedvideolist}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
