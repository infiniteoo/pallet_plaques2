import React, { useState } from "react";
import axios from "axios";
const createTemplate = require("./create-template.jsx");


const SubmitButton = ({ definedStops }) => {
  const [pdfData, setPdfData] = useState(null);

  const handleSubmit = async () => {
    console.log("Submit button clicked");

    try {
   
      const response = await axios.post(
        "http://164.92.107.159/api/stops",
        definedStops,
        {
          responseType: "blob", // Request the response as binary data
        }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      setPdfData(pdfUrl);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5"
        onClick={handleSubmit}
      >
        Generate PDF
      </button>
      {pdfData && (
        <div>
          <p>PDF generated! Choose an option:</p>
          <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5">
          <a href={pdfData} target="_blank" rel="noopener noreferrer">
            View PDF
          </a>{" "}
          </button>
          {" "}
          <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5">
          <a
            href={pdfData}
            download="export.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default SubmitButton;
