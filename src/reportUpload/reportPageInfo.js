import React from "react";

const ReportPageInfo = () => {
  return (
  <>

    <div className="d-flex justify-content-center mt-5">
      <div className="card mb-3 px-5 py-3 shadow" style={{ minWidth: "1200px" }}>
        <div className="row g-0 align-items-center">

          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="https://content.mymeds247.com/assets/images/health/How-It-Helps-You.jpg"
              className="img-fluid rounded-start"
              alt="how can it help"
              style={{
                maxHeight: "350px",
                maxWidth: "350px",
                objectFit: "contain",
              }}
            />
          </div>
          
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title mb-4 text-center">How It Helps You</h3>

              <h5 className="card-title text-start">→ Uncover hidden health patterns</h5>
              <p className="card-text">Go beyond basic results to detect potential health issues early on.</p>

              <h5 className="card-title text-start">→ Optimize treatment plans</h5>
              <p className="card-text">Work with your doctor to personalize medication or lifestyle changes based on your unique results.</p>

              <h5 className="card-title text-start">→ Gain peace of mind</h5>
              <p className="card-text">Get clear explanations of your lab results and address any concerns you may have.</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="container my-5">
      <h2 className="text-center mb-4">How It Works</h2>
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        
        <div className="card p-4 shadow text-center" style={{ width: "18rem" }}>
          <div
            className="img1 mb-3"
            style={{
              height: "100px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png')",
            }}
          ></div>
          <h4>Upload Your Report</h4>
          <p>Securely upload your lab report in a digital format.</p>
        </div>

        <div className="card p-4 shadow text-center" style={{ width: "18rem" }}>
          <div
            className="img2 mb-3"
            style={{
              height: "100px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/512/3774/3774299.png')",
            }}
          ></div>
          <h4>Get Expert Analysis</h4>
          <p>Our specialists carefully review your results.</p>
        </div>

        <div className="card p-4 shadow text-center" style={{ width: "18rem" }}>
          <div
            className="img3 mb-3"
            style={{
              height: "100px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://cdn3d.iconscout.com/3d/premium/thumb/report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-chart-graph-pack-business-icons-4818086.png?f=webp')",
            }}
          ></div>
          <h4>Receive Your Report</h4>
          <p>Get a detailed explanation of your lab results.</p>
        </div>
        
      </div>
    </div>

    <div className="container my-5">
      <h2 className="text-center mb-4">Benefits for You</h2>
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        
        <div className="card p-4 shadow text-center" style={{ width: "18rem" }}>
          <div
            className="img1 mb-3"
            style={{
              height: "100px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/512/2286/2286234.png')",
            }}
          ></div>
          <h4>Convenience</h4>
          <p>Analyze your lab reports anytime, anywhere, without leaving home.</p>
        </div>

        <div className="card p-4 shadow text-center" style={{ width: "18rem" }}>
          <div
            className="img2 mb-3"
            style={{
              height: "100px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13HUAnJxZA_NhkLvR_U0Ce2SuRjAXdfQ7RA&s')",
            }}
          ></div>
          <h4>Professional Support</h4>
          <p>Receive personalized guidance from healthcare experts.</p>
        </div>

        <div className="card p-4 shadow text-center" style={{ width: "18rem" }}>
          <div
            className="img3 mb-3"
            style={{
              height: "100px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://thumbs.dreamstime.com/b/feminism-vector-icon-isolated-white-background-outline-thin-line-feminism-icon-website-design-mobile-app-development-189434126.jpg')",
            }}
          ></div>
          <h4>Empowerment</h4>
          <p>Take an active role in your health journey with a clearer understanding of your body</p>
        </div>
        
      </div>
    </div>
  </>
  );
};

export default ReportPageInfo;
