import React from "react";
import { useCountRenders } from "./useCountRenders";

// memo compares the changes and renders when they are different
export const Square = React.memo(({ n, increment }) => {
  useCountRenders();
  // passing five into increment
  return <button onClick={() => increment(n)}>n is: {n}</button>;
});
