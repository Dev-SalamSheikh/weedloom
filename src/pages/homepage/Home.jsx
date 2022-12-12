import Banner from "../../components/Banner/Banner";
import WeddingCategory from "../../components/category/WeddingCategory";
import Explore from "../../components/explore/Explore";
import FeatureVendors from "../../components/featured vendors/FeatureVendors";
import Copyright from "../../components/Footer/copyright/Copyright";
import Footer from "../../components/Footer/Footer";
import GalleryLook from "../../components/gallery/GalleryLook";
import HowItWorks from "../../components/how it works/HowItWorks";
import Inhouse from "../../components/inhourse service/Inhouse";
import LatestBlogs from "../../components/Latest Blogs/LatestBlogs";
import Navbar from "../../components/navbar/Navbar";
import PopularSearch from "../../components/popular search/PopularSearch";
import PopularVenue from "../../components/popular venue/PopularVenue";
import TopNav from "../../components/top nav/TopNav";
// import WedSafe from "../../components/wedd safe/WedSafe";
import Wstories from "../../components/wedding stories/Wstories";

const Home = () => {
  return (
    <div className="home bg-sectionBg-900 overflow-x-hidden h-full">
      <TopNav />
      <Navbar />
      <Banner />
      <HowItWorks />
      {/* <WedSafe /> */}
      <Explore />
      <PopularVenue />
      <PopularSearch />
      <WeddingCategory />
      <Inhouse />
      <Wstories />
      <GalleryLook />
      <FeatureVendors />
      <LatestBlogs heading="Latest Blogs" />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
