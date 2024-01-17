import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

// fontawesome stuff
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faTwitter, faFontAwesome);

function App() {
  return (
    <Router className="bg-slate-200">
      <div className="container mx-auto mt-0 mb-8 md:my-4 lg:my-8 p-5 flex items-center flex-col">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            EsmiK&nbsp;
          </span>
          Shop; The E-shop
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/*<Route path="/order-info" element={<OrderInfoPage setOrderInfo={setOrderInfo} />} />
          <Route path="/delivery" element={<DeliveryOptionsPage setDeliveryOption={setDeliveryOption} />} />
          <Route path="/payment" element={<PaymentPage setPaymentInfo={setPaymentInfo} />} />
          <Route path="/thank-you" element={<ThankYouPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
