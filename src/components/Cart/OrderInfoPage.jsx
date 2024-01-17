import React, { useState } from "react";
import { TextInput, Button } from 'flowbite-react';

const OrderInfoPage = ({ setOrderInfo }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="w-5/6">
      <h2>Information about the person ordering</h2>
      <TextInput
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        id="address"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
};

export default OrderInfoPage;