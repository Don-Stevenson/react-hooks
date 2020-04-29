import React, { useState, useEffect, useRef } from "react";
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
  const { data, loading } = useFetch(`http://numbersapi.com/42/trivia`);
  const inputRef = useRef()
  console.log("count is, setcount is", count, setCount)

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
        ref={inputRef}
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
      <button onClick={()=> {
        console.log(inputRef.current)
      }}>focus</button>
    </div>
  );
};

export default App;
