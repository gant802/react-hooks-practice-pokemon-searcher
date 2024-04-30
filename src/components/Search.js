import React from "react";

function Search({setSearch, searchInput}) {


function handleSearch(e){
  setSearch(e.target.value)
}


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchInput} onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
