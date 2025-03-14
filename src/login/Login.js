import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
export default function Login({ setIsLoggedIn, setInvalidLogin, setLoginMsg }) {
    let navigate = useNavigate();
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const data = {
      "userName": username,
      "password": password
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8080/api/login", data);
        console.log(response);
    
        if (!response.data) { 
          setInvalidLogin(true);
          setTimeout(() => setInvalidLogin(false), 3000);
          setPassword("");
          return;
        } else if(response.data){
          setLoginMsg(true);
          setTimeout(() => setLoginMsg(false), 3000);
          setIsLoggedIn(true); // Set user as logged in
          
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("phone", response.data.phone);
          localStorage.setItem("role", 'user');
    
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      } 
    };
  
    return (
      <div className="login-container">
        <div className="login-card">
          <h2 className="text-center mb-4">Login</h2>
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
            <div className="text-center mt-3 mb-2">
              <Link className="text" to="/signUp">Don't have an account? Sign Up</Link>
            </div>
            <div className="text-center">
              <Link className="text" to="/adminLogin">Admin</Link>{" , "}
              <Link className="text" to="/">Doctor</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
  