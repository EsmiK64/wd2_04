import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Bezdrátová myš', price: 199.99 },
    { id: 2, name: 'Univerzální nabíječka', price: 159.99 },
    { id: 3, name: 'Skleněná varná konvice', price: 999.99 },
    { id: 4, name: 'Podsadový stan pro dva', price: 19999.99},
    { id: 5, name: 'Kreativní stolní lampa', price: 599.99},
    { id: 6, name: 'Exotická káva', price: 499.99},
];

const Home = () => {
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-semibold mb-8">Welcome to the Eshop</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;