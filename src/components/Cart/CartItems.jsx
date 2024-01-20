import React, { useState, useEffect } from "react";
import { Button, Table } from 'flowbite-react';

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

    return (
        <div className="w-full">
            {!cartItems || cartItems.length === 0 ? (
                <p>Váš košík je prázdný.</p>
            ) : (
                <div>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell></Table.HeadCell>
                            <Table.HeadCell>Název</Table.HeadCell>
                            <Table.HeadCell>Množství</Table.HeadCell>
                            <Table.HeadCell>Cena</Table.HeadCell>
                            <Table.HeadCell></Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {cartItems.map((item) => (
                                <Table.Row
                                    key={item.id}
                                >
                                    <Table.Cell>
                                        <img
                                            className="h-12"
                                            src={`./images/product${item.id}.jpg`}
                                            alt={item.name}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>
                                        {/*<label htmlFor={`amount-${item.id}`}>Množství: </label>*/}
                                        <input
                                            id={`amount-${item.id}`}
                                            className="rounded-md w-12"
                                            type="number"
                                            min="1"
                                            defaultValue={1}
                                            value={item.amount}
                                            onChange={(e) => handleAmountChange(item.id, parseInt(e.target.value, 10))}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{item.price} Kč</Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={() => handleRemoveFromCart(item.id)}>
                                            Odstranit
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                    <div className="mt-4">
                        <p>Total Price: {calculateTotalPrice()} Kč</p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default CartItems;