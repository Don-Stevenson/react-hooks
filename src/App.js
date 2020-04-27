import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./UseFetch";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  // load the value of count from local storage
  const { count, setCount } = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // persist the value of count in local storage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{!data ? "loading ..." : data}</div>
      <div>count is: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment count</button>
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
};

export default App;
