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
      <br />
      <select multiple>
        <option value="1">A</option>
        <option value="2" selected>
          B
        </option>
        <option value="3">C</option>
      </select>
    </div>
  );
};

export default Main;
