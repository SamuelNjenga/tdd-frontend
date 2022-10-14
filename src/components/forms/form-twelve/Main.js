import React from "react";

import useCounter from "./useCounter";
import useCounterVersionTwo from "./useCounterVersionTwo";


const Main = () => {
  const { count, increment, reset } = useCounter();
  const { counter, incrementor, resetter } = useCounterVersionTwo(8000);

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <hr />
      <span>{counter}</span>
      <button onClick={incrementor}>Incrementor</button>
      <button onClick={resetter}>Resetter</button>
    </div>
  );
};

export default Main;
