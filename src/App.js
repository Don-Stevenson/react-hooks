import React, { useState, useEffect, useRef } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./UseFetch";
import { Hello } from "./Hello";

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
  const [showHello, setShowHello] = useState(true);

  // persist the value of count in local storage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div style={style.text}>{!data ? "loading ..." : data}</div>
      <div style={style.text}>The count is: {count}</div>
      <button style={style.button} onClick={() => setCount(c => c + 1)}>
        Increment count
      </button>
      <button style={style.button} onClick={() => setShowHello(!showHello)}>
        Toggle
      </button>
      {showHello && <Hello />}
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
      <button
        style={{ backgroundColor: "lightpink" }}
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
};

const style = {
  text: { backgroundColor: "lightblue", textAlign: "center" },
  button: { backgroundColor: "lightblue" }
};

export default App;
