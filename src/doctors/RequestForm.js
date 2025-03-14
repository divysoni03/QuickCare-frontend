import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const PatientForm = () => {
  const { doctorId } = useParams();  // Getting doctorId from URL params
  const navigate = useNavigate();

  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  // Ensure doctorId is a number
  const requestId = {
    userId: Number(localStorage.getItem("id")), 
    doctorId: doctorId ? Number(doctorId) : null // Handle possible undefined
  };

  const [request, setRequest] = useState({
    id: requestId,
    status: "PENDING",
    symptoms: "",
    payment: null,
    report: null
  });

  const limitWords = (event) => {
    const words = event.target.value.trim().split(/\s+/);
    if (words.length > 100) {
      setSymptoms(words.slice(0, 100).join(" "));
      setError(true);
    } else {
      setSymptoms(event.target.value);
      setError(false);
    }
  };

  const validateForm = async (e) => {
    e.preventDefault();

    if (symptoms.trim().split(/\s+/).length > 100) {
      setError(true);
      return;
    }

    const updatedRequest = {
      ...request,
      symptoms: symptoms // Set symptoms before sending
    };

    try {
      const response = await axios.post("http://localhost:8080/api/request/user/addRequest", updatedRequest);
      console.log("Response:", response.data);
      alert("Request submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 m-0">
      <div
        className="container p-4"
        style={{
          maxWidth: "800px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p className="fs-3 text-primary text-center mb-0 pb-0">
          Submit Your Request
        </p>

        <form onSubmit={validateForm}>
          <div className="mb-3 text-start">
            <label className="form-label">Patient Name</label>
            <input
              type="text"
              className="form-control"
              value={localStorage.getItem("name")}
              readOnly
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={localStorage.getItem("email")}
              readOnly
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              value={localStorage.getItem("phone")}
              readOnly
            />
          </div>

          <textarea
            id="symptoms"
            placeholder="Describe your symptoms (e.g., headache, fever, cough)"
            className="form-control mb-3 text-start"
            value={symptoms}
            onChange={limitWords}
            style={{ height: "100px" }}
          ></textarea>

          {error && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              Only 100 words are allowed.
            </span>
          )}

          <div className="mb-3 text-start">
            <label className="form-label">Consultation Fee</label>
            <input type="text" className="form-control" value="₹100" disabled />
          </div>

          <div className="mb-3 text-center">
            <button type="button" className="btn btn-secondary w-100" disabled>
              💳 Make Payment
            </button>
          </div>

          <button type="submit" className="btn btn-outline-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
