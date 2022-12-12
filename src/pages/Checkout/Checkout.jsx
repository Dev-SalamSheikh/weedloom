import React from "react";
import TopNav from "../../components/top nav/TopNav";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";
import CheckoutContent from "../../components/checkout content/CheckoutContent";

const Checkout = () => {
  return (
    <div className="checkout overflow-hidden h-auto">
      <TopNav />
      <Navbar />
      <CheckoutContent />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Checkout;
