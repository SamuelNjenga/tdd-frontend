import React from "react";

const Main = ({ count }) => {
  return (
    <div>
      <h1>Javascript Tester</h1>
      <h2 data-testid="custom-element">{count}</h2>
    </div>
  );
};

export default Main;
