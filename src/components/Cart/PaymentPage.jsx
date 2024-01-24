import React, { useState, useEffect } from "react";
import { Radio, Label, Button } from "flowbite-react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import InputMask from "react-input-mask";
import { FaCreditCard, FaPiggyBank, FaMoneyBillTransfer, FaBitcoin } from "react-icons/fa6";

const PaymentPage = ({ setPaymentOption, setCardData }) => {
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const [currentPaymentOption, setCurrentPaymentOption] = useState("card");

  useEffect(() => {
    setCardData(cardInfo);
  }, [cardInfo])
  const handleInputFocus = (e) => {
    setCardInfo({ ...cardInfo, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const onPaymentOptionChange = (e) => {
    setCurrentPaymentOption(e.target.value);
    setPaymentOption(currentPaymentOption);
  }

  const bankAlert = () => {
    alert("tady banka\ntady banka");
  }

  return (
    <div className="w-full flex flex-row items-center gap-5">
      <form className="flex w-full flex-col items-center mb-5" id="form" onChange={onPaymentOptionChange}>
        <h3 className="mb-4 filtry_nadpis">Vyberte způsob doručení</h3>
        <div className="w-full">
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border rounded-t-md">
            <FaCreditCard />
            <Radio id="card" name="payment" value="card" defaultChecked />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="card">Platba kartou</Label>
              <i>zdarma</i>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border">
            <FaPiggyBank />
            <Radio id="bank" name="payment" value="bank" />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="bank">Bankovní převod</Label>
              <i>zdarma</i>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border">
            <FaMoneyBillTransfer />
            <Radio id="dobirka" name="payment" value="dobirka" />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="dobirka">Platba při předání (dobírka)</Label>
              <i>od 39 Kč</i>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border rounded-b-lg">
            <FaBitcoin />
            <Radio id="bitcoin" name="payment" value="bitcoin" />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="bitcoin">Bitcoin (BTC)</Label>
              <i>zdarma</i>
            </div>
          </div>
        </div>
      </form>
      {currentPaymentOption == "card" &&
        <div
          id="PaymentForm card-section"
          className="flex flex-col md:flex-row md:items-center lg:w-2/3 p-4 bg-slate-50 border rounded-lg"
        >
          <Cards
            className="w-1/2 p-0 m-0"
            cvc={cardInfo.cvc}
            expiry={cardInfo.expiry}
            focused={cardInfo.focus}
            name={cardInfo.name}
            number={cardInfo.number}
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
      }
      {currentPaymentOption == "bank" &&
        <div className="w-fit p-4 bg-slate-50 border rounded-lg" id="bank-section">
          <Button onClick={bankAlert}>Bankovní převod</Button>
        </div>
      }
      {currentPaymentOption == "bitcoin" &&
        <div className="w-fit p-4 bg-slate-50 border rounded-lg" id="btc-section">
          <Button onClick={bankAlert}>Bitcoin</Button>
        </div>
      }
    </div>
  );
};

export default PaymentPage;
