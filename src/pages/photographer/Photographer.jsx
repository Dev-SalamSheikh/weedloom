import TopNav from "../../components/top nav/TopNav";
import Navbar from "../../components/navbar/Navbar";
import PMenu from "../../components/photographer menu/PMenu";
import WeedingPhotographer from "../../components/wedding photography/WeddingPhotographer";
import Faq from "../../components/faqs/Faq";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";

const Photographer = () => {
  return (
    <div className="photographer__section bg-sectionBg-900 overflow-x-hidden h-full">
      <TopNav />
      <Navbar />
      <PMenu />
      <WeedingPhotographer />
      <Faq />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Photographer;
