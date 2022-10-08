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
      <label for="startTime">
        {" "}
        Please enter a start time for the meeting:{" "}
      </label>
      <input
        id="startTime"
        type="text"
        aria-errormessage="msgID"
        aria-invalid="true"
        value="11:30 PM"
      />
      <span id="msgID" aria-live="assertive" style={{ visibility: "visible" }}>
        Invalid time: the time must be between 9:00 AM and 5:00 PM
      </span>
    </div>
  );
};

export default Main;
