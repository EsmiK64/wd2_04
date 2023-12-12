import React from "react";
import ProductCard from "./ProductCard";
import MultiRangeSlider from "./MultiRangeSlider";
import { Accordion } from 'flowbite-react';

const products = [
  { id: 1, name: "Nůž dětský Opinel", price: 199 },
  { id: 2, name: "Powerbanka 15000mAh", price: 599 },
  { id: 3, name: "Varná konvice", price: 999 },
  { id: 4, name: "Podsadový stan pro dva", price: 19999 },
  { id: 5, name: "Krosna", price: 5599 },
  { id: 6, name: "Karabinka", price: 49 },
  { id: 7, name: "Spacák zimní", price: 1399 },
  { id: 8, name: "Plynová kartuše malá", price: 399 },
  { id: 9, name: "Stezka Země/Voda", price: 199 },
  { id: 10, name: "Rádcovský zápisník 2.0", price: 399 },
  { id: 11, name: "Taška plátěná Skaut", price: 159 },
  { id: 12, name: "Batoh malý 30l", price: 1999 },
  { id: 13, name: "Příbor skladný", price: 99 },
  { id: 14, name: "Hrnek Skaut", price: 299 },
  { id: 15, name: "Kroj skautský", price: 699 },
];

const Home = () => {
  return (
    <div className="container mx-auto mt-0 mb-8 md:my-4 lg:my-8 p-5 flex items-center flex-col">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          EsmiK</span> Shop; The E-shop
      </h1>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="w-1/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex-col p-5 hidden lg:flex md:w-1/6 lg:w-1/4">
          <form className="flex flex-col items-center">
            <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Filtry</span>
            <MultiRangeSlider />
          </form>
        </div>
        <Accordion className="block lg:hidden">
          <Accordion.Panel>
            <Accordion.Title className="p-5">Filtrovat</Accordion.Title>
            <Accordion.Content className="p-5">
              <MultiRangeSlider />
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-5/6 lg:w-3/4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
