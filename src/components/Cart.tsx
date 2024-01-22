import React, { useState, useRef, useEffect } from "react";
import { Tabs, Breadcrumb, TextInput, Button } from "flowbite-react";
import { TabsRef } from "flowbite-react/lib/esm/components/Tabs/Tabs";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {
  FaCartShopping,
  FaCircleInfo,
  FaTruck,
  FaMoneyBill1Wave,
} from "react-icons/fa6";

import Orders from "../data/orders.json";

import OrderInfoPage from "./Cart/OrderInfoPage.jsx";
import DeliveryOptionsPage from "./Cart/DeliveryOptionsPage.jsx";
import PaymentPage from "./Cart/PaymentPage.jsx";
import ThankYouPage from "./Cart/ThankYouPage.jsx";
import CartItems from "./Cart/CartItems.jsx";

const Cart = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const [deliveryOption, setDeliveryOption] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);
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

  const sendOrder = () => {
    const order = { orderInfo, deliveryOption, paymentInfo, CartItems };
    console.log(order);
  };

  return (
    <div className="w-5/6 flex flex-col items-center">
      <div className="flex mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-5 w-full mb-5 flex-row items-center gap-5 justify-between">
        <Breadcrumb>
          <Breadcrumb.Item href="/" icon={HiHome}>
            Domů
          </Breadcrumb.Item>
          <Breadcrumb.Item href={"/cart"}>Košík</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-row w-1/4 justify-end items-center gap-5">
          <TextInput id="search" type="text" placeholder="Hledej..." />
          <div className="h-full">
            <Link to={`/cart`}>
              <FaCartShopping />
            </Link>
          </div>
        </div>
      </div>
      <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Košík
      </span>
      <Tabs aria-label="Cart navigation" style="fullWidth" className="w-full">
        <Tabs.Item active title={!isMobile && "Košík"} icon={FaCartShopping}>
          <CartItems />
          {/*<Button onClick={() => tabsRef.current?.setActiveTab(1)}>
            Objednat
          </Button>*/}
        </Tabs.Item>
        <Tabs.Item title={!isMobile && "Info o objednávce"} icon={FaCircleInfo}>
          <OrderInfoPage setOrderInfo={setOrderInfo} />
          {/*<Button onClick={() => tabsRef.current?.setActiveTab(2)}>
            Pokračovat
          </Button>*/}
        </Tabs.Item>
        <Tabs.Item title={!isMobile && "Doprava"} icon={FaTruck}>
          <DeliveryOptionsPage setDeliveryOption={setDeliveryOption} />
          {/*<Button onClick={() => tabsRef.current?.setActiveTab(3)}>
            Pokračovat
          </Button>*/}
        </Tabs.Item>
        <Tabs.Item title={!isMobile && "Platba"} icon={FaMoneyBill1Wave}>
          <PaymentPage setPaymentOption={setPaymentInfo} />
          <Button onClick={sendOrder}>Dokončit</Button>
        </Tabs.Item>
        {/*<Tabs.Item title="Dokončení" icon={FaClipboardCheck}>
          <ThankYouPage />
          <Button href="/">Zpět do obchodu</Button>
        </Tabs.Item>*/}
      </Tabs>
    </div>
  );
};

export default Cart;
