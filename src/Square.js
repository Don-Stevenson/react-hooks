import React from "react";
import { useCountRenders } from "./useCountRenders";

// memo compares the changes and renders when they are different
export const Square = React.memo(({ n, onClick }) => {
  useCountRenders();
  // passing five into increment 
return <button onClick={onClick}>n is: {n}</button>;
});
