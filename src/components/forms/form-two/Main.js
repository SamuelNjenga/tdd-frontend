import React, { useState } from "react";

const Main = () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const changeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

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
      <select
        onChange={(event) => changeLanguage(event.target.value)}
        value={currentLanguage}
      >
        <option value="spanish">Spanish</option>
        <option value="chinese" selected>Chinese</option>
      </select>
      <p>{currentLanguage}</p>
    </div>
  );
};

export default Main;
