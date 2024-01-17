import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="w-5/6">
      <h2>Thank you for your order!</h2>
      <p>Your order has been successfully placed.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ThankYouPage;