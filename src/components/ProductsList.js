import axios from 'axios';
import React from 'react';
import Product from '../pages/Product';

const api = "https://fakestoreapi.com/products/";
const { data: products } = await axios.get(api);


const ProductsList = () => {

  console.log(products);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;