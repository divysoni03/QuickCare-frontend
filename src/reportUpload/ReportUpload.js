import React, { useState } from "react";
import axios from "axios";
import ReportPageInfo from "./reportPageInfo";

const ReportUpload = () => {
  const [file, setFile] = useState(null);

  const onInputChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // First API call: Convert PDF to text
      const textResponse = await axios.post(
        "http://localhost:8000/api/v1/pdf/to-text",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("PDF to Text Response:", textResponse.data);

      // Check if the API returned text before making the second request
      if (!textResponse.data || !textResponse.data.text) {
        throw new Error("No text extracted from the uploaded file.");
      }

      // Second API call: Send extracted text to chat endpoint
      const chatResponse = await axios.post(
        "http://localhost:8080/bot/chat",
        { prompt: textResponse.data.text }, // Send as JSON body
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Chatbot Response:", chatResponse.data);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div className="col-md-6 border rounded shadow w-100">
        <h1 className="text-center m-4">Report Analysis Online</h1>
        <p className="text text-center">
          Get expert analysis and personalized health insights from your blood tests, all from the comfort of your home.
        </p>
        <hr className="dropdown-divider" />
        <p className="text text-center px-5">
          Lab reports hold a wealth of information about your health, but understanding the complex data can be overwhelming.
          Our online lab report analysis service gives you the clarity you need, translating those numbers into clear explanations and actionable recommendations.
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-5 mt-5">
        {/* Report Upload Card */}
        <div className="card shadow p-4" style={{ width: "25rem", height: "20rem" }}>
          <h3 className="text-center">Upload A Report</h3>
          <p>Please attach a report to proceed</p>

          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Upload Your File Below</label>
              <input className="form-control" type="file" id="formFile" onChange={(e) => onInputChange(e.target.files[0])} />
            </div>
            <button className="btn btn-outline-danger mt-3 w-100" onClick={handleFileUpload}>
              CONTINUE
            </button>
          </div>
        </div>

        {/* Guidance Section */}
        <div className="card shadow-lg p-4 rounded" style={{ width: "25rem", height: "22rem" }}>
          <div className="text-center">
            <div
              className="bg-image mb-3"
              style={{
                height: "150px",
                backgroundSize: "cover",
                backgroundImage: "url('https://img.freepik.com/premium-vector/modern-design-illustration-ui-app-working_362714-3699.jpg')",
              }}
            ></div>
          </div>
          <h4>Guide to Upload a Report</h4>
          <ul className="ps-3">
            <li>Don’t crop out any part of the image</li>
            <li>Avoid blurred images</li>
            <li>Supported file types: JPEG, JPG, PNG, PDF</li>
            <li>Maximum allowed file size: 2MB</li>
          </ul>
        </div>
      </div>

      <ReportPageInfo />
    </>
  );
};

export default ReportUpload;
