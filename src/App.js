import React, { useState , useEffect} from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./login/signUp.js";
import Login from "./login/Login.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Navbar from "./components/Navbar"; // Import Navbar
import ReportUpload from "./reportUpload/ReportUpload.js";
import DoctorCard from "./doctors/DoctorCard.js";
import ShowDoctorCard from "./doctors/ShowDoctor.js"; // import ShowDoctorCard
import HealthSurvey from "./Surveys/HealthSurvey.js";
import MentalHealthSurvey from "./Surveys/MentalHealth.js";
import LifestyleSurvey from "./Surveys/LifeStyle.js";
import PatientForm from "./doctors/RequestForm.js"; 

import RequestHistoryUser from "./components/RequestHistoryUser.js";
import RequestHistoryDoc from "./components/RequestHistoryDoc.js";

import Footer from "./components/Footer.js";
import AdminDashboard from "./components/AdminDashboard.js";
import AdminLogin from "./login/AdminLogin.js";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // useState for login flag
  
  const [mismatchAlert, setMismatch] = useState(false); // for triggering
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [loginMsg, setLoginMsg] = useState(false);

  useEffect(()=> {
    const loggedIn = localStorage.getItem('isLoggedIn') == 'true';
    setIsLoggedIn(loggedIn);
  }, []) // useEffect to check if user is logged in

  return (
    <div className="App">
      <Router>

        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> {/* Passing function and current value */}
        
        {mismatchAlert ? (
          <div class="alert alert-danger position-fixed top-10 end-0 z-1" role="alert">
            PassWord Doesn't Match please try again.
          </div>
        ):(<></>)}

        {invalidLogin ? (
          <div class="alert alert-danger position-fixed top-10 end-0 z-1" role="alert">
            Invalid username or password, please try again!
          </div>
        ):(<></>)}

        {loginMsg ? (
          <div class="alert alert-success position-fixed top-10 end-0 z-1" role="alert">
            Login Successfully Done !
          </div>
        ):(<></>)}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup setMismatch={setMismatch}/>} />
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setInvalidLogin={setInvalidLogin} setLoginMsg={setLoginMsg}/>} /> {/*passing function to login page so when we login the state of login flag can be changed*/}
          <Route exact path="/upload-report" element={< ReportUpload/>} />
          <Route exact path="/doctors" element={<DoctorCard/>}/>
          <Route exact path="/doctor-details/:id" element={<ShowDoctorCard/>}/>
          <Route exact path="/request-form/:doctorId" element={<PatientForm/>}/>
          <Route exact path="/health-survey" element={<HealthSurvey/>}/>
          <Route exact path="/mental-health-survey" element={<MentalHealthSurvey/>}/>
          <Route exact path="/lifestyle-survey" element={<LifestyleSurvey/>}/>
          
          <Route exact path="/requestHistoryUser" element={<RequestHistoryUser/>}/>
          <Route exact path="/requestHistoryDoc" element={ <RequestHistoryDoc/>}/>

          <Route exact path="/adminLogin" element={ <AdminLogin setIsLoggedIn={setIsLoggedIn} setInvalidLogin={setInvalidLogin} setLoginMsg={setLoginMsg}/> } />
          <Route exact path="/adminDashboard" element={ <AdminDashboard /> } />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;