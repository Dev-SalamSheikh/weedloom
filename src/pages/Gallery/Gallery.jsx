import React from "react";
import TopNav from "../../components/top nav/TopNav";
import Navbar from "../../components/navbar/Navbar";
import GalleryBanner from "../../components/Gallery Banner/GalleryBanner";
import GalleryGrid from "../../components/Gallery Grid/GalleryGrid";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";

const Gallery = () => {
  return (
    <div className="gallery__section bg-sectionBg-900 overflow-x-hidden h-full">
      <TopNav />
      <Navbar />
      <GalleryBanner
        bannerPhoto="https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=1600"
        time="1"
        photographer="Junaid Ashghar"
        album1="https://images.pexels.com/photos/1253370/pexels-photo-1253370.jpeg?auto=compress&cs=tinysrgb&w=1600"
        album2="https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=1600"
        album3="https://images.pexels.com/photos/1484494/pexels-photo-1484494.jpeg?auto=compress&cs=tinysrgb&w=1600"
        album4="https://images.pexels.com/photos/2049561/pexels-photo-2049561.jpeg?auto=compress&cs=tinysrgb&w=1600"
        more="50"
      />
      <GalleryGrid />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Gallery;
