import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import doctorDefaultImg from '../assets/images/doctor-default.jpg';

const DoctorCard = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getAllDoctor");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <>
      {doctors.length > 0 ? (
        doctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className="card shadow-sm p-3 mb-3 ms-5 mt-5 me-3 bg-white rounded"
            style={{ width: "26rem" }}
          >

            <div className="d-flex align-items-center justify-content-evenly">
              <img
                src={doctor.profile_image ? `data:image/jpeg;base64,${doctor.profile_image}` : (doctorDefaultImg)}
                alt="Doctor"
                className="rounded-circle"
                style={{ width: "8rem", height: "8rem", objectFit: "cover", marginRight: "1rem" }}
              />

              <div>
                <p className="text-primary mb-1" style={{ fontSize: "1rem" }}>
                  <b>{index + 1}.</b> {doctor.specialization}
                </p>
                <p className="font-weight-bold mb-1" style={{ color: "#1f2937", fontSize: "1.125rem" }}>
                  {doctor.name}
                </p>
                <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>
                  <b>Experience:</b> {doctor.experience} years
                </p>
              </div>
            </div>

            {/* ✅ Other Details (At Bottom) */}
            <div className="mt-3">
              <p className="text-warning font-weight-medium mb-2">
                <b>Address:</b> {doctor.address}
              </p>
              <p className="text-muted">
                <b>Email:</b> {doctor.email}
              </p>
              <p className="text-muted">
                <b>Fees:</b> ₹{doctor.fees}
              </p>

              <Link to={`/doctor-details/${doctor.id}`} className="btn btn-outline-warning rounded-pill">
                View in Detail
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No doctors available.</p>
      )}
    </>
  );
};

export default DoctorCard;
