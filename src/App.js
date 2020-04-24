import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  return (
    <div>
      <input
        name="firstName"
        placeholder="First name"
        values={values.firstName}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="email address"
        values={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"return (
    <div>
      <input
        name="firstName"
        placeholder="First name"
        values={values.firstName}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="email address"
        values={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
