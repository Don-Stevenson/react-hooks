import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {
  useCountRenders();
  // passing five into increment 
  return <button onClick={() => increment(5)}>Hello</button>;
});
