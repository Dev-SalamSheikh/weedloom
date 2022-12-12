import React from "react";
import AllReviewsPage from "../../components/all review page/AllReviewsPage";
import Copyright from "../../components/Footer/copyright/Copyright";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TopNav from "../../components/top nav/TopNav";
import TotalReview from "../../components/total review/TotalReview";

const TotalReviews = () => {
  return (
    <div className="allReview bg-sectionBg-900 h-full">
      <TopNav />
      <Navbar />
      <AllReviewsPage />
      <TotalReview />
      <Footer />
      <Copyright />
    </div>
  );
};

export default TotalReviews;
