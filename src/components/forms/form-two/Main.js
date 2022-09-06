import React, { useState } from "react";

const Main = () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
    </div>
  );
};

export default Main;
