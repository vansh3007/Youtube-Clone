import React from 'react'
import LeftSidebar from '../../Components/LeftSideBar/LeftSideBar'
import './Home.css'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import { useSelector } from "react-redux";
function Home({ toggleDrawer, toggleSideDrawerBar }) {
  const vids = useSelector((state) => state.videoreducer)
    ?.data?.filter((q) => q)
    .reverse();
    
  const navList = [
    "Java",
    "Python",
    "C++",
    "React.JS",
    "JavaScript",
    "Html",
    "Css",
    "Web Development",
    "App Development",
    "Mobile Development",
    "Data Structure",
  ];
  return (
    <div className="homeContainer">
      <LeftSidebar
        toggleDrawer={toggleDrawer} 
        toggleSideDrawerBar={toggleSideDrawerBar}
      />
      <div className="innerContainer">
        <div className="navListContainer">
          <div className="navList">
            {navList.map((item) => (
              <p key={item} className="navListItem">{item}</p>
            ))}
          </div>
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Home

