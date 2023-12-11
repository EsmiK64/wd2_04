import React from "react";
import ProductCard from "./ProductCard";
import MultiRangeSlider from "./MultiRangeSlider";

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
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-semibold mb-8">EsmiK Shop; E-shop</h1>
      <div className="flex flex-row w-full gap-4">
        <div className="w-1/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col p-5">
          <MultiRangeSlider
            min={0}
            max={20000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
