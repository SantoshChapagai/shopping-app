import React from "react";


const Search = ({ changeHandler }) => {
  return (
    <div className="search">
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" onChange={changeHandler} />
      </div>
      <div>
        sort by category will be here
      </div>
      <div>
        arranging price will be here
      </div>
    </div>
  );
}

export default Search;