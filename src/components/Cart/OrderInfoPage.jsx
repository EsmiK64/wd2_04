import React, { useState } from "react";
import { TextInput, Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

const OrderInfoPage = ({ setOrderInfo }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [psc, setPsc] = useState("");

  return (
    <div className="w-5/6 flex flex-col gap-5">
      <h2>Dodací údaje</h2>
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
          className="w-1/2"
          required
        />
      </fieldset>
      <fieldset className="flex flex-row gap-4 w-full border-2 rounded-lg p-4">
        <legend>Info o adrese</legend>
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
        <TextInput
          id="psc"
          type="text"
          placeholder="PSČ"
          value={psc}
          onChange={(e) => setPsc(e.target.value)}
          required
        />
      </fieldset>
    </div>
  );
};

export default OrderInfoPage;