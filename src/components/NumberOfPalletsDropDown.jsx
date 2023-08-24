import React, { useState } from "react";
import palletCount from "./palletCount.js";

const NumberOfPalletsDropDown = ({
  options,
  numberOfStops,
  setNumberOfStops,
  stop,
  setDefinedStops,
  definedStops,
}) => {
  const [selectedOption, setSelectedOption] = useState(palletCount[2]);
  const [isEditing, setIsEditing] = useState(false);
  const stopIndex = stop.stopNumber - 1; // Assuming stops are 1-indexed

  const handleOptionChange = (event) => {
    console.log("event.target.value", event.target.value);
    setSelectedOption(event.target.value);
    setDefinedStops((prevDefinedStops) => {
      const updatedStops = [...prevDefinedStops];
      updatedStops[stopIndex] = {
        ...updatedStops[stopIndex],
        numberOfPallets: event.target.value,
      };
      return updatedStops;
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="block text-sm font-medium leading-6 text-gray-900 relative  rounded-md shadow-sm ">
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        # of Pallets
      </label>

      {isEditing ? (
        <input
          className="block w-full rounded-md border-0 py-1.5   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          value={selectedOption}
          onChange={handleOptionChange}
        />
      ) : (
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-medium block text-sm leading-6 text-gray-900 relative rounded-md shadow-sm h-9"
        >
          {palletCount.map((option, index) => (
            <option key={option.id} value={option.id}>
              {option.id}
            </option>
          ))}
        </select>
      )}
      {/*  {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )} */}
    </div>
  );
};

export default NumberOfPalletsDropDown;
