import React, { useState, useEffect } from "react";
import "./AppBox.css";
import { useSelector } from "react-redux";

function AppBox() {
  const [toggle, setToggle] = useState(false);
  const profile = useSelector((state) => state.profilereducer);

  profile.result = profile.data;

  useEffect(() => {
    const timer = setTimeout(() => {
      setToggle(true);
    }, 10);


    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  // setInterval(() => {
  //   localStorage.setItem("profile", JSON.stringify(profile));
  //   // console.log("hello");
  // },1000)

  return (
    <div className="appBox">
      <div className="points">
        {toggle ? profile.data?.points : "Loading..."} Points
      </div>
      <i className="fa-solid fa-video icon"></i>
      <i className="fa-solid fa-grip icon"></i>
      <i className="fa-regular fa-bell icon"></i>
    </div>
  );
}

export default AppBox;
