import React, { useState } from "react";

const Main = () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("english");
  const [complete, setComplete] = useState(false);

  const changeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  const handleChange = (e) => {
    setComplete(e.target.value);
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
        <option value="chinese" selected>
          Chinese
        </option>
      </select>
      <input
        type="checkbox"
        name="complete"
        checked={complete}
        onChange={(e) => {
          handleChange({
            target: {
              name: e.target.name,
              value: e.target.checked,
            },
          });
        }}
      />
      <p>{currentLanguage}</p>
      <p>{complete ? "CHECKED" : "UNCHECKED"}</p>
    </div>
  );
};

export default Main;
