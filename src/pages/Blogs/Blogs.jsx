import React from "react";
import TopNav from "../../components/top nav/TopNav";
import Navbar from "../../components/navbar/Navbar";
import BlogsBanner from "../../components/Blogs Banner/BlogsBanner";
import BlogList from "../../components/blog list/BlogList";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";
import BlogExplore from "../../components/Blog Explore/BlogExplore";
import Instagram from "../../components/Instagram/Instagram";
import VendorSearch from "../../components/vendor search/VendorSearch";
import SubmitWedding from "../../components/Submit Wedding/SubmitWedding";

const Blogs = () => {
  return (
    <div className="blogs overflow-x-hidden h-screen">
      <TopNav />
      <Navbar />
      <BlogsBanner
        img1="https://images.pexels.com/photos/1024965/pexels-photo-1024965.jpeg?auto=compress&cs=tinysrgb&w=1600"
        article1="Home Grown Shoe Labels You Cannot Miss While Shopping For Your Bridal Shoes!"
        article2=" 60+ Arabic Bridal Mehndi Designs For The Ladies Who Want Something Unique!"
      />
      <BlogList />
      <BlogExplore />
      <VendorSearch />
      <Instagram />
      <SubmitWedding background="https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Blogs;
