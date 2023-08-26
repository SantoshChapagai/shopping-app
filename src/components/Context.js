import React, { createContext, useContext, useState } from "react";

const ShoppingContext = createContext();

export const CartProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  return (
    <ShoppingContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingContext.Provider>
  )
}
export const useCart = () => {
  return useContext(ShoppingContext);
}