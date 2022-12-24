import Copyright from "../Footer/copyright/Copyright";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import TopNav from "../top nav/TopNav";
import MessageContainer from "../Vendor Profile/Messages/MessageContainer";

const UserMessages = () => {
  return (
    <div className="bg-sectionBg-900">
      <TopNav />
      <Navbar />
      <div className="container w-full lg:w-7/12 mx-auto my-8">
        <MessageContainer border={true} user={true} />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default UserMessages;
