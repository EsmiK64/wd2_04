import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Fetch product details based on the id (you can simulate this with state or static data)
  const product = { id, name: `Product ${id}`, price: 19.99, description: 'Product details go here.' };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;