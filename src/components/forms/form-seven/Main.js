import React from "react";

const Main = () => {
  return (
    <div>
      <label htmlFor="file-uploader">Upload file:</label>
      <input id="file-uploader" type="file" multiple />
    </div>
  );
};

export default Main;
