import React from "react";

const FAQ = () => {
  return (
    <div className="container my-5 ">
      <h2 className="mb-4 mt-3 text-center text-primary">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How can I upload my medical reports?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-start">
              You need to first log in to your account, then go to the report
              upload page. Choose your file and click "Continue" to upload your
              report successfully.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How long does it take to get a doctor's consultation?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-start">
              Our doctors usually review reports and provide consultation within
              24-48 hours.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Are the doctors on your platform qualified?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-start">
              Yes, all our doctors are certified professionals with years of
              experience in their respective fields.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Is my medical data secure?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-start">
              Absolutely! We use advanced encryption to ensure your medical data
              remains private and confidential.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Can I take multiple surveys on your platform?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-start">
              Yes, you can participate in various surveys related to mental
              health, lifestyle, and overall well-being.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              How can I contact customer support?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-start">
              You can contact our customer support team via email at
              support@example.com or call us at +1 (800) 123-4567.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              What payment methods do you accept?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-start">
              We accept all major credit cards, PayPal, and bank transfers.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Can I get a refund if I'm not satisfied with the service?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-start">
              Yes, we offer a 30-day money-back guarantee if you are not
              satisfied with our service.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
