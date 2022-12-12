import React from "react";
import AllReviews from "../../components/All Reviews/AllReviews";
import Navbar from "../../components/navbar/Navbar";
import SingleProfile from "../../components/Single Profile/SingleProfile";
import TopNav from "../../components/top nav/TopNav";
import ProfileFAQ from "../../components/profile faq/ProfileFAQ";
import SimilarWedding from "../../components/Similar wedding/SimilarWedding";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";
import { useRef } from "react";

const Profile = () => {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const reviewsRef = useRef(null);

  const scrollSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="photographer__section bg-sectionBg-900 overflow-x-hidden h-full">
      <TopNav />
      <Navbar />
      <SingleProfile
        scroll={scrollSection}
        project={projectRef}
        about={aboutRef}
        review={reviewsRef}
      />
      <AllReviews />
      <ProfileFAQ />
      <SimilarWedding />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Profile;
