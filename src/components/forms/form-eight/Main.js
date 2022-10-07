import React from "react";

const Main = () => {
  return (
    <div>
      <button data-testid="button" type="submit" disabled>
        submit
      </button>
      <fieldset disabled>
        <input type="text" data-testid="input" />
      </fieldset>
      <a href="#" disabled>
        link
      </a>
    </div>
  );
};

export default Main;
