import React from "react";
import { Button } from 'flowbite-react';
import { useNavigate } from "react-router-dom";

const DeliveryOptionsPage = ({ setDeliveryOption }) => {
  const navigate = useNavigate();

  const handleNext = (option) => {
    setDeliveryOption(option);
    navigate("/payment");
  };

  return (
    <div className="w-5/6">
      <h2>Choose delivery option</h2>
      <Button onClick={() => handleNext("store-pickup")}>Store Pickup</Button>
      <Button onClick={() => handleNext("delivery")}>Delivery</Button>
    </div>
  );
};

export default DeliveryOptionsPage;