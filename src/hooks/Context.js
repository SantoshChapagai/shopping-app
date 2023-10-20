import React, { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ShoppingContext = createContext();

export const CartProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  const contextValue = useMemo(() => {
    return { count, setCount };
  }, [count]);
  return (
    <ShoppingContext.Provider value={contextValue}>
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