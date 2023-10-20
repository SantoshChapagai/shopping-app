import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ShoppingContext = createContext();

export const CartProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  return (
    <ShoppingContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingContext.Provider>
  )
}
CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};
export const useCart = () => {
  return useContext(ShoppingContext);
}