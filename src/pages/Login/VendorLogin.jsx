import React from "react";
import TopNav from "../../components/top nav/TopNav";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";
import VendorLoginForm from "../../components/login logout form/VendorLoginForm";

const Signup = () => {
  return (
    <div className="signup h-full bg-sectionBg-900 overflow-hidden">
      <TopNav />
      <Navbar />
      <VendorLoginForm />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Signup;
