'use client'

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
  FaArrowRight
} from "react-icons/fa6";

//import shippingOptions from "../../data/shippingOptions.json";

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
  const [price, setPrice] = useState("");

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
    const cartItems = JSON.parse(localStorage.getItem("cart") || '{}');
    const order = { cartItems, orderInfo, deliveryOption, paymentInfo };
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
      <Tabs aria-label="Cart navigation" style="fullWidth" className="w-full mb-7" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
        <Tabs.Item active title={!isMobile && "Košík"} icon={FaCartShopping}>
          <CartItems totalPrice={setPrice} />
        </Tabs.Item>
        <Tabs.Item title={!isMobile && "Info o objednávce"} icon={FaCircleInfo}>
          <OrderInfoPage setOrderInfo={setOrderInfo} />
        </Tabs.Item>
        <Tabs.Item title={!isMobile && "Doprava"} icon={FaTruck}>
          <DeliveryOptionsPage setDeliveryOption={setDeliveryOption} />
        </Tabs.Item>
        <Tabs.Item title={!isMobile && "Platba"} icon={FaMoneyBill1Wave}>
          <PaymentPage setPaymentOption={setPaymentInfo} />
        </Tabs.Item>
        {/*<Tabs.Item title="Dokončení" icon={FaClipboardCheck}>
          <ThankYouPage />
          <Button href="/">Zpět do obchodu</Button>
        </Tabs.Item>*/}
      </Tabs>
      <div className="w-full fixed flex bottom-0 bg-slate-200 p-4 border justify-between items-center">
        {activeTab == 3 &&
          <Button
            onClick={() => tabsRef.current?.setActiveTab(activeTab + 1)}
            color="success">
            Pokračovat v objednávce
            <FaArrowRight className="ml-2 h-5 w-5" />
          </Button>
        }
        {activeTab !== 3 &&
          <Button
            onClick={sendOrder}
            color="success">
            Dokončit objednávku
            <FaArrowRight className="ml-2 h-5 w-5" />
          </Button>
        }

        <p className="text-xl font-bold">Celková cena: {price} Kč</p>
      </div>
    </div>
  );
};

export default Cart;