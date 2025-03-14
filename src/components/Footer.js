import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".hoverable-link");

    const handleMouseOver = (e) => {
      e.target.style.textDecoration = "underline";
    };

    const handleMouseOut = (e) => {
      e.target.style.textDecoration = "none";
    };

    links.forEach(link => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    // Cleanup event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <footer style={{ backgroundColor: "#c4d8e3" }} className="text-center text-lg-start bg-body-primary text-muted p-1">
      {/* Social Media Section */}

      {/* Links Section */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" style={{ color: "black" }}></i>medTech - quick care
              </h6>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}> About us</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Contact us</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Business Partnership</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Become a Health Partner</a></p>
            </div>

            {/* Our Services */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4"> PRODUCTS</h6>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Report Analysis</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Systomps Analysis</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Doctor consultation</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Records</a></p>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>QuickCare</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Settings</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Reports</a></p>
              <p><a href="#!" className="text-reset hoverable-link" style={{ textDecoration: "none" }}>Help</a></p>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3" style={{ color: "black" }}></i> GEC Gandhinagar, Gujrat</p>
              <p><i className="fas fa-envelope me-3" style={{ color: "black" }}></i> patelpalak0905@gmail.com</p>
              <p><i className="fas fa-phone me-3" style={{ color: "black" }}></i> +91 7600192636</p>
              <p><i className="fas fa-print me-3" style={{ color: "black" }}></i> +91 9574266424</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 border-bottom">
        <div className="text-center">
          <span className="d-block mb-2">Get connected with us on social networks:</span>

          <a href="#" className="me-4">
            <i className="fab fa-facebook-f text-primary"></i>
          </a>
          <a href="#" className="me-4">
            <i className="fab fa-twitter text-info"></i>
          </a>
          <a href="#" className="me-4">
            <i className="fab fa-instagram" style={{ color: "purple" }}></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin text-primary"></i>
          </a>
          <a href="#" className="me-4">
            <i className="fab fa-github" style={{ color: "#333" }}></i>
          </a>
          <a href="#" className="me-4">
            <i className="fab fa-whatsapp" style={{ color: "green" }}></i>
          </a>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-2 mb-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © {new Date().getFullYear()} Copyright:
        <p className="text-reset fw-bold">medTech.com</p>
      </div>
    </footer>
  );
};

export default Footer;