import React, { useState, useEffect } from "react";
import { Button, Table } from "flowbite-react";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

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
      return total + item.price * (item.amount || 1);
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
              {!isMobile && <Table.HeadCell />}
              <Table.HeadCell>Název</Table.HeadCell>
              <Table.HeadCell>Množství</Table.HeadCell>
              <Table.HeadCell>Cena</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {cartItems.map((item) => (
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
                      defaultValue={1}
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
                      {!isMobile && "Odstranit"}
                      {isMobile && <FaRegTrashCan />}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <div className="mt-4">
            <p>Cena: {calculateTotalPrice()} Kč</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
