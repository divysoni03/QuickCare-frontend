import React from "react";
import HeroSection from "./HeroSection";
import Surveys from "./Surveys";
import DoctorSlider from "./DoctorSlider";
import FAQ from "./FAQ";
import FeaturesSection from "./FeatureSection";

const Home = () => {
  return (
    <div className="container">
      <HeroSection />
      <Surveys />
      <DoctorSlider />
      <FeaturesSection />
      <FAQ />
    </div>
  );
};
export default Home;
