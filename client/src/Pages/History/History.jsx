import React from 'react'
import LeftSidebar from '../../Components/LeftSideBar/LeftSideBar'
import './History.css'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';
function History({ toggleDrawer, toggleSideDrawerBar }) {

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
}
  else if (uniqueData.length >3) {
    uniqueData.shift();
    uniqueData.pop();
  }
  else { };
  
  const unique={data:uniqueData}
  // console.log(unique);

  return (
    <WHL
      page="Video History"
      videoList={unique}
      toggleDrawer={toggleDrawer}
      toggleSideDrawerBar={toggleSideDrawerBar}
    ></WHL>
  );
}

export default History
