import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import OrderSent from "./components/OrderSent";

import { Toast } from "flowbite-react";

// fontawesome stuff
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FaRegCheckCircle } from "react-icons/fa";
library.add(fas, faTwitter, faFontAwesome);

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Router className="bg-slate-200">
      <div className="container mx-auto mt-0 mb-8 md:my-4 lg:my-8 p-5 flex items-center flex-col">
        {isPopupOpen && (
          <div className="fixed z-50 w-screen h-screen m-0 flex items-end justify-center pb-16">
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                <FaRegCheckCircle className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">
                Zboží přidáno do košíku.
              </div>
              <Toast.Toggle onDismiss={() => setIsPopupOpen(false)} />
            </Toast>
          </div>
        )}
        <h1 className="m-5 flex flex-col items-center md:flex-row gap-6 md:m-0 md:mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              EsmiK
            </span>
            &nbsp; Shop;
          </div>
          <span>The&nbsp;E-shop</span>
        </h1>
        <Routes>
          <Route path="/" element={<Home setIsPopupOpen={setIsPopupOpen} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-sent" element={<OrderSent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
