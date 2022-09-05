import React, { useState } from "react";

const Main = () => {
  const [count, setCounter] = useState(1);

  return (
    <div>
      <button onClick={() => setCounter((count) => count + 1)}>{count}</button>
    </div>
  );
};

export default Main;
