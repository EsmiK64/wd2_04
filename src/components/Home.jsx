import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Accordion, TextInput, Breadcrumb, Toast } from "flowbite-react";
import Products from "../data/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Filters from "./Filters";

import { FaRegCheckCircle } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

const products = Products;

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState("");
  const handleAddToCart = (product) => {
    console.log(localStorage.cart);
    if (localStorage.cart) {
      const items = JSON.parse(localStorage.getItem("cart"));
      setIsPopupOpen(true);
      console.log(isPopupOpen);

      if (!items.some((item) => item.id === product.id)) {
        items.push(product);
        localStorage.setItem("cart", JSON.stringify(items));
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([product]));
    }
  };

  return (
    <div>
      <div className="flex mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-5 w-full mb-5 flex-row items-center gap-5 justify-between">
        <Breadcrumb>
          <Breadcrumb.Item href="/" icon={HiHome}>
            Domů
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-row w-full md:w-1/2 lg:w-1/4 justify-end items-center gap-5">
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
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="w-1/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex-col p-5 hidden lg:flex md:w-1/6 lg:w-1/4">
          <Filters />
        </div>
        <Accordion className="block lg:hidden">
          <Accordion.Panel>
            <Accordion.Title className="p-5">Filtrovat</Accordion.Title>
            <Accordion.Content>
              <Filters />
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full md:w-5/6 lg:w-3/4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="fixed w-screen h-screen flex items-end justify-center z-50">
        {isPopupOpen && (
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
              <FaRegCheckCircle className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Zboží přidáno do košíku.
            </div>
            <Toast.Toggle onDismiss={() => setIsPopupOpen(false)} />
          </Toast>
        )}
      </div>
    </div>
  );
};

export default Home;
