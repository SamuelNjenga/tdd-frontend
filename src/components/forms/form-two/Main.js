import React, { useState } from "react";

const Main = () => {
  const [age, setAge] = useState("");

  return (
    <div>
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
      />
    </div>
  );
};

export default Main;
