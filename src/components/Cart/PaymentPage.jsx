import React, { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import InputMask from "react-input-mask";

const PaymentPage = ({ setPaymentOption }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setPaymentInfo({ ...paymentInfo, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  return (
    <div className="w-full flex justify-center">
      <div
        id="PaymentForm"
        className="flex flex-col md:flex-row md:items-center lg:w-2/3"
      >
        <Cards
          className="w-1/2 p-0"
          cvc={paymentInfo.cvc}
          expiry={paymentInfo.expiry}
          focused={paymentInfo.focus}
          name={paymentInfo.name}
          number={paymentInfo.number}
        />
        <form className="flex flex-col w-full md:w-1/3 gap-2 my-3 lg:my-0">
          <InputMask
            type="tel"
            name="name"
            placeholder="Jméno na kartě"
            className="bg-slate-100 rounded-lg border"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <InputMask
            mask="9999 9999 9999 9999"
            type="tel"
            name="number"
            placeholder="Číslo karty"
            className="bg-slate-100 rounded-lg border"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <InputMask
            mask="99/99"
            type="tel"
            name="expiry"
            placeholder="Platnost"
            className="bg-slate-100 rounded-lg border"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <InputMask
            mask="999"
            type="tel"
            name="cvc"
            placeholder="CVC"
            className="bg-slate-100 rounded-lg border"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
