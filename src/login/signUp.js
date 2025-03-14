import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

export default function Signup({ setMismatch }) {

    const [isVerified, setIsVerified] = useState(false);
    const [otp, setOtp] = useState("");

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone:"",
        password: "",
        confirmPassword: ""
    });

    const { name, username, email, phone, password, confirmPassword } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const getOTP = (e) => {
        setOtp(e.target.value);
        console.log(otp)
    };

    const sendOTP = async () => {
        const result = await axios.post(`http://localhost:8080/api/otp/send?email=${email}`);

        console.log(result)
        console.log(result.data)
        
        if (result.data === "success") {
            alert("OTP sent successfully!");
        } else {
            alert("Error: sending OTP, please try again!");
        }
    };
    
    // const OTP = {
    //     "otp":`${otp}`,
    //     "email":`${email}`
    // };

    const verifyOTP = async () => {
        const result = await axios.post(`http://localhost:8080/api/otp/verify?email=${email}&otp=${otp}`);
        console.log(result)
        console.log(result.data)

        if (result.data === "invalid") {
            alert("Invalid OTP, please try again!");
        }
        setIsVerified(true);
    };
    

    const onSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match before submitting
        if (password !== confirmPassword) {
            setMismatch(true); // setting the value true to display error
            const timeOut = setTimeout(() => {
                setMismatch(false); //setting the value false 
            }, 3000);

            return () => clearTimeout(timeOut);
        }

        await axios.post('http://localhost:8080/api/signUp', user);
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="text-center mb-4">Sign Up</h2>

                <form onSubmit={onSubmit}>
                    {/* Name Field */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingName"
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            placeholder="Enter Name"
                            required
                        />
                        <label htmlFor="floatingName">Name</label>
                    </div>

                    {/* Username Field */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingUsername"
                            name="username"
                            value={username}
                            onChange={onInputChange}
                            placeholder="Enter Username"
                            required
                        />
                        <label htmlFor="floatingUsername">Username</label>
                    </div>

                    {/* Email Field */}
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            placeholder="name@example.com"
                            required
                        />
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>
                    {/* phone number */}
                    <div className="form-floating mb-3">
                        <input
                            type="phone"
                            className="form-control"
                            id="floatingPhone"
                            name="phone"
                            value={phone}
                            onChange={onInputChange}
                            placeholder="name@example.com"
                            required
                        />
                        <label htmlFor="floatingEmail">phone</label>
                    </div>

                    {/* Password Field */}
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            placeholder="Enter Password"
                            required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingConfirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={onInputChange}
                            placeholder="Confirm Password"
                            required
                        />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>

                    <div className="form-floating mb-3 d-flex flex-col gap-3 ">
                        
                        <input
                            type="text"
                            className="form-control"
                            id="floatingOTP"
                            name="OTP"
                            onChange={getOTP}
                            placeholder="OTP"
                            required
                        />
                        <label htmlFor="floatingName">OTP</label> 
                    
                    
                        <button className="btn btn-primary d-flex align-item-center" style={{ width:"10rem", height:"2.5rem"}} onClick={sendOTP}>Get otp</button>
                        <button className="btn btn-outline-primary d-flex align-item-center" style={{ width:"12rem", height:"2.5rem"}} onClick={verifyOTP}>Verify otp</button>
                        
                    </div>

                    {/* Buttons */}
                    <div className="text-center">
                        <>
                            {isVerified ? (
                                <button type="submit" className="btn btn-primary px-3">Sign Up</button>
                            ):(
                                <button type="button" class="btn btn-primary" disabled>Sign Up</button>
                            )}
                        </>
                        
                        <Link className="btn btn-outline-danger mx-3 px-3" to="/">Cancel</Link>
                    </div>

                    <div className='text-center mt-3'>
                        <Link className='text' to="/login">Already have account, Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );

}
