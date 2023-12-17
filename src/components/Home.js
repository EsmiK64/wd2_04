import React, { useState } from "react";
import ProductCard from "./ProductCard";
import MultiRangeSlider from "./MultiRangeSlider";
import {
  Accordion,
  Checkbox,
  Label,
  TextInput,
  Breadcrumb,
} from "flowbite-react";
import Products from "../data/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const products = Products;

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div className="flex mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-5 w-full mb-5 flex-row items-center gap-5 justify-between">
        <Breadcrumb>
          <Breadcrumb.Item href="/" icon={HiHome}>
            Domů
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-row w-1/4 justify-end items-center gap-5">
          <TextInput
            id="search"
            type="text"
            placeholder="Hledej..."
          />
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
          <form className="flex flex-col gap-3">
            <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              Filtry
            </span>
            <span className="filtry_nadpis">Cena</span>
            <MultiRangeSlider />
            <span className="filtry_nadpis">Dostupnost</span>
            <div className="flex items-center gap-2">
              <Checkbox id="locally" />
              <Label htmlFor="locally" className="flex">
                Dostupné na prodejně
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="in-stock" />
              <Label htmlFor="in-stock" className="flex">
                Skladem
              </Label>
            </div>
            <span className="filtry_nadpis">Typ produktu</span>
            <div className="flex items-center gap-2">
              <Checkbox id="skaut" />
              <Label htmlFor="skaut" className="flex">
                Skautské potřeby
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="outdoor" />
              <Label htmlFor="outdoor" className="flex">
                Outdoorové vybavení
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="stan" />
              <Label htmlFor="stan" className="flex">
                Stanování
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="jidlo" />
              <Label htmlFor="jidlo" className="flex">
                Jídlo
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="batohy" />
              <Label htmlFor="batohy" className="flex">
                Batohy
              </Label>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/2 mt-5">
              Filtrovat
            </button>
          </form>
        </div>
        <Accordion className="block lg:hidden">
          <Accordion.Panel>
            <Accordion.Title className="p-5">Filtrovat</Accordion.Title>
            <Accordion.Content className="p-5 flex flex-col items-center">
              <form className="flex flex-col gap-3">
                <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                  Filtry
                </span>
                <span className="filtry_nadpis">Cena</span>
                <MultiRangeSlider />
                <span className="filtry_nadpis">Dostupnost</span>
                <div className="flex items-center gap-2">
                  <Checkbox id="locally" />
                  <Label htmlFor="locally" className="flex">
                    Dostupné na prodejně
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="in-stock" />
                  <Label htmlFor="in-stock" className="flex">
                    Skladem
                  </Label>
                </div>
                <span className="filtry_nadpis">Typ produktu</span>
                <div className="flex items-center gap-2">
                  <Checkbox id="skaut" />
                  <Label htmlFor="skaut" className="flex">
                    Skautské potřeby
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="outdoor" />
                  <Label htmlFor="outdoor" className="flex">
                    Outdoorové vybavení
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="stan" />
                  <Label htmlFor="stan" className="flex">
                    Stanování
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="jidlo" />
                  <Label htmlFor="jidlo" className="flex">
                    Jídlo
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="batohy" />
                  <Label htmlFor="batohy" className="flex">
                    Batohy
                  </Label>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/2 mt-5">
                  Filtrovat
                </button>
              </form>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-5/6 lg:w-3/4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
