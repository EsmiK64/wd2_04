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
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const filteredCart = [...new Set(currentCart)]
    setCartItems(filteredCart);
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
                  Removex;
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
