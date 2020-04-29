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
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef();

  // persist the value of count in local storage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div style={{backgroundColor: 'lightblue'}}>{!data ? "loading ..." : data}</div>
      <div style={{backgroundColor: 'lightblue'}}>The count is: {count}</div>
      <button style={{backgroundColor: 'lightblue'}} onClick={() => setCount(c => c + 1)}>Increment count</button>
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
      <button style={{backgroundColor: 'lightyellow'}}
        onClick={() => {
          console.log(inputRef.current);
        }}
      >
        focus
      </button>
    </div>
  );
};

export default App;
