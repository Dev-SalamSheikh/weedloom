import React from "react";
import ContactBanner from "../../components/contact banner/ContactBanner";
import ContactCard from "../../components/contact card/ContactCard";
import ContactForm from "../../components/Contact Form/ContactForm";
import GoogleMap from "../../components/google map/GoogleMap";
import Navbar from "../../components/navbar/Navbar";
import TopNav from "../../components/top nav/TopNav";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";

const Contact = () => {
  return (
    <div className="contact_us bg-sectionBg-900 overflow-x-hidden h-full">
      <TopNav />
      <Navbar />
      <ContactBanner background="https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <ContactCard />
      <ContactForm />
      <GoogleMap />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Contact;
