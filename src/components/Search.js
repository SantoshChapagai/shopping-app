import React from "react";
import "./components.css"
import  PropTypes  from "prop-types";


const Search = ({ changeHandler, changeCategoryHandler, priceSortingHandler }) => {
  return (
    <div className="search">
      <div className="arrange">
        <label htmlFor="search">Search</label>
        <input id="search" type="text" onChange={changeHandler} />
      </div>
      <div className="arrange arrange-category">
        <p>Sort by category</p>
        <select onChange={changeCategoryHandler}>
          <option selected disabled>choose your category</option>
          <option>men's clothing</option>
          <option>women's clothing</option>
          <option>jewelery</option>
          <option>electronics</option>
        </select>
      </div>
      <div className="arrange arrange-category">
        <p>Sort by price</p>
        <select onChange={priceSortingHandler}>
          <option selected disabled>select price order</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
}

Search.propTypes = {
  changeHandler: PropTypes.func,
  changeCategoryHandler: PropTypes.func,
  priceSortingHandler: PropTypes.func
};


export default Search;