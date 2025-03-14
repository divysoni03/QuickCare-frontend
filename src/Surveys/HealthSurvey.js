import React, { useState } from "react";

const HealthSurvey = () => {
  const [score, setScore] = useState(0);

  const calculateScore = (formData) => {
    let totalScore = 0;

    // Assign scores based on user responses
    if (formData.chronicConditions === "No") totalScore += 10;
    if (formData.recentIllness === "No") totalScore += 10;
    if (formData.healthCheckups === "Annually") totalScore += 10;
    if (formData.medicationUsage === "No") totalScore += 10;
    if (formData.dietaryRestrictions === "No") totalScore += 5;
    if (formData.smoking === "No") totalScore += 10;
    if (formData.alcoholConsumption === "Never") totalScore += 10;
    if (formData.exerciseFrequency === "Daily") totalScore += 10;
    if (formData.sleepHabits === "7-8 hours") totalScore += 10;
    if (formData.stressLevel === "No") totalScore += 10;
    if (formData.mentalHealthSupport === "Yes") totalScore += 10;

    return totalScore;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      chronicConditions: formData.get("chronicConditions"),
      recentIllness: formData.get("recentIllness"),
      healthCheckups: formData.get("healthCheckups"),
      medicationUsage: formData.get("medicationUsage"),
      dietaryRestrictions: formData.get("dietaryRestrictions"),
      smoking: formData.get("smoking"),
      alcoholConsumption: formData.get("alcoholConsumption"),
      exerciseFrequency: formData.get("exerciseFrequency"),
      sleepHabits: formData.get("sleepHabits"),
      stressLevel: formData.get("stressLevel"),
      mentalHealthSupport: formData.get("mentalHealthSupport"),
    };

    const totalScore = calculateScore(data);
    setScore(totalScore);
  };

  const getHealthLevel = (score) => {
    if (score >= 90) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Fair";
    return "Poor";
  };

  return (
    <div className="container mb-3">
      <h2 className="mb-4 mt-3 text-center text-primary">Health Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label htmlFor="chronicConditions" className="form-label">
            Do you have any chronic health conditions?
          </label>
          <select className="form-select" id="chronicConditions" name="chronicConditions">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="recentIllness" className="form-label">
            Have you experienced any serious illness in the past year?
          </label>
          <select className="form-select" id="recentIllness" name="recentIllness">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="healthCheckups" className="form-label">
            How often do you visit a doctor for a health check-up?
          </label>
          <select className="form-select" id="healthCheckups" name="healthCheckups">
            <option value="Annually">Annually</option>
            <option value="Every few years">Every few years</option>
            <option value="Only when sick">Only when sick</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="medicationUsage" className="form-label">
            Are you currently taking any medications?
          </label>
          <select className="form-select" id="medicationUsage" name="medicationUsage">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="dietaryRestrictions" className="form-label">
            Do you have any dietary restrictions?
          </label>
          <select className="form-select" id="dietaryRestrictions" name="dietaryRestrictions">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="smoking" className="form-label">
            Do you smoke?
          </label>
          <select className="form-select" id="smoking" name="smoking">
            <option value="Yes, regularly">Yes, regularly</option>
            <option value="Yes, occasionally">Yes, occasionally</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="alcoholConsumption" className="form-label">
            How often do you consume alcohol?
          </label>
          <select className="form-select" id="alcoholConsumption" name="alcoholConsumption">
            <option value="Daily">Daily</option>
            <option value="Several times a week">Several times a week</option>
            <option value="Once a week">Once a week</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="exerciseFrequency" className="form-label">
            How often do you engage in physical activity?
          </label>
          <select className="form-select" id="exerciseFrequency" name="exerciseFrequency">
            <option value="Daily">Daily</option>
            <option value="Several times a week">Several times a week</option>
            <option value="Once a week">Once a week</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="sleepHabits" className="form-label">
            How many hours do you sleep on average each night?
          </label>
          <select className="form-select" id="sleepHabits" name="sleepHabits">
            <option value="Less than 5 hours">Less than 5 hours</option>
            <option value="5-6 hours">5-6 hours</option>
            <option value="7-8 hours">7-8 hours</option>
            <option value="More than 8 hours">More than 8 hours</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="stressLevel" className="form-label">
            Do you often experience stress in your daily life?
          </label>
          <select className="form-select" id="stressLevel" name="stressLevel">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="mentalHealthSupport" className="form-label">
            Do you have access to mental health support if needed?
          </label>
          <select className="form-select" id="mentalHealthSupport" name="mentalHealthSupport">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {score !== null && (
        <div className="mt-4 p-3 bg-light rounded">
          <h3 className="text-center">Your Health Score: {score}/100</h3>
          <h4 className="text-center">Health Level: {getHealthLevel(score)}</h4>
          <div className="progress mt-3">
            <div
              className={`progress-bar ${score >= 50 ? 'bg-success' : 'bg-danger'}`}
              role="progressbar"
              style={{ width: `${(score / 100) * 100}%` }}
              aria-valuenow={score}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {Math.round((score / 100) * 100)}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthSurvey;