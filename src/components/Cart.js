import React, { useState, useEffect } from "react";
import { Button } from 'flowbite-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(currentCart);
  }, []);

  return (
    <div className="w-5/6 flex flex-col items-center">
      <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Košík
      </span>
      <div className="w-full">
        {cartItems.length === 0 ? (
          <p>Váš košík je prázdný.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div className="flex flex-row gap-5 items-center">
                  <img
                    className="h-12"
                    src={`./images/product${item.id}.jpg`}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                  <span>{item.price} Kč</span>
                </div>
                <Button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
