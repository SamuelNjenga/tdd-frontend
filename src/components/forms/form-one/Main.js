import React, { useState } from "react";

const Main = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("SUCCESSFUL");
    setName("");
  };

  return (
    <div>
      <h1>Hello There</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <button type="submit" disabled={name === "sam" ? true : false}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Main;
