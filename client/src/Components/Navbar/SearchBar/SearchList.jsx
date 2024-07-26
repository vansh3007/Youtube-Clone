import React from 'react'
import "./SearchList.css";
function SearchList({ titleArray, setSearchQuery }) {
  return (
    <div className="searchListContainer">
      {titleArray.map((m) => {
        return (
          <p className="TitleItem" key={m} onClick={() => setSearchQuery(m)}>
            <i class="fa-solid fa-magnifying-glass">&nbsp;&nbsp;</i>
            {m}
          </p>
        );
      })}
    </div>
  );
}

export default SearchList
