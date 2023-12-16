import React from 'react';
import { useParams } from 'react-router-dom';

import Products from "../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();

  const product = {}
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price} Kč</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductDetail;