import React, { useState } from "react";

const Main = () => {
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <div style={{ color: dark ? "gold" : "silver" }}>
      TOGGLE OPERATION TDD
      <button onClick={handleToggle}>TOGGLE</button>
      <p title="toggleStyle">{dark ? "GOLD" : "SILVER"}</p>
    </div>
  );
};

export default Main;
