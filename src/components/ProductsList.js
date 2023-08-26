import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../pages/Product';
import Search from './Search';

const api = "https://fakestoreapi.com/products/";
// const { data: products } = await axios.get(api);


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [search, setSearch] = useState("");

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

  const changeHandler = (event) => {
    const inputQuery = event.target.value.toLowerCase();
    setSearch(inputQuery);
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(inputQuery));
    setFilterItems(filteredProducts);
    console.log(filteredProducts);
  }
  return (
    <div>
      <div>
        <Search changeHandler={changeHandler} />
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