import React, {useState} from "react";
import parseData from './parseData.js';



const PasteBox = ({ value, onChange }) => {

    const [pasteData, setPasteData] = useState(null);

    const handleChange = (event) => {
        console.log("event.target.value", event.target.value);
        parseData(event.target.value);
        setPasteData(event.target.value);
        
       
    };


  return (
    <>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900 mt-6"
      >
        .. Or Paste Data Here
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border rounded p-2 w-full"
      />
    </>
  );
};

export default PasteBox;
