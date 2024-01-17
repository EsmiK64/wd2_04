import React, { useState, useEffect } from "react";
import { Button } from 'flowbite-react';

const CartItems = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("cart")));
    }, []);

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleAmountChange = (productId, newAmount) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === productId) {
                return { ...item, amount: newAmount };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.amount;
        }, 0);
    };

/*     const handleCheckout = () => {
        navigate("/order-info");
      }; */

    return (
        <div className="w-full">
            {cartItems.length === 0 ? (
                <p>Váš košík je prázdný.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center border-b py-2"
                            >
                                <div className="flex flex-row gap-5 items-center">
                                    <img
                                        className="h-12"
                                        src={`./images/product${item.id}.jpg`}
                                        alt={item.name}
                                    />
                                    <span>{item.name}</span>
                                    <span>{item.price} Kč</span>
                                    <div>
                                        <label htmlFor={`amount-${item.id}`}>Amount:</label>
                                        <input
                                            id={`amount-${item.id}`}
                                            className="rounded-md w-12"
                                            type="number"
                                            min="1"
                                            value={item.amount}
                                            onChange={(e) => handleAmountChange(item.id, parseInt(e.target.value, 10))}
                                        />
                                    </div>
                                </div>
                                <Button onClick={() => handleRemoveFromCart(item.id)}>
                                    Remove
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <p>Total Price: {calculateTotalPrice()} Kč</p>
                    </div>
{/*                     <div className="w-full mt-4">
                        <Button onClick={handleCheckout}>Checkout</Button>
                    </div> */}
                </div>
            )}
        </div>
    )
};

export default CartItems;