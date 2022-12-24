import Copyright from "../../components/Footer/copyright/Copyright";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TopNav from "../../components/top nav/TopNav";
import UserProfileContent from "../../components/user profile/UserProfileContent";
import UserBanner from "./UserBanner";

const UserProfile = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <UserBanner />
      <UserProfileContent />
      <Footer />
      <Copyright />
    </div>
  );
};

export default UserProfile;
