import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import SocialProof from "./sections/SocialProof";
import Invest from "./sections/Invest";
import Testimonial from "./sections/Testimonial";
import Register from "./sections/Register";
import Footer from "./sections/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="px-10">
        <SocialProof />
        <Invest />
      </div>
      <div className="max-md:px-2 px-10">
        <Testimonial />
      </div>
      <div className="px-10">
        <Register />
        <Footer />
      </div>
    </div>
  );
};

export default page;
