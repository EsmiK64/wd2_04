import React from "react";
import { TextInput, Button } from 'flowbite-react';

const PaymentPage = ({ setPaymentInfo }) => {
  const [cardNumber, setCardNumber] = React.useState("");

  return (
    <div className="w-5/6">
      <h2>Payment Information</h2>
      <TextInput
        id="cardNumber"
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
    </div>
  );
};

export default PaymentPage;