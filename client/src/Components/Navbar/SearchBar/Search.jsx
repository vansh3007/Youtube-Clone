import React, { useState } from 'react'
import './Search.css'
import SearchList from './SearchList'
import { useSelector } from 'react-redux';
// import { useState } from 'react';
function Search() {
  const  [searchQuery, setSearchQuery]  = useState("");
  const [seachListA, setSeachList] = useState(true);
      const titleArray = useSelector((s) => s?.videoreducer)
        ?.data?.filter((q) =>
          q?.videotitle.toUpperCase().includes(searchQuery?.toUpperCase())
        )
        .map((m) => m?.videotitle);

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
      </div>
      {searchQuery && seachListA && (
        <div className="searchList">
          <SearchList titleArray={titleArray} setSearchQuery={setSearchQuery} />
        </div>
      )}
    </>
  );
}

export default Search
