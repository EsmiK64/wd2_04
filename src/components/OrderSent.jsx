import React, { useEffect, useState } from "react";
import Orders from "../data/orders.json";
import { useNavigate } from 'react-router-dom';
import { Table } from "flowbite-react";

const OrderSent = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [order, setOrder] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed

        const handleMobileChange = (event) => {
            setIsMobile(event.matches);
        };

        mobileMediaQuery.addEventListener("change", handleMobileChange);
        setIsMobile(mobileMediaQuery.matches);

        return () => {
            mobileMediaQuery.removeEventListener("change", handleMobileChange);
        };
    }, []);

    useEffect(() => {
        setOrder(JSON.parse(localStorage.getItem("order")));
        console.log(order['cartItems']);
        if (JSON.stringify(order) === "{}") {
            navigate("/");
        };
    });

    return (
        <div>
            <div className="hidden md:block">
                <Table>
                    <Table.Head>
                        {!isMobile && <Table.HeadCell />}
                        <Table.HeadCell>Název</Table.HeadCell>
                        <Table.HeadCell>Množství</Table.HeadCell>
                        <Table.HeadCell>Cena</Table.HeadCell>
                        <Table.HeadCell></Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {order['cartItems'].map((item) => (
                            <Table.Row key={item.id}>
                                {!isMobile && (
                                    <Table.Cell>
                                        <img
                                            className="h-12"
                                            src={`./images/product${item.id}.jpg`}
                                            alt={item.name}
                                        />
                                    </Table.Cell>
                                )}
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>
                                    <input
                                        id={`amount-${item.id}`}
                                        className="rounded-md w-12"
                                        type="number"
                                        min="1"
                                        value={item.amount}
                                        onChange={(e) =>
                                            handleAmountChange(
                                                item.id,
                                                parseInt(e.target.value, 10)
                                            )
                                        }
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
            </div>
        </div>
    )
}

export default OrderSent;