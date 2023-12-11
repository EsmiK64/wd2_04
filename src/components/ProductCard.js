import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-32 object-cover object-center"
        src={`/images/product${product.id}.jpg`}
        alt={product.name}
      />
      <div className="px-4 py-2">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.price} Kč</p>
      </div>
      <div className="px-4 py-2">
        <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;