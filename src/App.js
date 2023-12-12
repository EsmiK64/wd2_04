import React from "react";
import { /*Link, */BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

//import { Navbar } from 'flowbite-react';

function App() {
  return (
    <Router className="bg-slate-200">
      {
        /*<Navbar fluid rounded className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-5 p-5">
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Domů
            </Navbar.Link>
            <Navbar.Link as={Link} href="#">
              Kontakt
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>*/
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
