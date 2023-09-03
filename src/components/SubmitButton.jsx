import React, { useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SubmitButton = ({ definedStops }) => {
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleSubmit = async () => {
    console.log("Submit button clicked");

    try {
      setLoading(true);

      const response = await axios.post(
        process.env.REACT_APP_ENVIRONMENT === "development"
          ? "http://localhost:8122/api/stops"
          : "https://palletplaques.com/api/stops",
        definedStops,
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
      setLoading(false); // Turn off the spinner after processing
      setShowButton(false); // Hide the button after success
    } catch (error) {
      console.error("Error generating PDF:", error);
      setLoading(false); // Turn off the spinner in case of an error
    }
  };

  return (
    <div>
      {showButton && ( // Conditional rendering based on showButton state
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5"
          onClick={handleSubmit}
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Generating..." : "Generate PDF"}
        </button>
      )}
      {loading ? (
        <div className="mt-4 text-center">
          <BeatLoader
            css={override}
            size={50}
            color={"red"}
            loading={loading}
          />
        </div>
      ) : (
        pdfData && (
          <div>
            <p>PDF generated! Choose an option:</p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-5">
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
    </div>
  );
};

export default SubmitButton;
