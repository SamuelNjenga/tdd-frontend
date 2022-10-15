import React from "react";
import {useCounter} from "./useCounter";

const Main = () => {
  const { count, increment, reset } = useCounter(8000);

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Main;
