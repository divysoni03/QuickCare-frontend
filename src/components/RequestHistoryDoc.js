import React, { useState, useEffect } from "react";
import axios from 'axios';

const RequestHistoryDoc = () => {

  const [reportData, setReportData] = useState([]);

  useEffect(()=>{
    loadRequests();
  },[]);

  const loadRequests = async ()=>{
    const result = await axios.get(`http://localhost:8080/api/request/doctor/getRequests?doctorId=${1}`); // need change in database
    
    console.log(result);

    try {
      setReportData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "PENDING":
        return "badge bg-warning text-dark";
      case "APPROVED":
        return "badge bg-primary";
      case "COMPLETED":
        return "badge bg-success";
      default:
        return "badge bg-danger";
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4 text-primary">Your Report History</h3>
      <table className="table table-bordered">
        <thead style={{ backgroundColor: "#e9ecef" }}>
          <tr>
            <th>No.</th>
            <th>UserId</th>
            <th>DoctorId</th>
            <th>Symptoms</th>
            <th>Status</th>
            <th>payment</th>
            <th>report</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report, index) => (
            <tr key={report.id}>
              <td>{index + 1}</td>
              <td>{report.id.userId}</td>
              <td>{report.id.doctorId}</td>
              <td>
                <span className={getStatusBadgeClass(report.status)}>
                  {report.status}
                </span>
              </td>
              <td>{report.symptoms}</td>
              <td>{report.payment ? (`${report.payment}`):("incomplete")}</td>
              <td>{report.report ? (`${report.report}`):("not available")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestHistoryDoc;
