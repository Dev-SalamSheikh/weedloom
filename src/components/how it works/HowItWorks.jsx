import React from "react";
import SectionHeader from "../SectionHeader";
import HowIWCard from "./HowIWCard";

const HowItWorks = () => {
  return (
    <section className="my-20">
      <div className="how_it_works_content container mx-auto md:px-20 px-4">
        <SectionHeader text="How it Works?" />
        <div className="card_container mt-16">
          <HowIWCard />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
