import { Link } from 'react-router-dom';


const DoctorCard = () => {
  return (
    <div className="card shadow-sm p-3 mb-3 ms-5 mt-5 me-3 bg-white rounded" style={{width:"26rem"  }}>
      <div className="d-flex align-items-center mb-3">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dr. (Prof.) Manoj Agarwala, a dermatologist, standing in front of a bookshelf"
          className="rounded-circle mr-4"
          style={{ width: "8rem", height: "8rem" }}
        />
        <div className="text-right ml-1 p-3 pb-0">
          <p className="text-primary mb-1" style={{ fontSize: "1rem" }}>Dermatologist</p>
          <p className="font-weight-bold mb-1" style={{ color: "#1f2937", fontSize: "1.125rem" }}>Dr. (Prof.) Manoj Agarwala</p>
          <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}><b>Experience:</b> 15+ years</p>
        </div>
      </div>
      <p className="text-warning font-weight-medium mb-3">Young Investigator Award</p>
      <p className="text-secondary">
        Dr. Agarwala is a well-known name in the field of
        <Link to="" className="text-primary" style={{ textDecoration: "none" }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}>
          dermatology
        </Link>
        and cosmetology. An alumnu...
      </p>
      <Link to="" className="btn btn-outline-warning rounded-pill">
        View in Detail
      </Link>
    </div>
  );
};

export default DoctorCard;