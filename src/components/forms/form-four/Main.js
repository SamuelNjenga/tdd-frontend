import React, { useState } from "react";

const Main = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue("");
  };

  return (
    <div>
      <textarea
        defaultValue="Hello, World!"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
      <button onClick={handleClick}>CLEAR</button>
    </div>
  );
};

export default Main;
