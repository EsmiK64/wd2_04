import React from "react";
import { Radio, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaHouse,
  FaBox,
  FaTruck,
  FaPlane,
  FaShop,
} from "react-icons/fa6";

const DeliveryOptionsPage = ({ setDeliveryOption }) => {
  const navigate = useNavigate();

  const handleNext = (option) => {
    setDeliveryOption(option);
    navigate("/payment");
  };

  return (
    <div>
      <fieldset className="flex w-full flex-col items-center">
        <h3 className="mb-4 filtry_nadpis">Vyberte způsob doručení</h3>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border rounded-t-md">
            <FaEnvelope />
            <Radio id="mail" name="delivery" value="Pošta" defaultChecked />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="mail">Doručení na poštu</Label>
              <i>od 29 Kč</i>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border">
            <FaHouse />
            <Radio id="address" name="delivery" value="Adresa" />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="address">Doručení na adresu</Label>
              <i>od 59 Kč</i>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border">
            <FaBox />
            <Radio id="dpd" name="delivery" value="DPD" />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="dpd">DPD na adresu</Label>
              <i>od 59 Kč</i>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border">
            <FaTruck />
            <Radio id="ppl" name="delivery" value="PPL" />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="ppl">PPL na adresu</Label>
              <i>od 59 Kč</i>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border">
            <FaPlane />
            <Radio id="plane" name="delivery" value="Letecky" />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="plane">DPD expres letecky</Label>
              <i>od 399 Kč</i>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 m-0 p-5 border rounded-b-md">
            <FaShop />
            <Radio id="prodejna" name="delivery" value="Prodejna" />
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="prodejna">Odběr na prodejně</Label>
              <i>zdarma</i>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default DeliveryOptionsPage;
