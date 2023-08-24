import React from "react";

const StopNumber = ({ numberOfStops, stop }) => {
  return (
    <>
      <label
        htmlFor="stopNumber"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        {stop ? stop + "." : "1."}
      </label>
    </>
  );
};

export default StopNumber;
