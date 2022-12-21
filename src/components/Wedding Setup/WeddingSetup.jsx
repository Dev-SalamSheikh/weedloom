import React from "react";
import Copyright from "../Footer/copyright/Copyright";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import TopNav from "../top nav/TopNav";
import WeddingSetupBanner from "./WeddingSetupBanner";
import WeddingSetupContent from "./WeddingSetupContent";

const WeddingSetup = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <WeddingSetupBanner />
      <WeddingSetupContent />
      <Footer />
      <Copyright />
    </div>
  );
};

export default WeddingSetup;
