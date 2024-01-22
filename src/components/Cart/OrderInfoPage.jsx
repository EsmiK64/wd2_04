import React, { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const OrderInfoPage = ({ setOrderInfo }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [psc, setPsc] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <span className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
        Dodací údaje
      </span>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <fieldset className="border-2 flex flex-col gap-4 p-4 rounded-lg w-fit">
          <legend className="m-2">O objednavateli</legend>
          <div className="flex flex-row w-full gap-4">
            <TextInput
              id="name"
              type="text"
              placeholder="Jméno"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextInput
              id="surname"
              type="text"
              placeholder="Příjmení"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="email@email.cz"
            icon={HiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PhoneInput
            defaultCountry="cz"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            required
          />
        </fieldset>
        <fieldset className="flex flex-col gap-4 w-fit border-2 rounded-lg p-4">
          <legend>Info o adrese</legend>
          <div className="flex flex-row w-full gap-4">
            <TextInput
              id="address"
              type="text"
              placeholder="Adresa"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <TextInput
              id="city"
              type="text"
              placeholder="Město"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <TextInput
            id="psc"
            type="text"
            placeholder="PSČ"
            value={psc}
            onChange={(e) => setPsc(e.target.value)}
            required
          />
          <TextInput
            id="country"
            type="text"
            placeholder="Země"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </fieldset>
      </div>
    </div>
  );
};

export default OrderInfoPage;
