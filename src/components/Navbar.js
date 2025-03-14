import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.jpg';

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("phone");
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f8f9fa", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{width:"10em"}}/>
        </Link>
 
 
        {/* Navbar Toggler (for small screens) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <Link className="btn btn-outline-primary m-2" to="/">Home</Link>
            </li>
            
            {(localStorage.getItem("role")) === 'user' ? (
              <li className="nav-item">
                <Link className="btn btn-outline-primary m-2" to="/doctors">Our Doctors</Link>  
              </li>
            ):(
              <></>
            )}
            
            {(localStorage.getItem("role") === 'user') ? (
              <li className="nav-item">
                <Link className="btn btn-outline-primary m-2" to="/requestHistory">View History</Link>
              </li>
            ):(<></>)}

            {(localStorage.getItem("role")==='doctor')?(
              <li className="nav-item">
                <Link className="btn btn-outline-primary m-2" to="/requestHistoryDoc">View Requests</Link>
              </li>
            ):(<></>)}

            {(localStorage.getItem("role")==='user')?(
              <li className="nav-item">
                <Link className="btn btn-outline-primary m-2" to="/upload-report">Upload Report</Link>
              </li>
            ):(<></>)}  

            <li className="nav-item dropdown m-2">
              <button className="btn btn-light dropdown-toggle text-dark"role="button" data-bs-toggle="dropdown">
                General Survey
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/health-survey"> Health Survey</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/mental-health-survey"> Mental Health Survey</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/lifestyle-survey">Life Style Survey</Link></li>
              </ul>
            </li>

      
            <li className="nav-item d-flex align-items-center">
              {!isLoggedIn ? (
                // <div className="d-flex">
                //   <Link className="btn btn-primary mx-1" to="/login">Login</Link>
                //   <Link className="btn btn-outline-primary mx-1" to="/signUp">Sign Up</Link>
                // </div>

                  <div class="btn-group" role="group" aria-label="Basic example">
                   <Link className="btn btn-primary" to="/login">Login</Link>
                   <Link className="btn btn-outline-primary" to="/signUp">Sign Up</Link>
                  </div>
              ) : (
                <>
                <span className='navbar-text mx-2'>{localStorage.getItem('username')}</span>
                <button className="btn btn-danger mx-1" onClick={handleLogout}>Logout</button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../assets/images/logo.png';

// export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const handleLogout = () => {
//     setIsLoggedIn(false); // Reset login state
//   };

//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid my-3">
//         <ul className="nav nav-pills justify-content-end align-items-center w-100">
//           <img src={logo} className="w-20 me-auto" alt="logo" />

//           <li className="nav-item">
//             <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="btn btn-outline-primary mx-1" to="/">Video call Doctor</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="btn btn-outline-primary mx-1" to="/">Report Reading</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="btn btn-outline-primary mx-1" to="/">Emergency Alert</Link>
//           </li>
//           <li className="nav-item dropdown mx-1">
//             <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button">
//               General Survey
//             </Link>
//             <ul className="dropdown-menu">
//               <li><Link className="dropdown-item" to="#">Mental Health Survey</Link></li>
//               <li><hr className="dropdown-divider" /></li>
//               <li><Link className="dropdown-item" to="#">Health Survey</Link></li>
//               <li><hr className="dropdown-divider" /></li>
//               <li><Link className="dropdown-item" to="#">Life Style Survey</Link></li>
//             </ul>
//           </li>

//           {!isLoggedIn ? (
//             <>
//               <Link className="btn btn-primary mx-1" to="/login">Login</Link>
//               <Link className="btn btn-primary mx-1" to="/signUp">Sign Up</Link>
//             </>
//           ) : (
//             <button className="btn btn-danger mx-1" onClick={handleLogout}>Logout</button>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }