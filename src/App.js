import Home from "./pages/homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photographer from "./pages/photographer/Photographer";
import Profile from "./pages/profile/Profile";
import Contact from "./pages/contact us/Contact";
import Blog from "./pages/Blog/Blog";
import Gallery from "./pages/Gallery/Gallery";
import Blogs from "./pages/Blogs/Blogs";
import TotalReviews from "./pages/all reviews/TotalReviews";
import Login from "./pages/Login/Login";
import Signup from "./pages/sign up/Signup";
import VendorLogin from "./pages/Login/VendorLogin";
import Checkout from "./pages/Checkout/Checkout";
import VendorProfile from "./pages/Vendor Profile/VendorProfile";
import InformationContent from "./components/Vendor Profile/InformationContent";
import MemberShip from "./components/Vendor Profile/MemberShip";
import VendorReviewsContainer from "./components/Vendor Profile/VendorReviewsContainer";
import ProfileAnalytics from "./components/Vendor Profile/ProfileAnalytics";
import Guidelines from "./components/guidelines/Guidelines";
import VendorPortfolio from "./components/Vendor Profile/VendorPortfolio";
import VendorProjectContent from "./components/Vendor Profile/VendorProjectContent";
import VendorProjects from "./components/Vendor Profile/VendorProjects";
import ImageUpload from "./components/Vendor Profile/ImageUpload";
import Settings from "./components/Vendor Profile/Settings";
import Banquets from "./components/Vendor Profile/Banquets";
import Menu from "./components/Vendor Profile/Menu";
import UploadImagetoMenu from "./components/Vendor Profile/UploadImagetoMenu";
import MenuContent from "./components/Vendor Profile/MenuContent";
import MessageContainer from "./components/Vendor Profile/Messages/MessageContainer";
import Chatbox from "./components/Vendor Profile/Messages/Chatbox";
import GetBackMsg from "./components/Vendor Profile/Messages/GetBackMsg";
import MobileMessage from "./components/Vendor Profile/Messages/MobileMessage";
import UserProfile from "./pages/user profile/UserProfile";
import UserSettings from "./components/user profile/UserSettings";
import UserFinalizeVendor from "./components/user profile/UserFinalizeVendor";
import UserShortlists from "./components/user profile/UserShortlists";
import UserLove from "./components/user profile/UserLove";
import UserChecklists from "./components/user profile/UserChecklists";
import WeddingSetup from "./components/Wedding Setup/WeddingSetup";
import ScrollToTop from "./ScrollToTop";
import UserMessages from "./components/user profile/UserMessages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="photographer">
              <Route index element={<Photographer />} />
              <Route path=":profile" element={<Profile />} />
            </Route>
          </Route>
          {/* Vendor Profile Routes */}
          <Route path="vendor/profile" element={<VendorProfile />}>
            <Route index element={<InformationContent />} />
            <Route path="projects" element={<VendorProjects />}>
              <Route index element={<VendorProjectContent />} />
              <Route path="portfolio" element={<VendorPortfolio />} />
              <Route path="image-upload" element={<ImageUpload />} />
            </Route>
            <Route path="membership" element={<MemberShip />} />
            <Route path="reviews" element={<VendorReviewsContainer />} />
            <Route path="analytics" element={<ProfileAnalytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="inbox" element={<MessageContainer />}>
              <Route index element={<GetBackMsg />} />
              <Route path=":id" element={<Chatbox />} />
            </Route>
            {/* For Mobile Message Route */}
            <Route path="mobilemessage/:id" element={<MobileMessage />} />
            <Route path="menu" element={<Menu />}>
              <Route index element={<MenuContent />} />
              <Route path="image-upload" element={<UploadImagetoMenu />} />
            </Route>
            <Route path="banquets" element={<Banquets />} />
          </Route>
          {/* User Profile Routes */}
          <Route path="user/profile" element={<UserProfile />}>
            <Route index element={<UserLove />} />
            <Route path="checklists" element={<UserChecklists />} />
            <Route path="shortlists" element={<UserShortlists />} />
            <Route path="finalize-vendor" element={<UserFinalizeVendor />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          {/* User Message Route */}
          <Route path="user/inbox" element={<UserMessages />}>
            <Route index element={<GetBackMsg />} />
            <Route path=":id" element={<Chatbox />} />
          </Route>
          <Route path="mobilemessage/:id" element={<MobileMessage />} />
          <Route path="setup-wedding" element={<WeddingSetup />} />
          <Route path="/imageupload/guideline" element={<Guidelines />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog-view" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="reviews" element={<TotalReviews />} />
          <Route path="/checkout/:packageName" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vendor-signup" element={<Signup />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
