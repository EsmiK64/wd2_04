import React, { useState, useEffect } from "react";
import { Button, Table, Card } from "flowbite-react";

const CartItems = ({ totalPrice }) => {
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

  useEffect(() => {
    totalPrice(calculateTotalPrice);
  }, [cartItems])
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
  }

  return (
    <div className="w-full">
      {!cartItems || cartItems.length === 0 ? (
        <p>Váš košík je prázdný.</p>
      ) : (
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
          <div className="block md:hidden">
            {cartItems.map((item) => (
              <Card
                className="max-w-sm flex flex-col items-center"
                imgSrc={`./images/product${item.id}.jpg`}
                imgAlt={item.name}
                key={item.id}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <p>Množství: </p>
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
                  </div>
                  <div className="font-bold text-lg">{item.price} Kč</div>
                </div>
                <Button onClick={() => handleRemoveFromCart(item.id)}>
                  Odstranit
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default CartItems;