import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

import doctorDefaultImg from '../assets/images/doctor-default.jpg';

const ShowDoctorCard = () => {
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState({
      id: null,
      address: "",
      createdAt: "",
      email: "",
      experience: "",
      fees: null,
      name: "",
      phone: "",
      profile_image: null,
      qualifications: "",
      specialization: ""
    });
    

    const { id } = useParams();

    useEffect(()=>{
      loadUser();
    },[]);

    const loadUser = async ()=>{
      const result = await axios.get(`http://localhost:8080/searchDoctor/${id}`);
      setDoctor(result.data);
      console.log(doctor);
      console.log(result);

    };

    const handleClose = () =>{
        navigate("/doctors");
    }

  return (
    <div className="card-container" style={styles.cardContainer}>
      <div className="doctor-info d-flex flex-col gap-5" style={styles.doctorInfo}>
            <img
                src={doctor.profile_image ? `data:image/jpeg;base64,${doctor.profile_image}` : (doctorDefaultImg)}
                alt="Doctor"
                className="rounded-circle"
                style={{ width: "8rem", height: "8rem", objectFit: "cover", marginRight: "1rem" }}
              />
        <div className="doctor-details" style={styles.doctorDetails}>
          <h3>{doctor.name}</h3>
          <p>
            <i className="fas fa-stethoscope" style={styles.icon}></i>{" "}
            {doctor.specialization}
          </p>
          <p>
            <i className="fas fa-calendar-check" style={styles.icon}></i> {doctor.experience}+
            Years Experience
          </p>
          <p>
            <i className="fas fa-hospital" style={styles.icon}></i>
            {doctor.address}
          </p>
          <p>
            <i className="fas fa-envelope" style={styles.icon}></i>{" "}
            {doctor.email}
          </p>
        </div>
      </div>

      <div className="extra-details" style={styles.extraDetails}>
        <p>
          <strong>Consultation Fee:</strong> &#8377; {doctor.fees} per session
        </p>
        <p>
          <strong>Phone number : </strong>{doctor.phone}
        </p>
        <p>
          <strong>Qualifications : </strong>{doctor.qualifications}
        </p>
        <p>
          <strong>On plateForm since : </strong>{doctor.createdAt.substring(0, 10)}
        </p>
      </div>

      <div className="button-container " style={styles.buttonContainer}>
        <Link type="button" className="btn btn-outline-primary me-2  " to={`/request-form/${doctor.id}`}>
          Book Appointment
        </Link>
        <button type="button" className="btn btn-outline-danger " onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    width: "100%",
    border: "1px solid #ddd",
    transition: "transform 0.3s ease-in-out",
    margin: "20px auto",
  },
  doctorInfo: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    paddingBottom: "15px",
    borderBottom: "1px solid #ddd",
  },
  doctorImg: {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ffffff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  doctorDetails: {
    fontSize: "0.95rem",
    color: "#555",
  },
  extraDetails: {
    marginTop: "15px",
    padding: "12px",
    borderRadius: "10px",
    background: "#f8f9fa",
    fontSize: "0.95rem",
    lineHeight: "1.5",
  },
  icon: {
    color: "#3498db",
    marginRight: "5px",
  },
  buttonContainer: {
    display: "block",
    marginTop: "20px",
  },
};

export default ShowDoctorCard;