import React, { useState } from "react";

const LifestyleSurvey = () => {
  const [formData, setFormData] = useState({
    exerciseFrequency: "Never",
    sleepDuration: "Less than 4 hours",
    smokingHabits: "Yes, regularly",
    alcoholConsumption: "Never",
    mentalWellnessPractices: "No",
    socialConnections: "Never",
    screenTime: "6+ hours"
  });
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const calculateScore = () => {
    let totalScore = 0;

    // Exercise (Max 10 points)
    const exerciseScores = {
      "Daily": 10,
      "Several times a week": 8,
      "Once a week": 5,
      "Rarely": 2,
      "Never": 0
    };
    totalScore += exerciseScores[formData.exerciseFrequency];

    // Sleep (Max 10 points)
    const sleepScores = {
      "Less than 4 hours": 2,
      "4-5 hours": 4,
      "6-7 hours": 7,
      "8-9 hours": 10,
      "More than 9 hours": 6
    };
    totalScore += sleepScores[formData.sleepDuration];

    // Smoking (Max 15 points)
    const smokingScores = {
      "Yes, regularly": 0,
      "Yes, occasionally": 5,
      "No": 15
    };
    totalScore += smokingScores[formData.smokingHabits];

    // Alcohol (Max 10 points)
    const alcoholScores = {
      "Daily": 0,
      "Several times a week": 2,
      "Once a week": 5,
      "Rarely": 8,
      "Never": 10
    };
    totalScore += alcoholScores[formData.alcoholConsumption];

    // Mental Wellness (Max 10 points)
    const mentalScores = {
      "Yes, regularly": 10,
      "Yes, occasionally": 6,
      "No": 0
    };
    totalScore += mentalScores[formData.mentalWellnessPractices];

    // Social Connections (Max 10 points)
    const socialScores = {
      "Daily": 10,
      "Several times a week": 8,
      "Once a week": 5,
      "Rarely": 2,
      "Never": 0
    };
    totalScore += socialScores[formData.socialConnections];

    // Screen Time (Max 5 points)
    const screenScores = {
      "Less than 2 hours": 5,
      "2-4 hours": 4,
      "4-6 hours": 2,
      "6+ hours": 0
    };
    totalScore += screenScores[formData.screenTime];

    setScore(totalScore);
    
    // Determine health message
    if (totalScore >= 60) setMessage("Excellent lifestyle! Keep it up! 🎉");
    else if (totalScore >= 45) setMessage("Good lifestyle, but there's room for improvement! 💪");
    else if (totalScore >= 30) setMessage("Average lifestyle - consider making some healthy changes.");
    else setMessage("High risk lifestyle - please consult a healthcare professional.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateScore();
  };

  return (
    <div className="container mb-3">
      <h2 className="mb-4 mt-3 text-center text-primary">Lifestyle Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label htmlFor="exerciseFrequency" className="form-label">
            How often do you engage in physical exercise?
          </label>
          <select
            className="form-select"
            id="exerciseFrequency"
            value={formData.exerciseFrequency}
            onChange={handleChange}
          >
            <option value="Daily">Daily</option>
            <option value="Several times a week">Several times a week</option>
            <option value="Once a week">Once a week</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="sleepDuration" className="form-label">
            How many hours of sleep do you get on average each night?
          </label>
          <select
            className="form-select"
            id="sleepDuration"
            value={formData.sleepDuration}
            onChange={handleChange}
          >
            <option value="Less than 4 hours">Less than 4 hours</option>
            <option value="4-5 hours">4-5 hours</option>
            <option value="6-7 hours">6-7 hours</option>
            <option value="8-9 hours">8-9 hours</option>
            <option value="More than 9 hours">More than 9 hours</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="smokingHabits" className="form-label">
            Do you smoke?
          </label>
          <select
            className="form-select"
            id="smokingHabits"
            value={formData.smokingHabits}
            onChange={handleChange}
          >
            <option value="Yes, regularly">Yes, regularly</option>
            <option value="Yes, occasionally">Yes, occasionally</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="alcoholConsumption" className="form-label">
            How often do you consume alcohol?
          </label>
          <select
            className="form-select"
            id="alcoholConsumption"
            value={formData.alcoholConsumption}
            onChange={handleChange}
          >
            <option value="Daily">Daily</option>
            <option value="Several times a week">Several times a week</option>
            <option value="Once a week">Once a week</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="mentalWellnessPractices" className="form-label">
            Do you engage in any mental wellness practices (e.g., meditation, mindfulness)?
          </label>
          <select
            className="form-select"
            id="mentalWellnessPractices"
            value={formData.mentalWellnessPractices}
            onChange={handleChange}
          >
            <option value="Yes, regularly">Yes, regularly</option>
            <option value="Yes, occasionally">Yes, occasionally</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="socialConnections" className="form-label">
            How often do you connect socially with others (friends, family, etc.)?
          </label>
          <select
            className="form-select"
            id="socialConnections"
            value={formData.socialConnections}
            onChange={handleChange}
          >
            <option value="Daily">Daily</option>
            <option value="Several times a week">Several times a week</option>
            <option value="Once a week">Once a week</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="screenTime" className="form-label">
            How many hours do you spend in front of a screen each day (TV, computer, phone, etc.)?
          </label>
          <select
            className="form-select"
            id="screenTime"
            value={formData.screenTime}
            onChange={handleChange}
          >
            <option value="Less than 2 hours">Less than 2 hours</option>
            <option value="2-4 hours">2-4 hours</option>
            <option value="4-6 hours">4-6 hours</option>
            <option value="6+ hours">6+ hours</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Calculate Health Score
        </button>
      </form>

      {score !== null && (
        <div className="mt-4 p-3 bg-light rounded">
          <h3 className="text-center">Your Health Score: {score}/70</h3>
          <p className="text-center lead">{message}</p>
          <div className="progress mt-3">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${(score / 70) * 100}%` }}
              aria-valuenow={score}
              aria-valuemin="0"
              aria-valuemax="70"
            >
              {Math.round((score / 70) * 100)}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifestyleSurvey;