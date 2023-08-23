import React, {useState} from "react";
import parseData from './parseData.js';
import axios from "axios";



const PasteBox = ({ value, onChange }) => {

    const [pasteData, setPasteData] = useState(null);
    const [pdfData, setPdfData] = useState(null);

    const handleChange = async (event) => {
        console.log("event.target.value", event.target.value);
        setPasteData(parseData(event.target.value));
        
        try {
          const response = await axios.post(
            process.env.REACT_APP_ENVIRONMENT === "development"
              ? process.env.REACT_APP_LOCAL_PASTA
              : "http://164.92.107.159/api/copypasta",
              parseData(event.target.value),
            {
              responseType: "blob", // Request the response as binary data
              headers: {
                "Content-Type": "application/json",
              },
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
      {pdfData && (
        <div>
          <p>PDF generated! Choose an option:</p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5">
            <a href={pdfData} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>{" "}
          </button>{" "}
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5">
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
    </>
  );
};

export default PasteBox;
