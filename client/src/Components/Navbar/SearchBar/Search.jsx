import React, { useState } from 'react'
import './Search.css'
import SearchList from './SearchList'
import { useSelector } from 'react-redux';
import VCimg from "./VC.png"
import { v4 as uuidv4 } from "uuid";
// import { useState } from 'react';
function Search() {
  const  [searchQuery, setSearchQuery]  = useState("");
  const [seachListA, setSeachList] = useState(true);
  const [room, setRoom] = useState(uuidv4());

  const [VC, setVC] = useState(false);
      const titleArray = useSelector((s) => s?.videoreducer)
        ?.data?.filter((q) =>
          q?.videotitle.toUpperCase().includes(searchQuery?.toUpperCase())
        )
    .map((m) => m?.videotitle);
  const CurrUser = useSelector((state) => state.currentuserreducer);
     const VC_URL = `https://vanshvideoconferencing.netlify.app/room/${room}/${CurrUser?.result?.name}`;

 
  const handleVCDisplay = () => {
    setVC(!VC);
  }

  // const titleArray=["video1","Video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <>
      <div className="search">
        <div className="searchInput">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search"
            className="searchInputBar"
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => setSeachList(true)}
          ></input>
          <div className="searchGlass">
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={(e) => setSeachList(false)}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
            </i>
          </div>
        </div>
        <div className="searchMic">
          <i className="fa-solid fa-microphone"></i>
        </div>
        {CurrUser && (
          <div className="videoCall" onClick={handleVCDisplay}>
            <img src={VCimg}></img>
            <p>Video Call</p>
          </div>
        )}
      </div>
      {VC && (
        <div className="VCform">
          <form className="form">
            {/* <button>New Meeting</button>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br> */}
            <label for="room">Room Code</label>
            <br></br>
            <input
              id="room"
              placeholder="Enter new/friend Room Code"
              onChange={(e) => setRoom(e.target.value)}
              required
            ></input>
            <br></br>
            <br></br>
            <button onClick={()=>setVC(false)}>
              <a href={VC_URL} target="_blank">
                Start Meeting
              </a>
            </button>
          </form>
        </div>
      )}
      {searchQuery && seachListA && (
        <div className="searchList">
          <SearchList titleArray={titleArray} setSearchQuery={setSearchQuery} />
        </div>
      )}
    </>
  );
}

export default Search
