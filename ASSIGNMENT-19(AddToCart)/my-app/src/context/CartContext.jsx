import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const products = [
    { name: "Laptop" },
    { name: "Mouse" },
    { name: "Keyboard" },
    { name: "Joystick" }
  ];

  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (index) => {
    setCartProducts([...cartProducts, { name: products[index].name }]);
  };

  const deleteHandler = (index) => {
    const newCart = cartProducts.filter((_, i) => i !== index);
    setCartProducts(newCart);
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, deleteHandler, products }}>
      {children}
    </CartContext.Provider>
  );
};
