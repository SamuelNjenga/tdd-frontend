import React, { useState } from "react";

const Button = () => {
  const [value, setValue] = useState("Press Here");

  const dummyFunction = () => {
    setValue("You Clicked");
  };

  return (
    <div>
      <button onClick={dummyFunction} title="dummyButton">
        {value}
      </button>
    </div>
  );
};

export default Button;
