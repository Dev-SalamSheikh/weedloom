import React from "react";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";
import Navbar from "../../components/navbar/Navbar";
import TopNav from "../../components/top nav/TopNav";
import VendorProfileContent from "../../components/Vendor Profile/VendorProfileContent";

const VendorProfile = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <VendorProfileContent />
      <Footer />
      <Copyright />
    </div>
  );
};

export default VendorProfile;
