import { useState } from "react";
import NewIcon from "../../assets/new.png";
import VenuesPop from "./navbar popups/VenuesPop";
import VendorsPop from "./navbar popups/VendorsPop";
import PhotosPop from "./navbar popups/PhotosPop";
import WeddingsPop from "./navbar popups/WeddingsPop";
import BlogPop from "./navbar popups/BlogPop";
import ShopPop from "./navbar popups/ShopPop";
import InvitesPop from "./navbar popups/InvitesPop";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import AllCitiesPopup from "../all cities popup/AllCitiesPopup";

const Navbar = () => {
  const [showPop, setShowPop] = useState(false);
  const [open, setOpen] = useState(false);
  const [venues, setVenues] = useState(false);
  const [photographs, setPhotographs] = useState(false);
  const [makeup, setMakeup] = useState(false);
  const [bridal, setBridal] = useState(false);
  const [groom, setGroom] = useState(false);
  const [mehndi, setMehndi] = useState(false);
  const [decor, setDecor] = useState(false);
  const [food, setFood] = useState(false);
  const [invites, setInvites] = useState(false);
  const [music, setMusic] = useState(false);
  const [jewellery, setJewellery] = useState(false);
  const [honeymoon, setHoneymoon] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [shop, setShop] = useState(false);
  const [allCities, setAllCities] = useState(false);

  const handleAllCities = () => {
    setAllCities(!allCities);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="desktop_nav hidden xl:block">
        <div className="navbar bg-navbarBGL-900 flex justify-between items-center md:px-12 text-white py-4 md:py-0 px-2">
          <div className="navbar__left flex items-center w-7/12">
            <div className="navbar__logo">
              <NavLink to="/">
                <span className="logo text-lg md:text-3xl font-bold mr-10 cursor-pointer">
                  Logo Here
                </span>
              </NavLink>
            </div>
            <div className="navbar__links">
              <ul className="flex gap-9 font-bold">
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}
                >
                  <NavLink to="/">Venuse</NavLink>
                  {showPop && <VenuesPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}
                >
                  <NavLink to="/photographer">Vendors</NavLink>
                  {showPop && <VendorsPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}
                >
                  <NavLink to="/gallery">Photos</NavLink>
                  {showPop && <PhotosPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}
                >
                  <NavLink to="/">Real Weeding</NavLink>
                  {showPop && <WeddingsPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}
                >
                  <NavLink to="/blog">Blog</NavLink>
                  {showPop && <BlogPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}
                >
                  <NavLink to="/">Shops</NavLink>
                  {showPop && <ShopPop />}
                </li>
                <li
                  className="flex submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}
                >
                  <NavLink to="/">E-Invites</NavLink>
                  <img className="w-5 ml-1" src={NewIcon} alt="new__icon" />
                  {showPop && <InvitesPop />}
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar__right flex gap-6 items-center justify-end w-5/12">
            <div className="search__icon bg-headerBG-900 py-1 px-2 rounded-full">
              <NavLink to="/search">
                <i className="fa-solid fa-magnifying-glass text-sm"></i>
              </NavLink>
            </div>
            {/* Signup BUtton Hidden */}

            {/* <div className="login__btn">
              <NavLink to="/signup">
                <button className="bg-headerBG-900 py-1 px-10 rounded-full font-semibold">
                  Signup
                </button>
              </NavLink>
            </div> */}

            <div className="login__btn">
              <NavLink to="/login">
                <button className="bg-headerBG-900 py-1 px-10 rounded-full font-semibold">
                  Login
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile_nav block xl:hidden">
        <div className="mobile_navbar bg-textPrimary-900 py-3 px-4 text-white flex justify-between items-center duration-500">
          <div className="mobile_nav_left flex w-full gap-4 duration-500">
            <div
              className="hamburger cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <i className="fa-solid fa-bars text-3xl"></i>
            </div>
            <NavLink to="/">
              <div className="logo">
                <span className="text-2xl">Logo Here</span>
              </div>
            </NavLink>
          </div>

          <div className="mobile_nav_right flex w-full gap-6 justify-end items-center duration-500">
            <div
              className="all-cities text-base cursor-pointer"
              onClick={handleAllCities}
            >
              <span>All Cities</span>{" "}
              <i className="fa-solid fa-caret-down ml-2"></i>
            </div>
            <NavLink to="/login">
              <div className="login_icon text-xl cursor-pointer">
                <i className="fa-solid fa-user-plus"></i>
              </div>
            </NavLink>
          </div>
        </div>

        {allCities && <AllCitiesPopup toggle={handleAllCities} />}

        {/* Sidebar Start */}
        <div className="sidebar">
          <div
            className={`sidebar__content bg-white shadow-lg text-black h-screen md:w-[50vw] w-[70vw] fixed top-0 left-0 z-50 duration-500 transition-all py-6 overflow-y-scroll ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            <div
              className="closeIcon absolute top-0 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-xmark text-3xl text-textPrimary-900"></i>
            </div>

            <div className="sign_in px-4 border-b border-paginationBg-900 pb-4">
              <NavLink to="/signup">
                <span className="text-textPrimary-900 font-semibold text-lg">
                  <NavLink to="/login">Sign In</NavLink>{" "}
                  <span className="text-textSecondary-900 px-2">/</span>{" "}
                  <NavLink to="/signup">Sign Up</NavLink>
                </span>
              </NavLink>
            </div>

            {/* Wedding Category */}

            <div className="wedding_category px-4 py-4 border-b border-paginationBg-900">
              <div className="heading">
                <span className="text-textSecondary-900 font-semibold">
                  Wedding Categories
                </span>
              </div>
              <div className="list_items w-full my-4">
                {/* Item 1 */}
                <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setVenues(!venues)}
                  >
                    <div className="item_left flex items-center w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-store text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Venues</span>
                      </div>
                    </div>
                    <div className="item_right">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          venues ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {venues && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/venue1">
                        <li className="mb-4">Venues 1</li>
                      </NavLink>
                      <NavLink to="/venue2">
                        <li className="mb-4">Venues 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Venues 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Venues 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Venues 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Venues 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 2 */}
                <div className="item2 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setPhotographs(!photographs)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-camera text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Photographs
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          photographs ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {photographs && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/photographer">
                        <li className="mb-4">Photographs 1</li>
                      </NavLink>
                      <NavLink to="/photographer">
                        <li className="mb-4">Photographs 2</li>
                      </NavLink>
                      <NavLink to="/photographer">
                        <li className="mb-4">Photographs 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Photographs 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Photographs 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Photographs 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 3 */}
                <div className="item3 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setMakeup(!makeup)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-palette text-2xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Makeup</span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          makeup ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {makeup && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Makeup 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Makeup 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Makeup 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Makeup 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Makeup 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Makeup 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 4 */}
                <div className="item4 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setBridal(!bridal)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-street-view text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Bridal Wear
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          bridal ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {bridal && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Bridal Wear 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Bridal Wear 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Bridal Wear 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Bridal Wear 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Bridal Wear 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Bridal Wear 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 5 */}
                <div className="item5 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setGroom(!groom)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-user-tie text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Groom Wear
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          groom ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {groom && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Groom Wear 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Groom Wear 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Groom Wear 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Groom Wear 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Groom Wear 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Groom Wear 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 6 */}
                <div className="item6 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setMehndi(!mehndi)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-regular fa-hand text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Mehndi</span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          mehndi ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {mehndi && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Mehndi 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Mehndi 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Mehndi 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Mehndi 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Mehndi 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Mehndi 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 7 */}
                <div className="item7 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setDecor(!decor)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-tree text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Planning & Decor
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          decor ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {decor && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Planning & Decor 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Planning & Decor 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Planning & Decor 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Planning & Decor 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Planning & Decor 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Planning & Decor 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 8 */}
                <div className="item8 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setFood(!food)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-utensils text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Food</span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          food ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {food && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Food 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Food 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Food 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Food 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Food 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Food 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 9 */}
                <div className="item9 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setInvites(!invites)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-regular fa-envelope text-textPrimary-900 text-xl"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Invites & Gifts
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          invites ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {invites && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Invites & Gifts 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Invites & Gifts 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Invites & Gifts 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Invites & Gifts 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Invites & Gifts 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Invites & Gifts 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 10 */}
                <div className="item10 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setMusic(!music)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-headphones text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Music & Dance
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          music ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {music && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Music & Dance 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Music & Dance 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Music & Dance 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Music & Dance 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Music & Dance 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Music & Dance 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 11 */}
                <div className="item11 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setJewellery(!jewellery)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-regular fa-hand text-xl text-textPrimary-900"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Jewellery & Accessories
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          jewellery ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {jewellery && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Jewellery & Accessories 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Jewellery & Accessories 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Jewellery & Accessories 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Jewellery & Accessories 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Jewellery & Accessories 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Jewellery & Accessories 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 12 */}
                <div className="item6 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setHoneymoon(!honeymoon)}
                  >
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <i className="fa-solid fa-heart-pulse text-textPrimary-900 text-xl"></i>
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Honeymoon</span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          honeymoon ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {honeymoon && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Honeymoon 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Honeymoon 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Honeymoon 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Honeymoon 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Honeymoon 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Honeymoon 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Second Section */}
            <div className="photos_section px-4 py-4 border-b border-paginationBg-900">
              <div className="list_items w-full">
                {/* Second Section Item 1 */}
                <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setPhoto(!photo)}
                  >
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <span className="font-semibold text-sm">Photos</span>
                      </div>
                    </div>
                    <div className="item_right">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          photo ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {photo && (
                  <div className="sub_items mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">Photos 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Photos 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Photos 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Photos 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Photos 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">Photos 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}
                {/* Item 2 */}
                <div className="item2 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div className="main_items flex justify-between items-center">
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <NavLink to="/realwedding">
                          <span className="font-semibold text-sm">
                            Real Weddings
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="item3 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div className="main_items flex justify-between items-center">
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <NavLink to="/blog">
                          <span className="font-semibold text-sm">Blogs</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="item4 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div className="main_items flex justify-between items-center">
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <NavLink to="/mynt">
                          <span className="font-semibold text-sm">
                            WMG Mynt
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="item5 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setShop(!shop)}
                  >
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <span className="font-semibold text-sm">Shop</span>
                      </div>
                    </div>
                    <div className="item_right">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          shop ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
                {shop && (
                  <div className="sub_items mt-4">
                    <ul className="text-sm">
                      <NavLink to="/">
                        <li className="mb-4">shop 1</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">shop 2</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">shop 3</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">shop 4</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">shop 5</li>
                      </NavLink>
                      <NavLink to="/">
                        <li className="mb-4">shop 6</li>
                      </NavLink>
                    </ul>
                  </div>
                )}

                {/* Item 6 */}
                <div className="item6 w-full text-textSecondary-900 cursor-pointer">
                  <div className="main_items flex justify-between items-center">
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <NavLink to="/invites">
                          <span className="font-semibold text-sm">
                            E-Invites
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Section */}
            <div className="review_section px-4 py-4 border-b border-paginationBg-900">
              {/* Item 1 */}
              <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <NavLink to="/reviews">
                        <span className="font-semibold text-sm">
                          Write a Review
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="item2 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <NavLink to="/download">
                        <span className="font-semibold text-sm">
                          Download the App
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Section */}
            <div className="about_section px-4 pt-4">
              {/* Item 1 */}
              <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <NavLink to="/about">
                        <span className="font-semibold text-xs">About</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item2 */}
              <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <NavLink to="/terms">
                        <span className="font-semibold text-xs">
                          Terms & Condition
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item3 */}
              <div className="item3 mb-4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <NavLink to="/policy">
                        <span className="font-semibold text-xs">
                          Privacy Policy
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item4 */}
              <div className="item4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <NavLink to="/contact">
                        <span className="font-semibold text-xs">
                          Contact Us
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navba End */}
    </>
  );
};

export default Navbar;
