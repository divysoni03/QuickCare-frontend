import React, { useState } from "react";

const MentalHealthSurvey = () => {
  const [formData, setFormData] = useState({
    stressLevel: "Always",
    physicalActivity: "Never",
    socialInteraction: "Never",
    supportSystem: "No",
    moodChanges: "Daily",
    feelingsOfAnxiety: "Yes",
    feelingsOfSadness: "Yes",
    concentration: "Yes",
    stressManagement: "No",
    overwhelmedFeelings: "Yes",
    selfCare: "No",
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

    // Scoring criteria
    const scores = {
      stressLevel: {
        "Never": 10,
        "Rarely": 8,
        "Sometimes": 6,
        "Often": 3,
        "Always": 0
      },
      physicalActivity: {
        "Never": 0,
        "Rarely": 3,
        "Once a week": 5,
        "Several times a week": 8,
        "Daily": 10
      },
      socialInteraction: {
        "Never": 0,
        "Rarely": 3,
        "Once a week": 5,
        "Several times a week": 8,
        "Daily": 10
      },
      supportSystem: {
        "No": 0,
        "Yes": 10
      },
      moodChanges: {
        "Never": 10,
        "Rarely": 8,
        "Once a week": 5,
        "Several times a week": 3,
        "Daily": 0
      },
      feelingsOfAnxiety: {
        "No": 10,
        "Yes": 0
      },
      feelingsOfSadness: {
        "No": 10,
        "Yes": 0
      },
      concentration: {
        "No": 10,
        "Yes": 0
      },
      stressManagement: {
        "No": 0,
        "Yes": 10
      },
      overwhelmedFeelings: {
        "No": 10,
        "Yes": 0
      },
      selfCare: {
        "No": 0,
        "Yes": 10
      }
    };

    // Calculate total score
    Object.entries(formData).forEach(([key, value]) => {
      totalScore += scores[key][value];
    });

    setScore(totalScore);
    
    // Determine mental health status
    if (totalScore >= 90) setMessage("Excellent mental health! Keep maintaining these habits! 🌟");
    else if (totalScore >= 70) setMessage("Good mental health, but some areas could use attention 💪");
    else if (totalScore >= 50) setMessage("Moderate mental health - consider implementing more support strategies");
    else setMessage("Seek professional help - your mental health needs attention");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateScore();
  };

  return (
    <div className="container mb-3">
      <h2 className="mb-4 mt-3 text-center text-primary">
        Mental Health Survey
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label htmlFor="stressLevel" className="form-label">
            How often do you feel stressed?
          </label>
          <select
            className="form-select"
            id="stressLevel"
            value={formData.stressLevel}
            onChange={handleChange}
          >
            <option value="Always">Always</option>
            <option value="Often">Often</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="physicalActivity" className="form-label">
            How often do you engage in physical activity?
          </label>
          <select
            className="form-select"
            id="physicalActivity"
            value={formData.physicalActivity}
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
          <label htmlFor="socialInteraction" className="form-label">
            How often do you engage in social interactions (friends, family, etc.)?
          </label>
          <select
            className="form-select"
            id="socialInteraction"
            value={formData.socialInteraction}
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
          <label htmlFor="supportSystem" className="form-label">
            Do you feel you have a good support system (friends, family, etc.)?
          </label>
          <select
            className="form-select"
            id="supportSystem"
            value={formData.supportSystem}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="moodChanges" className="form-label">
            How often do you experience significant mood changes?
          </label>
          <select
            className="form-select"
            id="moodChanges"
            value={formData.moodChanges}
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
          <label htmlFor="feelingsOfAnxiety" className="form-label">
            Do you often feel anxious or nervous?
          </label>
          <select
            className="form-select"
            id="feelingsOfAnxiety"
            value={formData.feelingsOfAnxiety}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="feelingsOfSadness" className="form-label">
            Do you often feel sad or hopeless?
          </label>
          <select
            className="form-select"
            id="feelingsOfSadness"
            value={formData.feelingsOfSadness}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="concentration" className="form-label">
            Do you have trouble concentrating on tasks?
          </label>
          <select
            className="form-select"
            id="concentration"
            value={formData.concentration}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="stressManagement" className="form-label">
            Do you feel confident in your ability to manage stress?
          </label>
          <select
            className="form-select"
            id="stressManagement"
            value={formData.stressManagement}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="overwhelmedFeelings" className="form-label">
            Do you feel overwhelmed by daily responsibilities?
          </label>
          <select
            className="form-select"
            id="overwhelmedFeelings"
            value={formData.overwhelmedFeelings}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="selfCare" className="form-label">
            Do you practice self-care regularly (e.g., relaxation, hobbies)?
          </label>
          <select
            className="form-select"
            id="selfCare"
            value={formData.selfCare}
            onChange={handleChange}
          >
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
          <h3 className="text-center">Your Mental Health Score: {score}/110</h3>
          <p className="text-center lead">{message}</p>
          <div className="progress mt-3">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: `${(score / 110) * 100}%` }}
              aria-valuenow={score}
              aria-valuemin="0"
              aria-valuemax="110"
            >
              {Math.round((score / 110) * 100)}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentalHealthSurvey;