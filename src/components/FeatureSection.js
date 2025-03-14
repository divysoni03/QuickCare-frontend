import React from "react";

const FeaturesSection = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-12 col-md-3 mb-4">
          <div className="border p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4413/4413865.png"
              alt="Confidential"
              className="mb-3"
              width="60"
            />
            <h5 className="fw-bold">100% Confidential</h5>
            <p>
              All advice & consultations are completely confidential. You can
              also delete chats whenever you want.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4">
          <div className="border p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1904/1904425.png"
              alt="Certified"
              className="mb-3"
              width="60"
            />
            <h5 className="fw-bold">Certified Doctors</h5>
            <p>
              We offer quality healthcare through our network of certified and
              experienced doctors.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4">
          <div className="border p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2989/2989972.png"
              alt="Convenience"
              className="mb-3"
              width="60"
            />
            <h5 className="fw-bold">Convenience</h5>
            <p>
              Forget the hassle of long queues and rush hour. Seek expert
              opinion anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4">
          <div className="border p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2331/2331949.png"
              alt="Cost Effective"
              className="mb-3"
              width="60"
            />
            <h5 className="fw-bold">Cost Effective</h5>
            <p>
            We offer reliable, budget-friendly services without compromising on exceptional quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
