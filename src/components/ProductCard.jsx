import React from "react";
import { Card, Rating } from "flowbite-react";

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Card
      className="max-w-sm flex flex-col items-center"
      renderImage={() => <img className="h-52 w-fit" src={"/images/product" + product.id + ".jpg"} alt={product.name} />}
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <a href={"/product/" + product.id}>{product.name}</a>
      </h5>
      <div className="mb-5 mt-2.5 flex items-center">
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4 z 5</p>
        </Rating>
      </div>
      <div className="flex items-center gap-12 w-full">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}&nbsp;Kč</span>
        <button
          className="z-10 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          onClick={handleAddToCart}
          href="/cart"
        >
          Do košíku
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;