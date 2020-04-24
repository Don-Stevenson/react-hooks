import React, { useState } from "react";

const App = () => {
  const [{count1, count2}, setCount] = useState({count1: 10, count2:20});

  return (
    <div>
      <button onClick={() => setCount(currentcount => currentcount + 1)}> + </button>
      <div>count 1: {count1}</div>
      <div>count 2: {count2}</div>
    </div>
  );
};

export default App;
