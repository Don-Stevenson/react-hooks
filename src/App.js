import React, { useState, useCallback } from "react";
import { Hello } from "./Hello";
import { Square } from "./Square";
import styled from "styled-components";

const Div = styled.div`
  font-size: 20px;
  margin: 20px;
  border: 15px outset lightblue;
  &:hover {
    background-color: #F1F1F1;
  }
`;

const Paragraph = styled.p`
  font-size: 30px;
  text-align: center;
`;

const App = () => {
  const [count, setCount] = useState(0);
  const favNums = [10, 15, 3];

  // useCallback prevents the set count to be rendered unnecessarily
  // passing a variable into increment from Hello js
  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  return (
    <Div>
      <Hello increment={increment} />
      <Paragraph> count : {count} </Paragraph>
      {favNums.map(n => {
        return (
          <Square className="App_button" increment={increment} n={n} key={n} />
        );
      })}
    </Div>
  );
};

// const App = () => {
//   const [values, handleChange] = useForm({
//     email: "",
//     password: "",
//     firstName: ""
//   });
//   // load the value of count from local storage
//   const [count, setCount] = useState(() =>
//     JSON.parse(localStorage.getItem("count"))
//   );

//   const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
//   const inputRef = useRef();
//   const [showHello, setShowHello] = useState(true);

//   // persist the value of count in local storage
//   useEffect(() => {
//     localStorage.setItem("count", JSON.stringify(count));
//   }, [count]);

//   return (
//     <div>
//       <div>{!data ? "loading ..." : data}</div>
//       <div>The count is: {count}</div>
//       <button onClick={() => setCount(c => c + 1)}>Increment count</button>
//       <button onClick={() => setShowHello(!showHello)}>Toggle</button>
//       {showHello && <Hello />}
//       <input
//         name="firstName"
//         placeholder="First name"
//         values={values.firstName}
//         onChange={handleChange}
//       />
//       <input
//         ref={inputRef}
//         name="email"
//         placeholder="email address"
//         values={values.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button
//         onClick={() => {
//           inputRef.current.focus();
//         }}
//       >
//         focus
//       </button>
//     </div>
//   );
// };

export default App;
