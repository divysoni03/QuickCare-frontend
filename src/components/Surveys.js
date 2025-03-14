import React from "react";
import "../styles/GeneralSurveys.css";
import {Link} from 'react-router-dom';

const surveys = [
  { title: "Mental Health Survey", description: "Share your mental status to get better support and resources." ,link: "/mental-health-survey" },
  { title: "Health Survey", description: "Participate in our general health survey to help us understand your health better." ,link: "/health-survey" },
  { title: "Lifestyle Survey", description: "Help us understand your lifestyle choices and their impact on your health.", link: "/lifestyle-survey" },
];

const Surveys = () => {
  return (
    <div className="container mt-5">
      <h2 className="text text-center">General Surveys</h2>
      <div className="surveys-container">
        {surveys.map((survey, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">{index + 1}. {survey.title}</h5>
              <p className="card-text">{survey.description}</p>
              <Link className="btn btn-primary" to={survey.link}>Take Survey</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surveys;
