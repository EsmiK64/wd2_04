import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="w-full h-fit mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex w-full justify-center">
        <img
          className="object-cover object-center h-64"
          src={`./images/product${product.id}.jpg`}
          alt={product.name}
        />
      </div>
      <div className="px-4 py-2">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.price} Kč</p>
      </div>
      <div className="px-4 py-2 flex flex-row justify-center gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <Link to={`/product/${product.id}`}>
            Detail
          </Link>
        </button>
        <br />
        <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded">
          Přidat do košíku
        </button>
      </div>
    </div>
  );
};

export default ProductCard;