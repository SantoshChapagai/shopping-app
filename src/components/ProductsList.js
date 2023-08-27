import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../pages/Product';
import Search from './Search';

const api = "https://fakestoreapi.com/products/";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceCategory, setPriceCategory] = useState();


  useEffect(() => {
    axios.get(api)
      .then(response => {
        setProducts(response.data);
        setFilterItems(response.data);
      })
      .catch(error => {
        alert("Error in loading products: ", error);
      });
  }, []);

  useEffect(() => {
    applyFilters();
  });

  const changeHandler = (event) => {
    const inputQuery = event.target.value.toLowerCase();
    setSearch(inputQuery);
    applyFilters();
  }

  const changeCategoryHandler = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
  }

  const priceSortingHandler = (event) => {
    const priceCategory = event.target.value;
    setPriceCategory(priceCategory);
  }


  const applyFilters = () => {
    let filteredProducts = [...products];

    if (search) {
      filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(search));
    }

    if (priceCategory === "lowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceCategory === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);

    }
    setFilterItems(filteredProducts);

  }

  return (
    <div>
      <div>
        <Search changeHandler={changeHandler} changeCategoryHandler={changeCategoryHandler} priceSortingHandler={priceSortingHandler} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filterItems.map((product) => (
          <Product key={product.id} {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;