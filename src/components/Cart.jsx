import React, { useState, useEffect } from "react";
import { Button, Breadcrumb, TextInput, Table } from 'flowbite-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleAmountChange = (productId, newAmount) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, amount: newAmount };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0);
  };

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
  }, []);


  return (
    <div className="w-5/6 flex flex-col items-center">
      <div className="flex mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-5 w-full mb-5 flex-row items-center gap-5 justify-between">
          <Breadcrumb>
            <Breadcrumb.Item href="/" icon={HiHome}>
              Domů
            </Breadcrumb.Item>
            <Breadcrumb.Item href={"/cart"}>
              Košík
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="flex flex-row w-1/4 justify-end items-center gap-5">
            <TextInput id="search" type="text" placeholder="Hledej..." />
            <div className="h-full">
              <Link to={`/cart`}>
                <FontAwesomeIcon
                  icon="fa-solid fa-cart-shopping"
                  className="hover:stroke-blue-500"
                />
              </Link>
            </div>
          </div>
        </div>
      <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Košík
      </span>
      <div className="w-full">

      {cartItems.length === 0 ? (
          <p>Váš košík je prázdný.</p>
        ) : (
          <div>
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
                    <div>
                      <label htmlFor={`amount-${item.id}`}>Amount:</label>
                      <input
                        id={`amount-${item.id}`}
                        className="rounded-md w-12"
                        type="number"
                        min="1"
                        value={item.amount}
                        onChange={(e) => handleAmountChange(item.id, parseInt(e.target.value, 10))}
                      />
                    </div>
                  </div>
                  <Button onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p>Total Price: {calculateTotalPrice()} Kč</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
