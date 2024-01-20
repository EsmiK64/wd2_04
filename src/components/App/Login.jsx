import React, { useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <Label htmlFor="username" value="Uživatelské jméno" />
        <TextInput
          type="text"
          id="username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />

        <Label htmlFor="password" value="Heslo" />
        <TextInput
          type="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
