import React, { useState } from "react";

const AdminDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Embedded CSS for tooltip hover on collapsed sidebar */}
      <style>
        {`
          /* Sidebar width based on state */
          .sidebar-expanded {
            width: 250px;
          }
          .sidebar-collapsed {
            width: 60px;
          }
          .sidebar {
            transition: width 0.3s ease;
            position: relative;
          }
          /* In collapsed mode, hide nav text by default */
          .sidebar-collapsed .nav-link .nav-text {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            left: 70px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #BBDEFB;
            color: #000;
            padding: 4px 8px;
            border-radius: 3px;
            white-space: nowrap;
            z-index: 10;
            transition: opacity 0.3s ease;
          }
          /* Show text on hover (tooltip effect) */
          .sidebar-collapsed .nav-link:hover .nav-text {
            opacity: 1;
            visibility: visible;
          }
        `}
      </style>

      <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="row vh-100">
          {/* Sidebar */}
          <div
            className={`p-3 border-end sidebar ${
              isCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
            }`}
            style={{ backgroundColor: "#BBDEFB" }}
          >
            {/* Toggle Button */}
            <button
              className="btn btn-sm btn-outline-dark mb-3"
              onClick={toggleSidebar}
            >
              <i
                className={`fas ${
                  isCollapsed ? "fa-arrow-right" : "fa-arrow-left"
                }`}
              ></i>
            </button>

            {/* Admin Profile (only show when expanded) */}
            {!isCollapsed && (
              <div className="mb-4 text-center fw-bold">
                <h5 className="text-dark fs-4">Nick Gonzalez (Admin)</h5>
              </div>
            )}

            <nav className="nav flex-column">
              <a className="nav-link text-dark active" href="#">
                <i className="fas fa-tachometer-alt me-2"></i>
                <span className="nav-text" style={{ fontSize: "1.2rem" }}>
                  {!isCollapsed ? "Dashboard" : "Dashboard"}
                </span>
              </a>
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-user-md me-2"></i>
                <span className="nav-text" style={{ fontSize: "1.2rem" }}>
                  {!isCollapsed ? "All Doctors" : "All Doctors"}
                </span>
              </a>
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-user-injured me-2"></i>
                <span className="nav-text" style={{ fontSize: "1.2rem" }}>
                  {!isCollapsed ? "All Patients" : "All Users"}
                </span>
              </a>
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-file-alt me-2"></i>
                <span className="nav-text" style={{ fontSize: "1.2rem" }}>
                  {!isCollapsed ? "Reports" : "Requests"}
                </span>
              </a>

              <a className="nav-link text-dark" href="#">
                <i className="fas fa-sign-out-alt me-2"></i>
                <span className="nav-text" style={{ fontSize: "1.2rem" }}>
                  {!isCollapsed ? "Logout" : "Logout"}
                </span>
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="col p-4">
            <h2 className="text-dark">Admin Dashboard</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-primary">
                  <tr>
                    <th>Doctor_id</th>
                    <th>User_id</th>
                    <th>Status</th>
                    <th>Symptoms</th>
                    <th>Payment_id</th>
                    <th>Report_id</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>
                    <td>Cough, Fever, Headache, Vomiting</td>
                    <td>NULL</td>
                    <td>NULL</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>
                    <td>Cough, Vomiting, Weakness, Sneezing</td>
                    <td>NULL</td>
                    <td>NULL</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>
                    <td>Weakness, Fever, Headache, Vomiting</td>
                    <td>NULL</td>
                    <td>NULL</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>
                    <td>Cough, Fever, Headache, Vomiting</td>
                    <td>NULL</td>
                    <td>NULL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
