import React from "react";
import "../styles/DoctorSlider.css";

// Images
import img1 from "../assets/images/doctor-img1.jpg";
import img2 from "../assets/images/doctor-img2.png";
import img3 from "../assets/images/doctor-img3.jpg";
import img4 from "../assets/images/doctor-img4.jpeg";
import img5 from "../assets/images/doctor-img5.jpeg";
import img6 from "../assets/images/doctor-img6.jpg";
import img7 from "../assets/images/doctor-img7.jpeg";
import img8 from "../assets/images/doctor-img8.jpg";
import img9 from "../assets/images/doctor-img9.jpeg";

export default function DoctorSlider() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const doc_field = ["Psychotherapist", "Necrologist", "Neurologist", "Dietitian", "Cardiologist", "Dermatologist", "Pediatrician", "Orthopedician", "Daibetologist"];
  const doc_info = ["Depression, Anxiety, OCD", "Kidney Disease", "Severe Dizziness,Stroke,Muscle Wekness", "Diabetes,Thyroid", "Chest discomfort,Heartburn", "Acne,Hairfall,itching", "Vomiting,Cough", "Back Pain,Knee Pain", "Diabetes,Nerve Damage"];

  return (
    <div className="container mt-4">
      <h2 className="text text-center mt-5 mb-3"> Consult with top doctors across specialties</h2>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Images */}
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
              <div className="carousel-caption">
                <h5>{doc_field[index]}</h5>
                <p>{doc_info[index]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon outline-primary" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
}
