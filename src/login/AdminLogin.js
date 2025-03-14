import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin({setIsLoggedIn, setInvalidLogin, setLoginMsg }) {

    let navigate = useNavigate();
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const data = {
      "username": username,
      "password": password
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8080/api/admin/adminLogin", data);
    
        if (!response) { 
          setInvalidLogin(true);
          setTimeout(() => setInvalidLogin(false), 3000);
          setPassword("");
          return;
        } else {
          setLoginMsg(true);
          setTimeout(() => setLoginMsg(false), 3000);
          setIsLoggedIn(true);

          localStorage.setItem("username", username)
          localStorage.setItem("role", 'admin');
    
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      } 
    };
  
  return (
    <div className="login-container">
        <div className="login-card">
          <h2 className="text-center mb-4">Admin Login</h2>
          <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingUsername"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                required
              />
              <label htmlFor="floatingUsername">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-3">Login</button>
              <Link className="btn btn-outline-danger mx-3 px-3" to="/">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
  );
}
