import React, { useState } from "react";

const Main = () => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setName("");
  };

  const resetAlert = () => {
    setSuccess(false);
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
        {success && <p role="alert">SUCCESSFUL</p>}
        <button
          type="submit"
          disabled={name === "sam" ? true : false}
          style={{ marginLeft: "10px" }}
        >
          SUBMIT
        </button>
      </form>
      <button onClick={resetAlert} style={{ marginTop: "10px" }}>
        RESET
      </button>
    </div>
  );
};

export default Main;
