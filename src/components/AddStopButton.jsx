import React from "react";

const AddStopButton = ({ numberOfStops, setNumberOfStops, stop }) => {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add Next Stop
      </label>

      <button
        className="text-2xl"
        onClick={() => {
          setNumberOfStops(numberOfStops + 1);
        }}
      >
        ➕
      </button>
    </div>
  );
};

export default AddStopButton;
