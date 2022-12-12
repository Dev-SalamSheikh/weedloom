import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const VendorPopup = ({ toggle }) => {
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

  return (
    <div className="vendors_popup h-screen overflow-y-scroll w-screen bg-white text-textSecondary-900 z-50 fixed top-0 right-0">
      <div className="vendors_popup_content">
        {/* Heading Part */}
        <div className="heading bg-textPrimary-900 px-4 pb-5 pt-3">
          <div className="cities flex items-center text-white mb-4 ml-2">
            <i
              className="fa-solid fa-xmark text-3xl cursor-pointer"
              onClick={toggle}
            ></i>
            <h1 className="ml-4 text-lg font-bold">Wedding Categories</h1>
          </div>
          <div className="searchBox flex items-center bg-white pl-6 p-2 rounded-full">
            <i className="fa-solid fa-magnifying-glass mr-4"></i>
            <input
              type="text"
              placeholder="Search City"
              className="w-full bg-transparent outline-none text-textPrimary-900
            "
            />
          </div>
        </div>

        {/* Content Part */}
        <div className="vendors__popup_content px-6">
          <div className="list_items w-full my-4">
            {/* Item 1 */}
            <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
              <div
                className="main_items flex justify-between items-center"
                onClick={() => setVenues(!venues)}
              >
                <div className="item_left flex items-center w-full">
                  <div className="w-full">
                    <span className="font-semibold">Venues</span>
                  </div>
                </div>
                <div className="item_right">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {venues && (
              <div className="sub_items mt-4">
                <ul className="text-sm">
                  <NavLink to="/venue1">
                    <li className="mb-4">Venues 1</li>
                  </NavLink>
                  <NavLink to="/venue2">
                    <li className="mb-4">Venues 2</li>
                  </NavLink>
                  <NavLink to="/venue3">
                    <li className="mb-4">Venues 3</li>
                  </NavLink>
                  <NavLink to="/venue4">
                    <li className="mb-4">Venues 4</li>
                  </NavLink>
                  <NavLink to="/venue5">
                    <li className="mb-4">Venues 5</li>
                  </NavLink>
                  <NavLink to="/venue">
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
                  <div className="w-full">
                    <span className="font-semibold">Photographs</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {photographs && (
              <div className="sub_items mt-4">
                <ul className="text-sm">
                  <NavLink to="/">
                    <li className="mb-4">Photographs 1</li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="mb-4">Photographs 2</li>
                  </NavLink>
                  <NavLink to="/">
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
                  <div className="w-full">
                    <span className="font-semibold">Makeup</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {makeup && (
              <div className="sub_items mt-4">
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
                  <div className="w-full">
                    <span className="font-semibold">Bridal Wear</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {bridal && (
              <div className="sub_items mt-4">
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
                  <div className="w-full">
                    <span className="font-semibold">Groom Wear</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {groom && (
              <div className="sub_items mt-4">
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
                  <div className="w-full">
                    <span className="font-semibold">Mehndi</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {mehndi && (
              <div className="sub_items mt-4">
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
                  <div className="w-full">
                    <span className="font-semibold">Planning & Decor</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {decor && (
              <div className="sub_itemsmt-4">
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
                  <div className="w-full">
                    <span className="font-semibold">Food</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {food && (
              <div className="sub_items mt-4">
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
                  <div className="w-full">
                    <span className="font-semibold">Invites & Gifts</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {invites && (
              <div className="sub_items mt-4">
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
                  <div className="w-full">
                    <span className="font-semibold">Music & Dance</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {music && (
              <div className="sub_items mt-4">
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
                  <div className="w-full">
                    <span className="font-semibold">
                      Jewellery & Accessories
                    </span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {jewellery && (
              <div className="sub_items mt-4">
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
                  <div className="w-full">
                    <span className="font-semibold text-base">Honeymoon</span>
                  </div>
                </div>
                <div className="item_right text-end">
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>
            {honeymoon && (
              <div className="sub_items mt-4">
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
      </div>
    </div>
  );
};

export default React.memo(VendorPopup);
