import React from "react";
import Accordion from "../components/Accordion";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import TrustedSchools from "../components/TrustedSchools";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustedSchools />
      <Products />
      {/* <Testimonials /> */}
      <Accordion />
    </div>
  );
};

export default HomePage;
