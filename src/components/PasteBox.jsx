import React, { useState } from "react";
import parseData from "./parseData.js";
import axios from "axios";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const PasteBox = ({ value, onChange }) => {
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = async (event) => {
    try {
      setLoading(true);

      const response = await axios.post(
        process.env.REACT_APP_ENVIRONMENT === "development"
          ? "http://localhost:8122/api/copypasta"
          : "https://palletplaques.com/api/copypasta",
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
      setLoading(false);
      event.target.value = ""; // Clear the input box content
    } catch (error) {
      console.error("Error generating PDF:", error);
      setLoading(false);
      event.target.value = ""; // Clear the input box content on error
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
      {loading ? (
        <div className="mt-4 text-center">
          <p className="text-bold text-lg">Loading...</p>
          <BeatLoader css={override} size={50} color={"red"} loading={loading} />
        </div>
      ) : (
        pdfData && (
          <div>
            <p>PDF generated! Choose an option:</p>
            <button className="bg-red-500 hover.bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5">
              <a href={pdfData} target="_blank" rel="noopener noreferrer">
                View PDF
              </a>{" "}
            </button>{" "}
            <button className="bg-red-500 hover.bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5">
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
        )
      )}
    </>
  );
};

export default PasteBox;
